// Floating chat button

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
    hasUnread?: boolean;
}

export default function ChatButton({ isOpen, onClick, hasUnread }: ChatButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 text-white shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center h-full w-full"
                    >
                        <X size={32} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1760132697/chatbot-ai-icon1_ix15x6.jpg"
                            alt="AI Chatbot"
                            fill
                            className="rounded-full object-cover"
                            sizes="64px"
                            priority
                        />
                        {hasUnread && (
                            <motion.span
                                className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
