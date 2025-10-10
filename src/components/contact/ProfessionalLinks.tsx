import React from 'react';
import { InfoCard } from './InfoCard';

const ProfessionalLinks = () => {
    return (
        <InfoCard
            title="Professional Profiles & Links | Aerospace | Aeronautical | Mechanical Engineering"
            icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        name: 'GitHub',
                        description: 'Code Repositories & Projects',
                        url: 'https://github.com/KhaderX-com',
                        icon: (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        )
                    },
                    {
                        name: 'LinkedIn',
                        description: 'Professional Network',
                        url: 'https://www.linkedin.com/in/khader-abueltayef-924641301/',
                        icon: (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        )
                    },
                    {
                        name: 'PyPI',
                        description: 'Python Package Repository',
                        url: 'https://pypi.org/user/KhaderX/',
                        icon: (
                            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">Py</span>
                            </div>
                        )
                    }
                ].map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:bg-cyan-400/5 hover:border-cyan-400/30 transition-all duration-300 group transform hover:scale-105"
                    >
                        <div className="text-gray-400 group-hover:text-cyan-400 mr-3 transition-colors duration-300">
                            {link.icon}
                        </div>
                        <div>
                            <p className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">{link.name}</p>
                            <p className="text-sm text-gray-400">{link.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </InfoCard>
    );
};

export default ProfessionalLinks;
