/**
 * Conditional Chatbot Component
 * Shows chatbot on all pages EXCEPT TMA vocabulary page
 */

'use client';

import { usePathname } from 'next/navigation';
import Chatbot from './Chatbot';

export default function ConditionalChatbot() {
    const pathname = usePathname();

    // Hide chatbot on TMA vocab page
    const shouldHideChatbot = pathname === '/tma/vocab';

    if (shouldHideChatbot) {
        return null;
    }

    return <Chatbot />;
}
