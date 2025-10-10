// Chat input component

'use client';

import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
    onSend: (message: string) => void;
    isLoading: boolean;
    disabled?: boolean;
}

export default function ChatInput({ onSend, isLoading, disabled }: ChatInputProps) {
    const [message, setMessage] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const placeholders = [
        "Ask me anything...",
        "What services do you offer?",
        "Need a web application?",
        "Looking for custom software?",
        "Website optimization tips?",
        "App development questions?",
        "Performance improvements?",
        "Modern web solutions?",
        "How can I help you?",
        "Tell me about Khader's expertise",
        "What is your email?",
        "Tell me about web development",
        "Can you help with mobile apps?"

    ];

    // Auto-focus on mount
    useEffect(() => {
        textareaRef.current?.focus();
    }, []);

    // Rotate placeholder text every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [placeholders.length]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message]);

    const handleSend = () => {
        if (message.trim() && !isLoading && !disabled) {
            onSend(message.trim());
            setMessage('');

            // Reset textarea height
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="border-t border-gray-700 bg-gray-900 p-4">
            <style jsx>{`
                @keyframes placeholder-fade {
                    0%, 100% { opacity: 1; }
                    45%, 55% { opacity: 0.5; }
                }
                textarea::placeholder {
                    animation: placeholder-fade 3s ease-in-out infinite;
                }
            `}</style>
            <div className="flex items-center space-x-2">
                {/* Input */}
                <div className="flex-1 relative">
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholders[placeholderIndex]}
                        disabled={isLoading || disabled}
                        className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed resize-none max-h-32 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 h-12 transition-all duration-300 text-sm sm:text-base placeholder:text-sm placeholder:sm:text-base overflow-hidden"
                        rows={1}
                    />

                    {/* Character count */}
                    {message.length > 800 && (
                        <span className="absolute bottom-2 left-2 text-xs text-gray-500">
                            {message.length}/1000
                        </span>
                    )}
                </div>

                {/* Send button */}
                <motion.button
                    onClick={handleSend}
                    disabled={!message.trim() || isLoading || disabled}
                    className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    whileHover={{ scale: message.trim() && !isLoading ? 1.05 : 1 }}
                    whileTap={{ scale: message.trim() && !isLoading ? 0.95 : 1 }}
                    aria-label="Send message"
                >
                    {isLoading ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <Send size={20} />
                    )}
                </motion.button>
            </div>

            {/* Hint text */}
            <p className="text-xs text-gray-500 mt-2 text-center">
                Press Enter to send, Shift+Enter for new line
            </p>
        </div>
    );
}
