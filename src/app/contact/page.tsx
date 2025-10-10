import Navbar from '@/components/navbar/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from "next";
import { lazy, Suspense } from 'react';
import ContactHeader from '@/components/contact/ContactHeader';
import ProfessionalDetails from '@/components/contact/ProfessionalDetails';
import Languages from '@/components/contact/Languages';
import Education from '@/components/contact/Education';
import Skills from '@/components/contact/Skills';
import ProfessionalLinks from '@/components/contact/ProfessionalLinks';
import CallToAction from '@/components/contact/CallToAction';

// Lazy load Footer for better performance
const Footer = lazy(() => import('@/components/footer/Footer'));

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
                            <ContactHeader />

                            {/* Contact & Personal Information */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                                <ProfessionalDetails />
                                <Languages />
                            </div>

                            {/* Education */}
                            <Education />

                            {/* Skills & Expertise */}
                            <div className="mt-12">
                                <Skills />
                            </div>

                            {/* Professional Links */}
                            <div className="mt-12">
                                <ProfessionalLinks />
                            </div>

                            {/* Call to Action */}
                            <CallToAction />
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







