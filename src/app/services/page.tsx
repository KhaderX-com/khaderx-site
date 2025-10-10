import Navbar from '@/components/navbar/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Metadata } from "next";
import { lazy, Suspense } from 'react';

// Lazy load Footer for better performance
const Footer = lazy(() => import('@/components/footer/Footer'));

export const metadata: Metadata = {
    title: "Services",
    description: "Professional aerospace engineering consulting, Python development services, aeroelasticity analysis, technical writing, and custom software solutions offered by KhaderX.",
    openGraph: {
        title: "Services | KhaderX",
        description: "Professional aerospace engineering consulting, Python development services, aeroelasticity analysis, technical writing, and custom software solutions offered by KhaderX.",
        url: "https://khaderx.com/services",
    },
    twitter: {
        title: "Services | KhaderX",
        description: "Professional aerospace engineering consulting, Python development services, aeroelasticity analysis, technical writing, and custom software solutions.",
    },
};

interface ServiceCardProps {
    title: string;
    description: string;
    subtitle: string;
    icon: React.ReactNode;
    features: string[];
}

function ServiceCard({ title, description, subtitle, icon, features }: ServiceCardProps) {
    return (
        <article className="relative h-full">
            <div className="glow-card-static h-full">
                <div className="glow-card-static__inner h-full">
                    <div className="flex flex-col gap-6 flex-grow text-left">
                        <div className="grid grid-cols-[auto,1fr] gap-4">
                            <div className="shrink-0">
                                <span className="glow-icon">
                                    {icon}
                                </span>
                            </div>
                            <div className="space-y-2 text-left">
                                <h3 className="text-2xl font-heading font-semibold text-white">
                                    {title}
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="col-span-2 space-y-4 pt-1 sm:pt-2">
                                <p className="text-sm sm:text-base text-white leading-relaxed">
                                    {description}
                                </p>
                                <ul className="space-y-2 text-sm sm:text-base text-slate-300/90">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(111,0,255,0.4)]"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-3">
                        <Link href="/contact" className="glow-pill">
                            <span>Start Project</span>
                            <span className="text-base leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default function Services() {
    const services: ServiceCardProps[] = [
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

    return (
        <PageTransition>
            <div className="min-h-screen bg-black">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/2 to-transparent"></div>

                <div className="relative">
                    <Navbar />

                    <main className="navbar-safe-top">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                            {/* Breadcrumb Navigation */}
                            <Breadcrumb className="mb-8" />

                            {/* Header Section */}
                            <div className="text-center mb-16 sm:mb-20">
                                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 rounded-full mb-8 border border-cyan-400/20">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                                    <span className="mx-4 text-cyan-400 text-sm font-semibold uppercase tracking-wider">Professional Services</span>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
                                    Our <span className="text-neon-cyan">Services</span>
                                </h1>

                                <div className="max-w-4xl mx-auto">
                                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                        Professional services tailored to elevate your digital presence and bring your vision to life through cutting-edge technology and innovative solutions.
                                    </p>
                                    <div className="flex justify-center">
                                        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`animate-fade-in-up-${index + 1}`}
                                    >
                                        <ServiceCard {...service} />
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Call to action */}
                            <div className="text-center">
                                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-2xl p-12">
                                    {/* Subtle neon glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0"></div>

                                    <div className="relative z-10">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
                                            Ready to Start Your Project?
                                        </h2>

                                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                            Let&apos;s discuss how I can help bring your vision to life with cutting-edge solutions tailored to your needs.
                                        </p>

                                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                            <a
                                                href="/contact"
                                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 group"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="mr-2">Get In Touch</span>
                                                <svg
                                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>

                                            <a
                                                href="mailto:contact@khaderx.com"
                                                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 group"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span className="mr-2">Send Email</span>
                                                <svg
                                                    className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Suspense fallback={<LoadingSpinner />}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </PageTransition>
    );
}


