'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="group fixed bottom-8 right-8 p-4 bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md border border-cyan-400/30 text-cyan-400 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-cyan-400/20 transition-all duration-300 z-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black enhanced-glow"
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <svg
                        className="w-5 h-5 group-hover:drop-shadow-sm group-hover:drop-shadow-cyan-400/50 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                    
                    {/* Subtle pulse animation for attention */}
                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            )}
        </>
    );
}