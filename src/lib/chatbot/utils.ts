// Utility functions for chatbot

import { Message } from './types';

/**
 * Generate a unique ID
 */
export function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format timestamp for display
 */
export function formatTimestamp(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return date.toLocaleDateString();
}

/**
 * Save chat history to localStorage
 */
export function saveChatHistory(messages: Message[]): void {
    try {
        localStorage.setItem('khaderx-chat-history', JSON.stringify(messages));
    } catch (error) {
        console.error('Failed to save chat history:', error);
    }
}

/**
 * Load chat history from localStorage
 */
export function loadChatHistory(): Message[] {
    try {
        const stored = localStorage.getItem('khaderx-chat-history');
        if (stored) {
            const parsed = JSON.parse(stored);
            // Convert timestamp strings back to Date objects
            return parsed.map((msg: Message) => ({
                ...msg,
                timestamp: new Date(msg.timestamp)
            }));
        }
    } catch (error) {
        console.error('Failed to load chat history:', error);
    }
    return [];
}

/**
 * Clear chat history
 */
export function clearChatHistory(): void {
    try {
        localStorage.removeItem('khaderx-chat-history');
    } catch (error) {
        console.error('Failed to clear chat history:', error);
    }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .substring(0, 1000); // Limit length
}

/**
 * Detect if message contains contact intent
 */
export function detectContactIntent(message: string): boolean {
    const contactKeywords = [
        'quote', 'pricing', 'price', 'cost', 'hire', 'project',
        'consultation', 'consult', 'meeting', 'schedule', 'call',
        'contact', 'reach out', 'get in touch', 'discuss'
    ];

    const lowerMessage = message.toLowerCase();
    return contactKeywords.some(keyword => lowerMessage.includes(keyword));
}

/**
 * Check rate limit (simple client-side check)
 */
export function checkRateLimit(limit: number = 10, windowMs: number = 60000): boolean {
    try {
        const key = 'khaderx-chat-rate-limit';
        const stored = localStorage.getItem(key);
        const now = Date.now();

        if (!stored) {
            localStorage.setItem(key, JSON.stringify({ count: 1, timestamp: now }));
            return true;
        }

        const data = JSON.parse(stored);

        // Reset if window expired
        if (now - data.timestamp > windowMs) {
            localStorage.setItem(key, JSON.stringify({ count: 1, timestamp: now }));
            return true;
        }

        // Check limit
        if (data.count >= limit) {
            return false;
        }

        // Increment count
        localStorage.setItem(key, JSON.stringify({ count: data.count + 1, timestamp: data.timestamp }));
        return true;
    } catch (error) {
        console.error('Rate limit check failed:', error);
        return true; // Allow on error
    }
}

/**
 * Parse markdown-style formatting for basic display
 */
export function parseBasicMarkdown(text: string): string {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br />');
}
