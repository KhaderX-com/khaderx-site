import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    features: string[];
}

function ProfessionalCard({ title, description, icon, href, features }: CardProps) {
    return (
        <div className="group relative h-full">
            {/* Card container with advanced styling */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-1 sm:hover:-translate-y-2">

                {/* Subtle neon glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon container */}
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-lg sm:rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110">
                            <div className="text-cyan-400 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400/50 transition-all duration-300">
                                {icon}
                            </div>
                        </div>
                    </div>

                    {/* Content - flex-grow to push action button to bottom */}
                    <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-heading group-hover:text-cyan-50 transition-colors duration-300">
                            {title}
                        </h3>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                            {description}
                        </p>

                        {/* Features list */}
                        <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mr-2 sm:mr-3 group-hover:shadow-sm group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action button - positioned at bottom */}
                    <div className="mt-auto">
                        <Link
                            href={href}
                            className="inline-flex items-center text-cyan-400 font-medium text-xs sm:text-sm hover:text-cyan-300 transition-all duration-300 group/link"
                        >
                            <span className="mr-1 sm:mr-2">Explore {title}</span>
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
        </div>
    );
}

interface ProfessionalCardsProps {
    className?: string;
}

export default function ProfessionalCards({ className = '' }: ProfessionalCardsProps) {
    const cards: CardProps[] = [
        {
            title: "Web Development",
            description: "Create stunning, responsive websites that showcase your unique brand identity and tell your story.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            href: "/services",
            features: [
                "Custom responsive design",
                "SEO optimization",
                "Modern tech stack (React, Next.js)"
            ]
        },
        {
            title: "Mobile & Desktop Apps",
            description: "Build engaging mobile and desktop applications across platforms with seamless ad integration.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            href: "/services",
            features: [
                "Cross-platform development",
                "Game development & design",
                "iOS, Android & Desktop"
            ]
        },
        {
            title: "Engineering Software",
            description: "Develop custom engineering software and technical tools that solve complex computational problems.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            href: "/services",
            features: [
                "CFD & simulation tools",
                "Data analysis applications",
                "Custom computational solutions"
            ]
        },
        {
            title: "Performance Optimization",
            description: "Optimize your applications and systems for maximum performance and efficiency.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            href: "/services",
            features: [
                "Code optimization",
                "Database performance tuning",
                "System architecture review"
            ]
        },
        {
            title: "Professional Python Packaging",
            description: "Package and distribute your Python applications professionally across various platforms.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            href: "/services",
            features: [
                "PyPI package publishing",
                "Cross-platform installers",
                "Documentation & testing"
            ]
        }
    ];

    return (
        <section className={`relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-black ${className}`}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/2 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
                {/* Section header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 rounded-full mb-6 sm:mb-8 border border-cyan-400/20">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                        <span className="mx-3 sm:mx-4 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider font-brand">Professional Services</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 font-heading">
                        Engineering <span className="text-gradient enhanced-glow">Excellence</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4">
                            Discover our comprehensive range of professional services, combining cutting-edge aerospace | aeronautical | mechanical engineering
                            with innovative software development to deliver exceptional solutions.
                        </p>
                        <div className="flex justify-center">
                            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`animate-fade-in-up-${index + 1}`}
                        >
                            <ProfessionalCard {...card} />
                        </div>
                    ))}
                </div>

                {/* Enhanced Call to action */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <div className="mb-4 sm:mb-6">
                        <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4 px-4">Ready to bring your vision to life?</p>
                        <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 sm:mb-8"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                        <Link
                            href="/contact"
                            className="btn-primary group w-full sm:w-auto"
                        >
                            <span className="mr-2">Start Your Project</span>
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/services"
                            className="btn-secondary group w-full sm:w-auto"
                        >
                            <span className="mr-2">View All Services</span>
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:rotate-45 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
