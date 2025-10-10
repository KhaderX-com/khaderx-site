import React from 'react';

const ComingSoon = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-2xl p-16 group">
                {/* Subtle neon glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-50"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

                <div className="relative z-10">
                    {/* Icon container */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-6 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-2xl border border-cyan-400/20 group-hover:border-cyan-400/30 transition-all duration-500">
                            <div className="text-cyan-400 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400/30 transition-all duration-500">
                                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
                        Coming Soon...
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Our project portfolio is currently being curated and will be made available soon.
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed mb-12">
                            We maintain confidentiality for our clients and carefully select which projects to showcase publicly.
                        </p>
                    </div>

                    {/* Professional status indicator */}
                    <div className="flex justify-center items-center space-x-4 mb-12">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/50"></div>
                        <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider drop-shadow-lg drop-shadow-cyan-400/50">Portfolio In Development</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/50"></div>
                    </div>

                    {/* Animated progress dots */}
                    <div className="flex justify-center mb-16">
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:0ms]"></div>
                            <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:150ms]"></div>
                            <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:300ms]"></div>
                        </div>
                    </div>

                    {/* Professional divider */}
                    <div className="flex justify-center">
                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                    </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-b-2xl"></div>
            </div>
        </div>
    );
};

export default ComingSoon;
