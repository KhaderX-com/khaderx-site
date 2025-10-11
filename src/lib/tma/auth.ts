/**
 * Telegram Mini App Authentication
 * Verifies initData from Telegram WebApp
 */

import crypto from 'crypto';

/**
 * Verifies Telegram WebApp initData
 * @see https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
 */
export async function verifyTelegramWebAppData(initData: string): Promise<boolean> {
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        if (!botToken) {
            console.error('TELEGRAM_BOT_TOKEN not configured');
            return false;
        }

        // Parse initData
        const urlParams = new URLSearchParams(initData);
        const hash = urlParams.get('hash');
        urlParams.delete('hash');

        if (!hash) {
            return false;
        }

        // Create data-check-string
        const dataCheckString = Array.from(urlParams.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');

        // Create secret key
        const secretKey = crypto
            .createHmac('sha256', 'WebAppData')
            .update(botToken)
            .digest();

        // Calculate hash
        const calculatedHash = crypto
            .createHmac('sha256', secretKey)
            .update(dataCheckString)
            .digest('hex');

        // Verify hash matches
        return calculatedHash === hash;

    } catch (error) {
        console.error('Error verifying Telegram data:', error);
        return false;
    }
}

/**
 * Extracts user data from Telegram initData
 */
export function parseTelegramUser(initData: string) {
    try {
        const urlParams = new URLSearchParams(initData);
        const userParam = urlParams.get('user');

        if (!userParam) {
            return null;
        }

        return JSON.parse(userParam);
    } catch (error) {
        console.error('Error parsing Telegram user:', error);
        return null;
    }
}
