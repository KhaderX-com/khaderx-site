import React from 'react';
import { InfoCard } from './InfoCard';

const Skills = () => {
    return (
        <InfoCard
            title="Skills & Technical Expertise | Aerospace | Aeronautical | Mechanical Engineering"
            icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Programming & Development</h4>
                    <div className="space-y-3">
                        {[
                            'Python - Full Stack Development',
                            'Flutter - Dart (Mobile & Desktop)',
                            'PowerShell/Bash Scripting',
                            'C/C++ Programming',
                            'HTML/CSS/JavaScript',
                            'LaTeX Document Processing'
                        ].map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                                <span className="text-gray-300">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Software & Engineering Tools</h4>
                    <div className="space-y-3">
                        {[
                            'NX Siemens (CAD/CAE)',
                            'MATLAB - Simulink',
                            'XFOIL (Airfoil Analysis)',
                            'Granta (Material Selection)',
                            'Git - GitHub Version Control',
                            'VS Code & Development IDEs',
                            'Jupyter Notebook',
                            'Android Studio',
                            'Figma - Design Tools'
                        ].map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                                <span className="text-gray-300">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </InfoCard>
    );
};

export default Skills;
