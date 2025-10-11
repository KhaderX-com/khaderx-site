/**
 * Hook to initialize and manage Telegram WebApp
 */

'use client';

import { useEffect, useState } from 'react';

interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    close: () => void;
    initData: string;
    initDataUnsafe: {
        user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
        };
    };
    themeParams: {
        bg_color?: string;
        text_color?: string;
        hint_color?: string;
        link_color?: string;
        button_color?: string;
        button_text_color?: string;
    };
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isActive: boolean;
        setText: (text: string) => void;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
        show: () => void;
        hide: () => void;
        enable: () => void;
        disable: () => void;
        showProgress: (leaveActive?: boolean) => void;
        hideProgress: () => void;
    };
    BackButton: {
        isVisible: boolean;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
        show: () => void;
        hide: () => void;
    };
    HapticFeedback: {
        impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
        notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
        selectionChanged: () => void;
    };
}

interface WindowWithTelegram extends Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}

export function useTelegramWebApp() {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useState<TelegramWebApp['initDataUnsafe']['user'] | null>(null);

    useEffect(() => {
        // Check if Telegram WebApp is available
        const tg = (window as WindowWithTelegram).Telegram?.WebApp;

        if (tg) {
            // Initialize
            tg.ready();
            tg.expand();

            setWebApp(tg);
            setUser(tg.initDataUnsafe.user || null);
            setIsReady(true);

            console.log('Telegram WebApp initialized:', {
                user: tg.initDataUnsafe.user,
                theme: tg.themeParams,
            });
        } else {
            console.warn('Telegram WebApp not available - running in browser mode');
            setIsReady(true); // Still set ready for development
        }
    }, []);

    // Utility functions for haptic feedback
    const haptic = {
        light: () => webApp?.HapticFeedback.impactOccurred('light'),
        medium: () => webApp?.HapticFeedback.impactOccurred('medium'),
        heavy: () => webApp?.HapticFeedback.impactOccurred('heavy'),
        success: () => webApp?.HapticFeedback.notificationOccurred('success'),
        error: () => webApp?.HapticFeedback.notificationOccurred('error'),
        warning: () => webApp?.HapticFeedback.notificationOccurred('warning'),
        selection: () => webApp?.HapticFeedback.selectionChanged(),
    };

    return {
        webApp,
        isReady,
        user,
        isInTelegram: !!webApp,
        theme: webApp?.themeParams || {},
        initData: webApp?.initData || '',
        haptic,
    };
}
