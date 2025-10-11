/**
 * Google Gemini AI Integration
 * Generates vocabulary flashcards using Gemini
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import type { VocabCard, GenerateVocabParams } from '@/lib/schema/vocab';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Generate 3 business vocabulary flashcards at once
 */
export async function generateVocabCards(
    params: GenerateVocabParams
): Promise<VocabCard[]> {
    const { topic, difficulty = 'intermediate', language = 'en' } = params;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
Generate 3 different business vocabulary flashcards for the topic: "${topic}"

Requirements:
- Difficulty level: ${difficulty}
- Language: ${language}
- Generate 3 DIFFERENT terms related to the topic
- Include: term, definition, example sentence, synonyms, and usage context for each

Format the response as a JSON array with this structure:
[
  {
    "term": "string",
    "definition": "string",
    "example": "string",
    "synonyms": ["string", "string"],
    "context": "string",
    "difficulty": "${difficulty}"
  },
  {
    "term": "string",
    "definition": "string",
    "example": "string",
    "synonyms": ["string", "string"],
    "context": "string",
    "difficulty": "${difficulty}"
  },
  {
    "term": "string",
    "definition": "string",
    "example": "string",
    "synonyms": ["string", "string"],
    "context": "string",
    "difficulty": "${difficulty}"
  }
]

Make them professional, clear, and relevant to business contexts. Ensure all 3 terms are different and complementary.
`.trim();

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse JSON array from response
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) {
            throw new Error('Failed to parse JSON from AI response');
        }

        const cardsData = JSON.parse(jsonMatch[0]);

        // Add metadata to each card
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return cardsData.map((cardData: any) => ({
            id: generateCardId(),
            ...cardData,
            topic,
            language,
            createdAt: new Date().toISOString(),
        }));

    } catch (error) {
        console.error('Gemini generation error:', error);
        throw new Error('Failed to generate vocabulary cards');
    }
}

/**
 * Generate a business vocabulary flashcard
 */
export async function generateVocabCard(
    params: GenerateVocabParams
): Promise<VocabCard> {
    const { topic, difficulty = 'intermediate', language = 'en' } = params;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
Generate a business vocabulary flashcard for the topic: "${topic}"

Requirements:
- Difficulty level: ${difficulty}
- Language: ${language}
- Include: term, definition, example sentence, synonyms, and usage context

Format the response as JSON with this structure:
{
  "term": "string",
  "definition": "string",
  "example": "string",
  "synonyms": ["string", "string"],
  "context": "string",
  "difficulty": "${difficulty}"
}

Make it professional, clear, and relevant to business contexts.
`.trim();

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Failed to parse JSON from AI response');
        }

        const cardData = JSON.parse(jsonMatch[0]);

        return {
            id: generateCardId(),
            ...cardData,
            topic,
            language,
            createdAt: new Date().toISOString(),
        };

    } catch (error) {
        console.error('Gemini generation error:', error);
        throw new Error('Failed to generate vocabulary card');
    }
}

/**
 * Generate unique card ID
 */
function generateCardId(): string {
    return `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
