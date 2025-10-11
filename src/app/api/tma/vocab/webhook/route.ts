/**
 * API Route: Telegram Bot Webhook
 * POST /api/tma/vocab/webhook
 * 
 * Handles incoming Telegram bot commands and messages
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // TODO: Handle Telegram webhook updates
        // - /start command -> send welcome message with mini app button
        // - Other commands as needed

        console.log('Telegram webhook received:', body);

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}
