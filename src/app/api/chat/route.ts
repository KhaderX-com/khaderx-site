// API Route for Gemini Chat

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '@/lib/chatbot/chatContext';
import { Message } from '@/lib/chatbot/types';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 20; // requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const userLimit = rateLimitMap.get(identifier);

    if (!userLimit || now > userLimit.resetTime) {
        rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (userLimit.count >= RATE_LIMIT) {
        return false;
    }

    userLimit.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const clientIp = request.headers.get('x-forwarded-for') || 'unknown';

        // Check rate limit
        if (!checkRateLimit(clientIp)) {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Please try again in a minute.' },
                { status: 429 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { message, conversationHistory } = body;

        // Validate input
        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message format' },
                { status: 400 }
            );
        }

        // Sanitize and limit message length
        const sanitizedMessage = message.trim().substring(0, 1000);

        if (!sanitizedMessage) {
            return NextResponse.json(
                { error: 'Message cannot be empty' },
                { status: 400 }
            );
        }

        // Check if API key is set
        if (!process.env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY is not set in environment variables');
            console.error('Available env vars:', Object.keys(process.env).filter(key => key.startsWith('GEMINI') || key.startsWith('NEXT_')));
            return NextResponse.json(
                { error: 'AI service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        console.log('GEMINI_API_KEY is set:', process.env.GEMINI_API_KEY ? 'Yes (length: ' + process.env.GEMINI_API_KEY.length + ')' : 'No');

        // Initialize Gemini model
        // Using gemini-2.5-flash for fast and efficient responses
        let model;
        try {
            model = genAI.getGenerativeModel({
                model: 'gemini-2.5-flash',
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 800,
                },
            });
        } catch (modelError) {
            console.error('Failed to initialize gemini-2.5-flash model:', modelError);
            throw new Error('AI model initialization failed');
        }

        // Build conversation history for context
        const history = conversationHistory?.slice(-10) || []; // Keep last 10 messages

        // Format chat history for Gemini
        const chatHistory = history.map((msg: Message) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));

        // Start chat with history
        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: SYSTEM_PROMPT }],
                },
                {
                    role: 'model',
                    parts: [{ text: 'Understood! I\'m ready to assist visitors to KhaderX with professionalism and expertise. How can I help you today?' }],
                },
                ...chatHistory,
            ],
        });

        // Send message and get response
        const result = await chat.sendMessage(sanitizedMessage);
        const response = await result.response;
        const text = response.text();

        // Return successful response
        return NextResponse.json({
            response: text,
            success: true,
        });

    } catch (error) {
        console.error('Chat API Error:', error);

        // Log detailed error information for debugging
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        // Handle specific error types
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // Check for specific Gemini API errors
        if (errorMessage.includes('API key') || errorMessage.includes('GEMINI_API_KEY')) {
            return NextResponse.json(
                { error: 'AI service configuration error. Please verify your API key.' },
                { status: 500 }
            );
        }

        if (errorMessage.includes('quota') || errorMessage.includes('429')) {
            return NextResponse.json(
                { error: 'Service temporarily unavailable due to rate limits. Please try again later.' },
                { status: 503 }
            );
        }

        if (errorMessage.includes('not found') || errorMessage.includes('404')) {
            return NextResponse.json(
                { error: 'AI model not available. Please contact support.' },
                { status: 503 }
            );
        }

        if (errorMessage.includes('permission') || errorMessage.includes('403')) {
            return NextResponse.json(
                { error: 'API key permissions error. Please verify your API key has access to Gemini API.' },
                { status: 500 }
            );
        }

        // Generic error with more helpful message
        return NextResponse.json(
            { error: `Failed to process your message: ${errorMessage.substring(0, 100)}` },
            { status: 500 }
        );
    }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}
