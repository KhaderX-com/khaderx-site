import React from 'react';
import { InfoCard } from './InfoCard';

const ProfessionalDetails = () => {
    return (
        <InfoCard
            title="Professional Details"
            icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            }
        >
            <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                    <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-white text-sm sm:text-base">ABUELTAYEF Khader</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Aerospace | Aeronautical | Mechanical Engineer | Python Developer</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-white font-medium text-sm sm:text-base">contact@khaderx.com</p>
                        <p className="text-gray-400 text-xs sm:text-sm">abueltayef.khader@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <p className="text-white">+32 483 817 658</p>
                </div>

                <div className="flex items-center">
                    <div className="flex items-center justify-center w-5 h-5 mr-3">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <p className="text-white">Belgium</p>
                </div>
            </div>
        </InfoCard>
    );
};

export default ProfessionalDetails;
