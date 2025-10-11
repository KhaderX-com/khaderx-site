/**
 * Hook to manage Monetag Interstitial ads
 * Triggers ads ONLY when user clicks "Generate 3 Cards" button
 * Implements 30-second cooldown between ads
 */

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Extend Window interface to include Monetag SDK
declare global {
    interface Window {
        show_10023028?: (config?: MonetAgConfig) => Promise<void>;
    }
}

interface MonetAgConfig {
    type?: 'preload';
}

const AD_COOLDOWN_MS = 30000; // 30 seconds in milliseconds

/**
 * Hook to manage Monetag ads with manual control
 */
export function useMonetagAd() {
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);
    const [canShowAd, setCanShowAd] = useState(true);
    const lastAdTimeRef = useRef<number>(0);

    // Check if SDK is loaded
    useEffect(() => {
        const checkSDK = () => {
            if (typeof window !== 'undefined' && window.show_10023028) {
                setIsSDKLoaded(true);
                console.log('✅ Monetag SDK loaded');
            }
        };

        // Check immediately
        checkSDK();

        // Check again after a delay in case SDK loads later
        const timer = setTimeout(checkSDK, 2000);

        return () => clearTimeout(timer);
    }, []);

    /**
     * Show Interstitial ad with 30-second cooldown
     * Only triggers when user clicks "Generate 3 Cards" button
     */
    const showInterstitialAd = useCallback(async () => {
        if (typeof window === 'undefined' || !window.show_10023028) {
            console.warn('⚠️ Monetag SDK not loaded yet');
            return false;
        }

        // Check cooldown - ensure 30 seconds have passed since last ad
        const now = Date.now();
        const timeSinceLastAd = now - lastAdTimeRef.current;

        if (timeSinceLastAd < AD_COOLDOWN_MS) {
            const remainingTime = Math.ceil((AD_COOLDOWN_MS - timeSinceLastAd) / 1000);
            console.log(`⏳ Ad cooldown active. Wait ${remainingTime}s before next ad.`);
            return false;
        }

        try {
            // Set cooldown immediately to prevent multiple clicks
            setCanShowAd(false);
            lastAdTimeRef.current = now;

            console.log('🎬 Preloading Monetag ad...');

            // Preload the ad first
            await window.show_10023028({ type: 'preload' });

            console.log('✅ Ad preloaded, showing now...');

            // Show the ad immediately after preload
            await window.show_10023028();

            console.log('✅ Monetag Interstitial ad shown successfully');

            // Reset cooldown after 30 seconds
            setTimeout(() => {
                setCanShowAd(true);
                console.log('✅ Ad cooldown reset - ready for next ad');
            }, AD_COOLDOWN_MS);

            return true;
        } catch (error) {
            console.error('❌ Error showing Monetag ad:', error);

            // Reset cooldown on error so user can retry
            setTimeout(() => {
                setCanShowAd(true);
                lastAdTimeRef.current = 0;
            }, 5000); // 5 second retry delay

            return false;
        }
    }, []);

    return {
        isSDKLoaded,
        showInterstitialAd,
        canShowAd,
    };
}
