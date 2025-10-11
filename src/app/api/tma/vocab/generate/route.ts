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
        // Get Telegram initData from header
        const initData = request.headers.get('x-telegram-init-data');

        // Production mode: Strict authentication required
        if (!initData) {
            console.error('❌ No Telegram init data provided');
            return NextResponse.json(
                { error: 'Telegram authentication required. Please open this app through Telegram.' },
                { status: 401 }
            );
        }

        // Verify Telegram initData signature
        console.log('🔐 Verifying Telegram authentication...');
        const isValid = await verifyTelegramWebAppData(initData);
        
        if (!isValid) {
            console.error('❌ Telegram authentication failed');
            return NextResponse.json(
                { error: 'Invalid Telegram authentication. Please restart the app.' },
                { status: 401 }
            );
        }

        console.log('✅ Telegram authentication successful');

        // Parse request body
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
