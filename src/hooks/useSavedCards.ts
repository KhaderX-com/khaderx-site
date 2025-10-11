/**
 * Hook to manage saved vocabulary cards
 */

'use client';

import { useState, useEffect } from 'react';
import type { VocabCard } from '@/lib/schema/vocab';

export function useSavedCards(userId?: number) {
    const [savedCards, setSavedCards] = useState<VocabCard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Load saved cards from localStorage (for now)
    useEffect(() => {
        const loadCardsFromStorage = () => {
            try {
                const stored = localStorage.getItem(`vocab_cards_${userId}`);
                if (stored) {
                    setSavedCards(JSON.parse(stored));
                }
            } catch (err) {
                console.error('Error loading cards:', err);
            }
        };

        if (userId) {
            loadCardsFromStorage();
        }
    }, [userId]);

    const saveCardsToStorage = (cards: VocabCard[]) => {
        try {
            localStorage.setItem(`vocab_cards_${userId}`, JSON.stringify(cards));
        } catch (err) {
            console.error('Error saving cards:', err);
        }
    };

    const saveCard = async (card: VocabCard, initData?: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Save to API (if initData available)
            if (initData) {
                const response = await fetch('/api/tma/vocab/save', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-telegram-init-data': initData,
                    },
                    body: JSON.stringify({ card, userId }),
                });

                if (!response.ok) {
                    throw new Error('Failed to save card to server');
                }
            }

            // Save to localStorage
            const updatedCards = [...savedCards, card];
            setSavedCards(updatedCards);
            saveCardsToStorage(updatedCards);

            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to save card';
            setError(errorMessage);
            console.error('Save error:', err);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const deleteCard = (cardId: string) => {
        const updatedCards = savedCards.filter(card => card.id !== cardId);
        setSavedCards(updatedCards);
        saveCardsToStorage(updatedCards);
    };

    const searchCards = (query: string) => {
        if (!query.trim()) return savedCards;

        const lowerQuery = query.toLowerCase();
        return savedCards.filter(card =>
            card.term.toLowerCase().includes(lowerQuery) ||
            card.definition.toLowerCase().includes(lowerQuery) ||
            card.topic.toLowerCase().includes(lowerQuery)
        );
    };

    return {
        savedCards,
        saveCard,
        deleteCard,
        searchCards,
        isLoading,
        error,
    };
}
