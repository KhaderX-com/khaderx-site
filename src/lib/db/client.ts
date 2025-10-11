/**
 * Database Client
 * TODO: Configure your database (Supabase, Prisma, etc.)
 */

import type { VocabCard } from '@/lib/schema/vocab';

/**
 * Save vocabulary card to database
 */
export async function saveVocabCard(userId: string, card: VocabCard) {
    // TODO: Implement database save
    console.log('Saving card to DB:', { userId, card });
    return true;
}

/**
 * Get user's vocabulary cards
 */
export async function getUserVocabCards(userId: string) {
    // TODO: Implement database fetch
    console.log('Fetching cards for user:', userId);
    return [];
}

/**
 * Delete vocabulary card
 */
export async function deleteVocabCard(userId: string, cardId: string) {
    // TODO: Implement database delete
    console.log('Deleting card:', { userId, cardId });
    return true;
}
