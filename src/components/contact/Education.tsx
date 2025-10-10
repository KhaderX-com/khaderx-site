import React from 'react';
import { InfoCard } from './InfoCard';

const Education = () => {
    return (
        <InfoCard
            title="Education & Academic Journey"
            icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            }
        >
            <div className="space-y-8">
                {[
                    {
                        period: "2025 - 2026 (Current)",
                        title: "Master in HEC Entrepreneurs",
                        description: "Entrepreneurship | Business Development",
                        institution: "University of Liège, HEC, Belgium",
                        status: "current"
                    },
                    {
                        period: "2023 - 2025",
                        title: "Master in Aerospace Engineering",
                        description: "Aerospace | Aeronautical | Mechanical Engineering",
                        institution: "University of Liège, Belgium",
                        status: "Graduate September 2025"
                    },
                    {
                        period: "2020 - 2023",
                        title: "Bachelor in Civil Engineering",
                        description: "Obtained with Distinction",
                        institution: "University of Liège, Belgium",
                        status: "completed"
                    }
                ].map((edu, index) => (
                    <div key={index} className="relative border-l-2 border-cyan-400/30 pl-6">
                        <div className="absolute -left-2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium text-cyan-400 uppercase tracking-wide">{edu.period}</span>
                            <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                            <p className="text-gray-300">{edu.description}</p>
                            <p className="text-sm text-gray-400">{edu.institution}</p>
                            {edu.status !== "completed" && (
                                <p className="text-sm text-cyan-400 font-medium">{edu.status}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </InfoCard>
    );
};

export default Education;
