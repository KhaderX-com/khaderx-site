/**
 * Hook to manage vocabulary card generation
 */

'use client';

import { useState } from 'react';
import type { VocabCard } from '@/lib/schema/vocab';

interface GenerateParams {
    topic: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    language: string;
}

export function useVocabGenerator(initData: string) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentCards, setCurrentCards] = useState<VocabCard[]>([]);

    const generateCards = async (params: GenerateParams) => {
        setIsGenerating(true);
        setError(null);

        try {
            // Use 'dev-bypass' in development if no initData
            const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
            const authData = initData || (isDev ? 'dev-bypass' : '');

            const response = await fetch('/api/tma/vocab/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-telegram-init-data': authData,
                },
                body: JSON.stringify(params),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate cards');
            }

            const data = await response.json();
            setCurrentCards(data.cards);
            return data.cards;

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
            setError(errorMessage);
            console.error('Generate error:', err);
            return null;
        } finally {
            setIsGenerating(false);
        }
    };

    const clearCards = () => {
        setCurrentCards([]);
        setError(null);
    };

    return {
        generateCards,
        clearCards,
        isGenerating,
        error,
        currentCards,
    };
}
