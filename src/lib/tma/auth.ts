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
            console.error('❌ TELEGRAM_BOT_TOKEN not configured in environment variables');
            console.error('Please add it to Vercel: Settings → Environment Variables → TELEGRAM_BOT_TOKEN');
            return false;
        }

        // Parse initData
        const urlParams = new URLSearchParams(initData);
        const hash = urlParams.get('hash');
        urlParams.delete('hash');

        if (!hash) {
            console.error('❌ No hash found in Telegram initData');
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
        const isValid = calculatedHash === hash;

        if (!isValid) {
            console.error('❌ Telegram signature verification failed');
            console.error('This usually means:');
            console.error('1. Wrong bot token in environment variables');
            console.error('2. Mini app not configured for this bot in @BotFather');
            console.error('3. Using wrong bot to open the app');
        } else {
            console.log('✅ Telegram signature verified successfully');
        }

        return isValid;

    } catch (error) {
        console.error('❌ Error verifying Telegram data:', error);
        return false;
    }
}/**
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
