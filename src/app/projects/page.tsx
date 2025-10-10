import { Suspense, lazy } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Metadata } from "next";
import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ComingSoon from '@/components/projects/ComingSoon';

// Lazy load Footer component
const Footer = lazy(() => import('@/components/footer/Footer'));

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore KhaderX's portfolio of aerospace engineering projects, Python development tools, and innovative technical solutions. From aeroelasticity simulations to custom software applications.",
    openGraph: {
        title: "Projects | KhaderX",
        description: "Explore KhaderX's portfolio of aerospace engineering projects, Python development tools, and innovative technical solutions. From aeroelasticity simulations to custom software applications.",
        url: "https://khaderx.com/projects",
    },
    twitter: {
        title: "Projects | KhaderX",
        description: "Explore KhaderX's portfolio of aerospace engineering projects, Python development tools, and innovative technical solutions.",
    },
};

export default function Projects() {
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
                                <ProjectsHeader />
                                {/* Coming Soon Card */}
                                <ComingSoon />
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

