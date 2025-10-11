/**
 * Type definitions for Business Vocabulary app
 */

/**
 * Vocabulary flashcard
 */
export interface VocabCard {
    id: string;
    term: string;
    definition: string;
    example: string;
    synonyms: string[];
    context: string;
    topic: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    language: string;
    createdAt: string;
}

/**
 * Parameters for generating vocab card
 */
export interface GenerateVocabParams {
    topic: string;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    language?: string;
}

/**
 * User's saved card collection
 */
export interface UserVocabCollection {
    userId: string;
    cards: VocabCard[];
    totalCards: number;
    lastUpdated: string;
}

/**
 * Telegram user data
 */
export interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
}
