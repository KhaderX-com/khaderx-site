// Main chat window component

'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { Message } from '@/lib/chatbot/types';

interface ChatWindowProps {
    isOpen: boolean;
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    onClose: () => void;
    onSend: (message: string) => void;
    onClear: () => void;
    onClearError: () => void;
}

export default function ChatWindow({
    isOpen,
    messages,
    isLoading,
    error,
    onClose,
    onSend,
    onClear,
    onClearError,
}: ChatWindowProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isLoading]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-24 right-6 z-[9999] w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-120px)] bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700 sm:w-96 sm:h-[600px]"
                >
                    {/* Header */}
                    <ChatHeader onClose={onClose} onClear={onClear} />

                    {/* Messages */}
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
                    >
                        {messages.map((message, index) => (
                            <ChatMessage
                                key={message.id}
                                message={message}
                                isLatest={index === messages.length - 1}
                            />
                        ))}

                        {/* Typing indicator */}
                        {isLoading && <TypingIndicator />}

                        {/* Error message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-start space-x-2"
                                >
                                    <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-sm text-red-400">{error}</p>
                                        <button
                                            onClick={onClearError}
                                            className="text-xs text-red-300 hover:text-red-200 underline mt-1"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Scroll anchor */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <ChatInput onSend={onSend} isLoading={isLoading} disabled={!!error} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
