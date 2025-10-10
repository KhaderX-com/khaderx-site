// Main Chatbot component

'use client';

import { useChat } from '@/hooks/useChat';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

export default function Chatbot() {
    const {
        isOpen,
        messages,
        isLoading,
        error,
        toggleChat,
        closeChat,
        sendMessage,
        clearHistory,
        clearError,
    } = useChat();

    return (
        <>
            <ChatButton isOpen={isOpen} onClick={toggleChat} />
            <ChatWindow
                isOpen={isOpen}
                messages={messages}
                isLoading={isLoading}
                error={error}
                onClose={closeChat}
                onSend={sendMessage}
                onClear={clearHistory}
                onClearError={clearError}
            />
        </>
    );
}
