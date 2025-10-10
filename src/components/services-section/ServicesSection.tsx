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
                <svg className="w-8 h-8" fill="cyan" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9914 2.86904C12.9914 2.86899 12.9914 2.86895 12.9914 2.86891C12.9256 2.37165 12.5016 2 12 2C11.4983 2 11.0743 2.37171 11.0086 2.86904L11.0086 2.86932L11.0085 2.86992L11.0075 2.87704L11.0029 2.91013C10.9985 2.94035 10.9917 2.98656 10.9822 3.04699C10.9633 3.16792 10.9339 3.34537 10.8927 3.56523C10.81 4.00611 10.6812 4.61161 10.4967 5.27082C10.1127 6.64363 9.5417 8.04408 8.79289 8.79289C8.04408 9.5417 6.64363 10.1127 5.27082 10.4967C4.61161 10.6812 4.00611 10.81 3.56523 10.8927C3.34537 10.9339 3.16792 10.9633 3.04699 10.9822C2.98656 10.9917 2.94035 10.9985 2.91013 11.0029L2.87704 11.0075L2.86992 11.0085L2.86932 11.0086C2.86923 11.0086 2.86913 11.0086 2.86904 11.0086C2.86899 11.0086 2.86895 11.0086 2.86891 11.0086C2.37165 11.0744 2 11.4984 2 12C2 12.5017 2.37171 12.9257 2.86904 12.9914L2.86932 12.9914L2.86992 12.9915L2.87704 12.9925L2.91013 12.9971C2.94035 13.0015 2.98656 13.0083 3.04699 13.0178C3.16792 13.0367 3.34537 13.0661 3.56523 13.1073C4.00611 13.19 4.61161 13.3188 5.27082 13.5033C6.64363 13.8873 8.04408 14.4583 8.79289 15.2071C9.5417 15.9559 10.1127 17.3564 10.4967 18.7292C10.6812 19.3884 10.81 19.9939 10.8927 20.4348C10.9339 20.6546 10.9633 20.8321 10.9822 20.953C10.9917 21.0134 10.9985 21.0596 11.0029 21.0899L11.0075 21.123L11.0085 21.1301L11.0086 21.1307C11.0086 21.1308 11.0086 21.1309 11.0086 21.131C11.0086 21.131 11.0086 21.131 11.0086 21.131C11.0743 21.6283 11.4983 22 12 22C12.5017 22 12.9257 21.6283 12.9914 21.131L12.9914 21.1307L12.9915 21.1301L12.9925 21.123L12.9971 21.0899C13.0015 21.0596 13.0083 21.0134 13.0178 20.953C13.0367 20.8321 13.0661 20.6546 13.1073 20.4348C13.19 19.9939 13.3188 19.3884 13.5033 18.7292C13.8873 17.3564 14.4583 15.9559 15.2071 15.2071C15.9559 14.4583 17.3564 13.8873 18.7292 13.5033C19.3884 13.3188 19.9939 13.19 20.4348 13.1073C20.6546 13.0661 20.8321 13.0367 20.953 13.0178C21.0134 13.0083 21.0596 13.0015 21.0899 12.9971L21.123 12.9925L21.1301 12.9915L21.1307 12.9914C21.1308 12.9914 21.1309 12.9914 21.131 12.9914C21.131 12.9914 21.131 12.9914 21.131 12.9914C21.6283 12.9257 22 12.5017 22 12C22 11.4983 21.6283 11.0743 21.131 11.0086L21.1307 11.0086L21.1301 11.0085L21.123 11.0075L21.0899 11.0029C21.0596 10.9985 21.0134 10.9917 20.953 10.9822C20.8321 10.9633 20.6546 10.9339 20.4348 10.8927C19.9939 10.81 19.3884 10.6812 18.7292 10.4967C17.3564 10.1127 15.9559 9.5417 15.2071 8.79289C14.4583 8.04408 13.8873 6.64363 13.5033 5.27082C13.3188 4.61161 13.19 4.00611 13.1073 3.56523C13.0661 3.34537 13.0367 3.16792 13.0178 3.04699C13.0083 2.98656 13.0015 2.94035 12.9971 2.91013L12.9925 2.87704L12.9915 2.86992L12.9914 2.86932C12.9914 2.86923 12.9914 2.86913 12.9914 2.86904ZM16.8722 12C15.7644 11.5928 14.6021 11.0163 13.7929 10.2071C12.9837 9.39792 12.4072 8.23564 12 7.12776C11.5928 8.23564 11.0163 9.39792 10.2071 10.2071C9.39792 11.0163 8.23564 11.5928 7.12776 12C8.23564 12.4072 9.39792 12.9837 10.2071 13.7929C11.0163 14.6021 11.5928 15.7644 12 16.8722C12.4072 15.7644 12.9837 14.6021 13.7929 13.7929C14.6021 12.9837 15.7644 12.4072 16.8722 12Z" fill="cyan" />
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
