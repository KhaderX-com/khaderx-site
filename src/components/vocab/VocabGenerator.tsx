/**
 * Vocabulary Generator Form Component
 * Input form for generating vocabulary flashcards
 */

'use client';

import { useState } from 'react';
import { useMonetagAd } from '@/hooks/useMonetagAd';

interface VocabGeneratorProps {
    onGenerate: (params: {
        topic: string;
        difficulty: 'beginner' | 'intermediate' | 'advanced';
        language: string;
    }) => void;
    isGenerating: boolean;
}

const difficulties = [
    { value: 'beginner', label: '🟢 Beginner', emoji: '🌱' },
    { value: 'intermediate', label: '🟡 Intermediate', emoji: '📈' },
    { value: 'advanced', label: '🔴 Advanced', emoji: '🚀' },
] as const;

const languages = [
    { value: 'en', label: 'English 🇬🇧' },
    { value: 'ar', label: 'Arabic 🇸🇦' },
    { value: 'es', label: 'Spanish 🇪🇸' },
    { value: 'fr', label: 'French 🇫🇷' },
    { value: 'de', label: 'German 🇩🇪' },
];

export function VocabGenerator({ onGenerate, isGenerating }: VocabGeneratorProps) {
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
    const [language, setLanguage] = useState('en');

    // Initialize Monetag ad hook
    const { showInterstitialAd, canShowAd } = useMonetagAd();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (topic.trim()) {
            // Trigger Interstitial ad ONLY when user clicks (with 30s cooldown)
            showInterstitialAd();

            // Call the original onGenerate function
            onGenerate({ topic: topic.trim(), difficulty, language });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Topic Input */}
            <div>
                <label htmlFor="topic" className="block text-sm font-medium mb-2">
                    📚 Business Topic
                </label>
                <input
                    id="topic"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Marketing Strategies, Financial Terms..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    disabled={isGenerating}
                    required
                />
            </div>

            {/* Difficulty Selector */}
            <div>
                <label className="block text-sm font-medium mb-3">
                    🎯 Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                    {difficulties.map((diff) => (
                        <button
                            key={diff.value}
                            type="button"
                            onClick={() => setDifficulty(diff.value)}
                            className={`px-4 py-3 rounded-lg border transition-all ${difficulty === diff.value
                                ? 'bg-cyan-500 border-cyan-400 text-white'
                                : 'bg-white/5 border-gray-700 hover:border-gray-600'
                                }`}
                            disabled={isGenerating}
                        >
                            <div className="text-2xl mb-1">{diff.emoji}</div>
                            <div className="text-xs font-medium">
                                {diff.value.charAt(0).toUpperCase() + diff.value.slice(1)}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Language Picker */}
            <div>
                <label htmlFor="language" className="block text-sm font-medium mb-2">
                    🌍 Language
                </label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    disabled={isGenerating}
                >
                    {languages.map((lang) => (
                        <option key={lang.value} value={lang.value} className="bg-gray-900">
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Generate Button */}
            <button
                type="submit"
                disabled={isGenerating || !topic.trim()}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${isGenerating || !topic.trim()
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/50'
                    }`}
            >
                {isGenerating ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Generating 3 cards...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        ✨ Generate 3 Cards
                    </span>
                )}
            </button>

            {/* Ad Cooldown Indicator (Development Only) */}
            {!canShowAd && process.env.NODE_ENV === 'development' && (
                <div className="text-center text-xs text-yellow-400 mt-2">
                    ⏳ Ad cooldown active (30s between ads)
                </div>
            )}
        </form>
    );
}
