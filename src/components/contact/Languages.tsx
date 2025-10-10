import React from 'react';
import { InfoCard } from './InfoCard';

const Languages = () => {
    return (
        <InfoCard
            title="Languages & Communication"
            icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            }
        >
            <div className="space-y-4">
                {[
                    { name: 'Arabic', level: 'Native' },
                    { name: 'French', level: 'Fluent' },
                    { name: 'English', level: 'Fluent' }
                ].map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                            <span className="font-medium text-white">{language.name}</span>
                        </div>
                        <span className="text-cyan-400 font-medium px-3 py-1 bg-cyan-400/10 rounded-full text-sm">{language.level}</span>
                    </div>
                ))}
            </div>
        </InfoCard>
    );
};

export default Languages;
