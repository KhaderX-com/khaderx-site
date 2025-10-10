// Chat window header

'use client';

import { motion } from 'framer-motion';
import { Minimize2, RotateCcw, X } from 'lucide-react';

interface ChatHeaderProps {
    onClose: () => void;
    onClear: () => void;
}

export default function ChatHeader({ onClose, onClear }: ChatHeaderProps) {
    return (
        <div className="flex items-center justify-between border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 p-4">
            {/* Left side - Avatar and Title */}
            <div className="flex items-center space-x-3">
                <motion.div
                    className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold"
                    animate={{
                        boxShadow: [
                            '0 0 0 0 rgba(6, 182, 212, 0)',
                            '0 0 0 10px rgba(6, 182, 212, 0)',
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                >
                    KX
                </motion.div>
                <div>
                    <h3 className="text-white font-semibold">KhaderX AI</h3>
                    <div className="flex items-center space-x-1">
                        <motion.span
                            className="h-2 w-2 rounded-full bg-green-400"
                            animate={{
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        />
                        <span className="text-xs text-gray-400">Online</span>
                    </div>
                </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-2">
                <motion.button
                    onClick={onClear}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Clear chat"
                    title="Clear chat history"
                >
                    <RotateCcw size={18} />
                </motion.button>

                <motion.button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Minimize chat"
                >
                    <Minimize2 size={18} />
                </motion.button>
            </div>
        </div>
    );
}
