import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from "next";
import { lazy, Suspense } from 'react';

// Lazy load Footer for better performance
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
const ComponentLoader = () => (
    <div className="w-full h-32 bg-gradient-to-r from-gray-900 to-black animate-pulse rounded-lg" />
);

export const metadata: Metadata = {
    title: "Contact & About",
    description: "Engineering Tomorrow, Today - Get in touch with KhaderX for aerospace | aeronautical | mechanical engineering consulting, Python development services, or collaboration opportunities. Professional expertise at your service.",
    openGraph: {
        title: "Contact & About | KhaderX",
        description: "Engineering Tomorrow, Today - Get in touch with KhaderX for aerospace | aeronautical | mechanical engineering consulting, Python development services, or collaboration opportunities. Professional expertise at your service.",
        url: "https://khaderx.com/contact",
    },
    twitter: {
        title: "Contact & About | KhaderX",
        description: "Engineering Tomorrow, Today - Professional aerospace | aeronautical | mechanical engineering and Python development consulting services.",
    },
};

interface InfoCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

function InfoCard({ title, icon, children }: InfoCardProps) {
    return (
        <div className="group relative">
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

export default function Contact() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-black">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/2 to-transparent"></div>

                <div className="relative">
                    <Navbar />

                    <main className="navbar-safe-top">
                        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-12">
                            {/* Breadcrumb Navigation */}
                            <Breadcrumb className="mb-6 sm:mb-8" />

                            {/* Header Section */}
                            <div className="text-center mb-12 sm:mb-16">
                                <div className="inline-flex items-center justify-center p-2 bg-cyan-400/10 rounded-full mb-4 sm:mb-6">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    <span className="mx-2 sm:mx-3 text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Professional Contact</span>
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                </div>

                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading px-4">
                                    Let&apos;s Build <span className="neon-text-glow">Tomorrow</span>
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
                                        className="btn-primary group enhanced-glow"
                                    >
                                        <svg className="w-5 h-5 mr-3 group-hover:drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Start a Conversation
                                        <span className="ml-3 text-sm opacity-90">contact@khaderx.com</span>
                                    </a>
                                </div>
                            </div>

                            {/* Contact & Personal Information */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
                            </div>

                            {/* Education */}
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

                            {/* Skills & Expertise */}
                            <div className="mt-12">
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
                            </div>

                            {/* Professional Links */}
                            <div className="mt-12">
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
                                                description: 'Code Repositories & Projects | Aerospace | Aeronautical | Mechanical Engineering',
                                                url: 'https://github.com/KhaderX-com',
                                                icon: (
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                name: 'LinkedIn',
                                                description: 'Professional Network | Aerospace | Aeronautical | Mechanical Engineering',
                                                url: 'https://www.linkedin.com/in/khader-abueltayef-924641301/',
                                                icon: (
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                name: 'PyPI',
                                                description: 'Python Package Repository | Aerospace | Aeronautical | Mechanical Engineering',
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
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-16 pt-12 border-t border-gray-800/50">
                                <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Start Your Project?</h2>
                                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                    Whether you need aerospace engineering expertise, custom software development, or innovative solutions,
                                    I&apos;m here to help turn your vision into reality.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="mailto:contact@khaderx.com"
                                        className="btn-primary group"
                                    >
                                        <span className="mr-2">Get In Touch</span>
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>

                                    <a
                                        href="/projects"
                                        className="btn-secondary group"
                                    >
                                        View My Work
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Suspense fallback={<ComponentLoader />}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </PageTransition>
    );
}