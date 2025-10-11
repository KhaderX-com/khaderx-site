/**
 * Hook to manage Monetag In-app Interstitial ads
 * Triggers ads when user performs specific actions
 */

'use client';

import { useCallback, useEffect, useState } from 'react';

// Extend Window interface to include Monetag SDK
declare global {
    interface Window {
        show_10023028?: (config?: MonetAgConfig) => void;
    }
}

interface InAppSettings {
    frequency: number;    // max number of ads per session
    capping: number;      // session duration in hours
    interval: number;     // time in seconds between ads
    timeout: number;      // delay before first ad (seconds)
    everyPage: boolean;   // reset session on page reload
}

interface MonetAgConfig {
    type: 'inApp';
    inAppSettings: InAppSettings;
}

/**
 * Hook to manage Monetag ads
 */
export function useMonetagAd() {
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);

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
     * Show In-app Interstitial ad
     * This is called when user clicks "Generate 3 Cards" button
     */
    const showInAppInterstitial = useCallback(() => {
        if (typeof window === 'undefined' || !window.show_10023028) {
            console.warn('⚠️ Monetag SDK not loaded yet');
            return false;
        }

        try {
            // Configure In-app Interstitial
            window.show_10023028({
                type: 'inApp',
                inAppSettings: {
                    frequency: 3,      // Show 3 ads max
                    capping: 0.05,      // Within 3 minutes (0.05 hours)
                    interval: 30,      // 30 seconds between ads
                    timeout: 5,        // 5 second delay before first ad
                    everyPage: false   // Keep session across page navigation
                }
            });

            console.log('✅ Monetag In-app Interstitial triggered');
            return true;
        } catch (error) {
            console.error('❌ Error showing Monetag ad:', error);
            return false;
        }
    }, []);

    return {
        isSDKLoaded,
        showInAppInterstitial,
    };
}
