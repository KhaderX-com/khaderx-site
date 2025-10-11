/**
 * Layout for Telegram Mini App
 * Strips unnecessary chrome, optimized for TMA viewport
 */

import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Business Vocabulary | KhaderX TMA',
    description: 'Generate business vocabulary flashcards with AI',
};

export default function TMAVocabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Load Telegram WebApp SDK */}
            <Script
                src="https://telegram.org/js/telegram-web-app.js"
                strategy="beforeInteractive"
            />

            {/* Load Monetag SDK */}
            <Script
                src="//libtl.com/sdk.js"
                data-zone="10023028"
                data-sdk="show_10023028"
                strategy="afterInteractive"
            />

            <div className="tma-container min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
                {children}
            </div>
        </>
    );
}
