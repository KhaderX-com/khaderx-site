// Typing indicator animation

'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function TypingIndicator() {
    return (
        <div className="flex justify-start mb-4">
            <div className="flex items-start space-x-2 max-w-[80%]">
                {/* Avatar */}
                <motion.div
                    className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                    <Bot size={16} className="text-white" />
                </motion.div>

                {/* Typing animation */}
                <div className="bg-gray-800 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="h-2 w-2 rounded-full bg-gray-400"
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    delay: index * 0.15,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
