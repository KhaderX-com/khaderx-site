import Navbar from '@/components/navbar/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Metadata } from "next";
import { lazy, Suspense } from 'react';
import ServicesHeader from '@/components/services/ServicesHeader';
import { ServiceCard } from '@/components/services/ServiceCard';
import ServicesCTA from '@/components/services/ServicesCTA';
import { servicesData } from '@/components/services/servicesData';

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

export default function Services() {

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
                                <ServicesHeader />
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
                                {servicesData.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`animate-fade-in-up-${index + 1}`}
                                    >
                                        <ServiceCard {...service} />
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Call to action */}
                            <ServicesCTA />
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


