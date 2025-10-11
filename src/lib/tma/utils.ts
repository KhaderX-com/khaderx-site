/**
 * Telegram Mini App Utilities
 * Helper functions for TMA integration
 */

interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    close: () => void;
    MainButton: {
        setText: (text: string) => void;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
    };
}

interface WindowWithTelegram extends Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}

/**
 * Check if running inside Telegram Mini App
 */
export function isTelegramMiniApp(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }
    return !!(window as WindowWithTelegram).Telegram?.WebApp;
}

/**
 * Get Telegram WebApp instance
 */
export function getTelegramWebApp(): TelegramWebApp | null {
    if (typeof window === 'undefined') {
        return null;
    }
    return (window as WindowWithTelegram).Telegram?.WebApp || null;
}

/**
 * Initialize Telegram Mini App
 */
export function initTelegramWebApp() {
    const webApp = getTelegramWebApp();
    if (!webApp) {
        console.warn('Telegram WebApp not available');
        return null;
    }

    // Ready the app
    webApp.ready();

    // Expand to full height
    webApp.expand();

    return webApp;
}

/**
 * Close Telegram Mini App
 */
export function closeTelegramWebApp() {
    const webApp = getTelegramWebApp();
    if (webApp) {
        webApp.close();
    }
}

/**
 * Show Telegram main button
 */
export function showMainButton(text: string, onClick: () => void) {
    const webApp = getTelegramWebApp();
    if (!webApp) return;

    webApp.MainButton.setText(text);
    webApp.MainButton.show();
    webApp.MainButton.onClick(onClick);
}

/**
 * Hide Telegram main button
 */
export function hideMainButton() {
    const webApp = getTelegramWebApp();
    if (!webApp) return;

    webApp.MainButton.hide();
}
