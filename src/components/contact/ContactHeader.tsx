import React from 'react';

const ContactHeader = () => {
    return (
        <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-cyan-400/10 rounded-full mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="mx-2 sm:mx-3 text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Professional Contact</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading px-4">
                Let&apos;s Build <span className="text-neon-cyan">Tomorrow</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                <span className="text-cyan-400 font-medium">Engineering Tomorrow, Today</span> -
                Ready to collaborate on your next aerospace project or software solution?
                Let&apos;s connect and create something extraordinary.
            </p>

            {/* Primary Contact Button */}
            <div className="flex justify-center mb-8 sm:mb-12 px-4">
                <a
                    href="mailto:contact@khaderx.com"
                    className="group glow-card-static w-full sm:w-auto max-w-2xl"
                >
                    <div className="glow-card-static__inner contact-cta-card">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="text-center space-y-2">
                            <span className="block text-xl sm:text-2xl font-semibold text-white">Start a Conversation</span>
                            <span className="block text-xl sm:text-2xl font-semibold text-neon-cyan leading-tight">contact@khaderx.com</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactHeader;
