/**
 * Flashcard Component
 * Displays vocabulary card with flip animation
 */

'use client';

import { useState } from 'react';
import type { VocabCard } from '@/lib/schema/vocab';

interface FlashCardProps {
    card: VocabCard;
    cardNumber?: number;
}

export function FlashCard({
    card,
    cardNumber
}: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="space-y-4">
            {/* Card Container */}
            <div
                className="relative h-96 cursor-pointer perspective-1000"
                onClick={handleFlip}
            >
                <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                        }`}
                >
                    {/* Front Side */}
                    <div
                        className={`absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8 flex flex-col justify-between ${isFlipped ? 'invisible' : 'visible'
                            }`}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    {cardNumber && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                                            #{cardNumber}
                                        </span>
                                    )}
                                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                        {card.difficulty}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400">
                                    {card.topic}
                                </span>
                            </div>                            <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                                {card.term}
                            </h3>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                {card.definition}
                            </p>
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            👆 Tap to see examples
                        </div>
                    </div>

                    {/* Back Side */}
                    <div
                        className={`absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 flex flex-col justify-between rotate-y-180 ${isFlipped ? 'visible' : 'invisible'
                            }`}
                    >
                        <div className="space-y-6">
                            {/* Example */}
                            <div>
                                <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-2">
                                    💡 Example Usage
                                </h4>
                                <p className="text-gray-300 italic">
                                    &ldquo;{card.example}&rdquo;
                                </p>
                            </div>

                            {/* Synonyms */}
                            {card.synonyms && card.synonyms.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-2">
                                        🔄 Synonyms
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {card.synonyms.map((syn, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-sm border border-purple-500/30"
                                            >
                                                {syn}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Context */}
                            {card.context && (
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-2">
                                        📍 Context
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        {card.context}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            👆 Tap to flip back
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
}
