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
        const bypassAuth = process.env.BYPASS_AUTH === 'true';

        console.log('🔍 Auth Debug Info:');
        console.log('- NODE_ENV:', process.env.NODE_ENV);
        console.log('- BYPASS_AUTH:', process.env.BYPASS_AUTH);
        console.log('- Has initData:', !!initData);
        console.log('- Has TELEGRAM_BOT_TOKEN:', !!process.env.TELEGRAM_BOT_TOKEN);
        console.log('- Has GOOGLE_AI_KEY:', !!process.env.GOOGLE_AI_KEY);

        // In development or when BYPASS_AUTH is true, allow without verification
        if (isDevelopment || bypassAuth) {
            console.log('🔓 Running in demo mode - auth bypassed');
        } else if (initData) {
            // In production with initData, verify it
            console.log('🔐 Verifying Telegram data...');
            const isValid = await verifyTelegramWebAppData(initData);
            if (!isValid) {
                console.error('❌ Telegram verification failed');
                return NextResponse.json(
                    { error: 'Invalid Telegram data' },
                    { status: 401 }
                );
            }
            console.log('✅ Telegram verification passed');
        } else {
            // No initData and not in bypass mode
            console.error('❌ No initData provided and auth not bypassed');
            return NextResponse.json(
                { error: 'Missing Telegram init data' },
                { status: 401 }
            );
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
