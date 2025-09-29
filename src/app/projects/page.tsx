import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from "next";

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
                                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 rounded-full mb-8 border border-cyan-400/20">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                                    <span className="mx-4 text-cyan-400 text-sm font-semibold uppercase tracking-wider">Project Portfolio</span>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
                                    Our <span className="text-gradient enhanced-glow">Projects</span>
                                </h1>

                                <div className="max-w-4xl mx-auto mb-16">
                                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                        Explore our portfolio of innovative engineering solutions and cutting-edge software development projects.
                                    </p>
                                    <div className="flex justify-center">
                                        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Coming Soon Card */}
                                <div className="max-w-4xl mx-auto">
                                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md border border-gray-800/50 rounded-2xl p-16 group">
                                        {/* Subtle neon glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-50"></div>

                                        {/* Top accent line */}
                                        <div className="absolute top-0 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

                                        <div className="relative z-10">
                                            {/* Icon container */}
                                            <div className="flex justify-center mb-12">
                                                <div className="inline-flex p-6 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 rounded-2xl border border-cyan-400/20 group-hover:border-cyan-400/30 transition-all duration-500">
                                                    <div className="text-cyan-400 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400/30 transition-all duration-500">
                                                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
                                                Coming Soon...
                                            </h2>

                                            <div className="max-w-3xl mx-auto">
                                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                                    Our project portfolio is currently being curated and will be made available soon.
                                                </p>

                                                <p className="text-lg text-gray-400 leading-relaxed mb-12">
                                                    We maintain confidentiality for our clients and carefully select which projects to showcase publicly.
                                                </p>
                                            </div>

                                            {/* Professional status indicator */}
                                            <div className="flex justify-center items-center space-x-4 mb-12">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/50"></div>
                                                <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider drop-shadow-lg drop-shadow-cyan-400/50">Portfolio In Development</span>
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/50"></div>
                                            </div>

                                            {/* Animated progress dots */}
                                            <div className="flex justify-center mb-16">
                                                <div className="flex space-x-2">
                                                    <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:0ms]"></div>
                                                    <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:150ms]"></div>
                                                    <div className="w-2 h-2 bg-cyan-400/70 rounded-full animate-bounce [animation-delay:300ms]"></div>
                                                </div>
                                            </div>

                                            {/* Professional divider */}
                                            <div className="flex justify-center">
                                                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                                            </div>
                                        </div>

                                        {/* Bottom gradient accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-b-2xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </PageTransition>
    );
}
