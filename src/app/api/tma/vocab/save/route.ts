/**
 * API Route: Save Vocabulary Flashcard
 * POST /api/tma/vocab/save
 * 
 * Saves user's generated flashcard to database
 */

import { NextRequest, NextResponse } from 'next/server';
import { verifyTelegramWebAppData } from '@/lib/tma/auth';

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
        // const { card, userId } = body;

        // TODO: Save to database
        // await saveCardToDatabase(userId, card);
        console.log('Card data received:', body);

        return NextResponse.json({
            success: true,
            message: 'Card saved successfully',
        });

    } catch (error) {
        console.error('Save vocab error:', error);
        return NextResponse.json(
            { error: 'Failed to save vocabulary card' },
            { status: 500 }
        );
    }
}
