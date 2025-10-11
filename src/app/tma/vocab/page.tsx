/**
 * Business Vocabulary - Telegram Mini App Entry Point
 * URL: https://vocab.apps.khaderx.com/tma
 */

'use client';

import { useEffect } from 'react';
import { useTelegramWebApp } from '@/hooks/useTelegramWebApp';
import { useVocabGenerator } from '@/hooks/useVocabGenerator';
import { useMonetagAd } from '@/hooks/useMonetagAd';
import { VocabGenerator } from '@/components/vocab/VocabGenerator';
import { FlashCard } from '@/components/vocab/FlashCard';

export default function VocabTMAPage() {
  const { isReady, user, isInTelegram, initData, webApp, haptic } = useTelegramWebApp();
  const { generateCards, clearCards, isGenerating, error, currentCards } = useVocabGenerator(initData);
  const { isSDKLoaded } = useMonetagAd();

  // Check if in localhost development mode
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  const handleGenerate = async (params: {
    topic: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    language: string;
  }) => {
    // Haptic feedback on generate
    haptic?.medium();

    const result = await generateCards(params);

    // Success or error haptic
    if (result && result.length > 0) {
      haptic?.success();
    } else if (error) {
      haptic?.error();
    }
  };

  const handleRegenerate = () => {
    haptic?.light();
    clearCards();
  };

  // Main Button and Back Button integration
  useEffect(() => {
    if (webApp && isInTelegram) {
      const handleBackClick = () => {
        haptic?.light();
        clearCards();
      };

      // Show back button when cards are displayed
      if (currentCards.length > 0) {
        webApp.BackButton.show();
        webApp.BackButton.onClick(handleBackClick);
      } else {
        webApp.BackButton.hide();
      }

      // Cleanup
      return () => {
        webApp.BackButton.offClick(handleBackClick);
        webApp.BackButton.hide();
      };
    }
  }, [webApp, isInTelegram, currentCards.length, haptic, clearCards]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⚡</div>
          <p className="text-gray-400">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Business Vocabulary
            </h1>
            {user && (
              <p className="text-sm text-gray-400 mt-1">
                Welcome, {user.first_name}! 👋
              </p>
            )}
          </div>
          {!isInTelegram && (
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              Demo Mode
            </span>
          )}
        </div>
      </div>

      {/* Development/Demo Mode Info */}
      {!isInTelegram && (
        <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-xl">{isLocalhost ? '🔧' : 'ℹ️'}</span>
            <div>
              <p className="font-medium mb-1">
                {isLocalhost ? 'Development Mode' : 'Demo Mode'}
              </p>
              <p className="text-blue-400/80">
                {isLocalhost
                  ? 'Testing on localhost with authentication bypass. This will NOT work in production.'
                  : "You're testing without Telegram. Open this in Telegram for the full experience!"
                }
              </p>
              {isLocalhost && (
                <p className="text-xs text-blue-500 mt-2">
                  📢 Monetag SDK: {isSDKLoaded ? '✅ Loaded' : '⏳ Loading...'}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
          ❌ {error}
        </div>
      )}

      {/* Main Content */}
      <div className="mb-8">
        <div className="space-y-6">
          {/* Generator Form */}
          {currentCards.length === 0 && (
            <VocabGenerator
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          )}

          {/* Generated Cards Grid */}
          {currentCards.length > 0 && (
            <div className="space-y-6 animate-fade-in">
              {/* Regenerate Button */}
              <button
                onClick={handleRegenerate}
                className="w-full py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-all"
              >
                🔄 Generate New Cards
              </button>

              {/* Cards Grid */}
              <div className="grid gap-4">
                {currentCards.map((card, index) => (
                  <FlashCard
                    key={`${card.term}-${index}`}
                    card={card}
                    cardNumber={index + 1}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs text-gray-500 space-y-1 mt-12">
        <p>Powered by Gemini AI ✨ • Generates 3 cards per request</p>
        {isInTelegram ? (
          <p>Running in Telegram Mini App 🚀</p>
        ) : (
          <p>Open in Telegram for full experience 📱</p>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
