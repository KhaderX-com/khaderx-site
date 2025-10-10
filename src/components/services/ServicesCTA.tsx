import React from 'react';

const ServicesCTA = () => {
    return (
        <div className="text-center">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-2xl p-12">
                {/* Subtle neon glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
                        Ready to Start Your Project?
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how I can help bring your vision to life with cutting-edge solutions tailored to your needs.
                    </p>

                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="mr-2">Get In Touch</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a
                            href="mailto:contact@khaderx.com"
                            className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span>Send Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCTA;
