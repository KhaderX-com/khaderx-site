// Individual chat message component

'use client';

import { motion } from 'framer-motion';
import { Message } from '@/lib/chatbot/types';
import { formatTimestamp } from '@/lib/chatbot/utils';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
    message: Message;
    isLatest?: boolean;
}

// Function to parse markdown-like formatting
const parseMarkdown = (text: string) => {
    // Split by lines to handle bullets
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];

    lines.forEach((line, lineIndex) => {
        // Check if line starts with * (bullet point)
        if (line.trim().startsWith('*') && !line.trim().startsWith('**')) {
            // Remove the leading * and trim
            const bulletText = line.replace(/^\s*\*\s*/, '');
            elements.push(
                <div key={lineIndex} className="flex items-start gap-2 ml-2">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(bulletText) }} />
                </div>
            );
        } else if (line.trim()) {
            // Regular line with inline formatting
            elements.push(
                <div key={lineIndex} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />
            );
        } else {
            // Empty line (spacing)
            elements.push(<div key={lineIndex} className="h-2" />);
        }
    });

    return elements;
};

// Function to handle inline markdown (bold, italic, code)
const formatInlineMarkdown = (text: string): string => {
    return text
        // Bold: **text** or __text__
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
        .replace(/__(.+?)__/g, '<strong class="font-semibold text-white">$1</strong>')
        // Italic: *text* or _text_ (but not **)
        .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em class="italic">$1</em>')
        .replace(/_(.+?)_/g, '<em class="italic">$1</em>')
        // Code: `text`
        .replace(/`(.+?)`/g, '<code class="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-xs">$1</code>');
};

export default function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.role === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
        >
            <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start ${isUser ? 'space-x-reverse space-x-3' : 'space-x-3'} max-w-[80%]`}>
                {/* Avatar */}
                <motion.div
                    className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${isUser
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                        }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                    {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                </motion.div>

                {/* Message Content */}
                <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                    <motion.div
                        className={`rounded-2xl px-4 py-2 ${isUser
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-gray-800 text-gray-100'
                            }`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <div className="text-sm space-y-1">
                            {isUser ? (
                                // User messages: simple text without parsing
                                <div className="whitespace-pre-wrap break-words">{message.content}</div>
                            ) : (
                                // AI messages: parse markdown
                                parseMarkdown(message.content)
                            )}
                        </div>
                    </motion.div>

                    {/* Timestamp */}
                    <span className="text-xs text-gray-500 mt-1 px-2">
                        {formatTimestamp(message.timestamp)}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
