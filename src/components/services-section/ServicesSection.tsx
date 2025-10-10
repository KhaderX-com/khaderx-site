import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';
import ServicesCTA from './ServicesCTA';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    features: string[];
}

interface ServicesSectionProps {
    className?: string;
}

export default function ServicesSection({ className = '' }: ServicesSectionProps) {
    const services: CardProps[] = [
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
            description: "Build engaging mobile and desktop applications across platforms.",
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
                "Automated workflow optimization",
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
                "System architecture review",
                "Improvements & Features suggestions"
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
                "PyPI | Conda package publishing",
                "Cross-platform installers",
                "Documentation & Testing"
            ]
        },
        {
            title: "AI Integration",
            description: "Empower your applications with intelligent features, enhancing user experiences and driving innovation.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z" />
                </svg>
            ),
            href: "/services",
            features: [
                "Personalized User Experiences",
                "Smart Workflow Automation",
                "Intelligent Chatbots"
            ]
        }
    ];

    return (
        <section className={`relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-black ${className}`}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/2 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
                <ServicesHeader />
                <ServicesGrid services={services} />
                <ServicesCTA />
            </div>
        </section>
    );
}
