import { ServiceCardProps } from './ServiceCard';

export const servicesData: ServiceCardProps[] = [
    {
        title: "Web Development",
        subtitle: "Personal Branding & Business Websites",
        description: "Create stunning, responsive websites that showcase your unique brand identity. From modern portfolios to business websites, I craft digital experiences that tell your story.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        features: [
            "Custom responsive design",
            "SEO optimization",
            "Brand-focused approach",
            "Modern tech stack (React, Next.js)"
        ]
    },
    {
        title: "Mobile & Desktop Apps",
        subtitle: "Cross-Platform Development",
        description: "Build engaging mobile and desktop applications across platforms. From interactive games to productivity apps with seamless ad integration and advanced features.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        features: [
            "Cross-platform development",
            "Game development & design",
            "Ad monetization integration",
            "iOS, Android & Desktop"
        ]
    },
    {
        title: "Engineering Software",
        subtitle: "Specialized Technical Solutions",
        description: "Develop custom engineering software and technical tools that solve complex computational problems. From simulation tools to data analysis applications.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        features: [
            "CFD & simulation tools",
            "Data analysis applications",
            "Structural analysis software",
            "Custom computational solutions"
        ]
    },
    {
        title: "Performance Optimization",
        subtitle: "Speed & Efficiency Enhancement",
        description: "Optimize your applications and systems for maximum performance. From code optimization to system architecture improvements.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        features: [
            "Code optimization",
            "Database performance tuning",
            "Application speed enhancement",
            "System architecture review"
        ]
    },
    {
        title: "Professional Python Packaging",
        subtitle: "Distribution & Deployment",
        description: "Package and distribute your Python applications professionally. Create installers, manage dependencies, and deploy to various platforms seamlessly.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        features: [
            "PyPI package publishing",
            "Cross-platform installers",
            "Dependency management",
            "Documentation & testing"
        ]
    }
];
