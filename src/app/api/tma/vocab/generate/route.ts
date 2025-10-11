/**
 * API Route: Generate Vocabulary Flashcard
 * POST /api/tma/vocab/generate
 * 
 * Receives: topic, difficulty, language
 * Returns: AI-generated flashcard
 */

import { NextRequest, NextResponse } from 'next/server';
import { verifyTelegramWebAppData } from '@/lib/tma/auth';
import { generateVocabCards } from '@/lib/ai/gemini';

export async function POST(request: NextRequest) {
    try {
        // 1. Verify Telegram initData (optional in development)
        const initData = request.headers.get('x-telegram-init-data');
        const isDevelopment = process.env.NODE_ENV === 'development';

        // In production, require valid Telegram data
        // In development, allow demo mode
        if (!isDevelopment && !initData) {
            return NextResponse.json(
                { error: 'Missing Telegram init data' },
                { status: 401 }
            );
        }

        // Verify if initData is provided
        if (initData) {
            const isValid = await verifyTelegramWebAppData(initData);
            if (!isValid && !isDevelopment) {
                return NextResponse.json(
                    { error: 'Invalid Telegram data' },
                    { status: 401 }
                );
            }
        }

        // 2. Parse request body
        const body = await request.json();
        const { topic, difficulty, language } = body;

        // 3. Generate 3 flashcards using AI
        const cards = await generateVocabCards({
            topic,
            difficulty: difficulty || 'intermediate',
            language: language || 'en',
        });

        // 4. Return generated cards
        return NextResponse.json({
            success: true,
            cards,
        });
    } catch (error) {
        console.error('Generate vocab error:', error);
        return NextResponse.json(
            { error: 'Failed to generate vocabulary card' },
            { status: 500 }
        );
    }
}
