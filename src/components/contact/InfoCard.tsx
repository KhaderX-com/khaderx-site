import React from 'react';

export interface InfoCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export function InfoCard({ title, icon, children, className }: InfoCardProps) {
    return (
        <div className={`group relative ${className}`}>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Subtle neon glow on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-lg sm:rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110">
                            <div className="text-cyan-400 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400/50 transition-all duration-300">
                                {icon}
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 font-heading group-hover:text-cyan-50 transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Content */}
                    <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {children}
                    </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl sm:rounded-b-2xl"></div>
            </div>
        </div>
    );
}
