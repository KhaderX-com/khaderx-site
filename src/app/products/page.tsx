import { Suspense, lazy } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Metadata } from "next";

// Lazy load Footer component
const Footer = lazy(() => import('@/components/footer/Footer'));

export const metadata: Metadata = {
    title: "Products",
    description: "Discover KhaderX's innovative products including Python packages for aeroelastic analysis, console utilities, and development tools. Engineering excellence in every solution.",
    openGraph: {
        title: "Products | KhaderX",
        description: "Discover KhaderX's innovative products including Python packages for aeroelastic analysis, console utilities, and development tools. Engineering excellence in every solution.",
        url: "https://khaderx.com/products",
    },
    twitter: {
        title: "Products | KhaderX",
        description: "Discover KhaderX's innovative products including Python packages for aeroelastic analysis, console utilities, and development tools.",
    },
};

export default function Products() {
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
                                    <span className="mx-4 text-cyan-400 text-sm font-semibold uppercase tracking-wider">Product Portfolio</span>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
                                    Our <span className="text-gradient enhanced-glow">Products</span>
                                </h1>

                                <div className="max-w-4xl mx-auto mb-16">
                                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                        Innovative Python packages and development tools engineered for precision and performance
                                    </p>
                                </div>
                            </div>

                            {/* Products Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {/* wingsecly Product */}
                                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-3">wingsecly</h3>
                                        <p className="text-cyan-400 font-semibold mb-4">Aeroelastic Analysis Package</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Advanced Python package for comprehensive aeroelastic analysis and structural dynamics in aerospace engineering.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href="https://pypi.org/project/wingsecly/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-lg transition-colors duration-200 border border-cyan-400/20 hover:border-cyan-400/40"
                                        >
                                            View on PyPI
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* khx_rich_console Product */}
                                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-3">khx_rich_console</h3>
                                        <p className="text-cyan-400 font-semibold mb-4">Console Utilities</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Rich console utilities package for enhanced terminal output and developer experience.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href="https://pypi.org/project/khx-rich-console/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-lg transition-colors duration-200 border border-cyan-400/20 hover:border-cyan-400/40"
                                        >
                                            View on PyPI
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* khx_publish_pypi Product */}
                                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-3">khx_publish_pypi</h3>
                                        <p className="text-cyan-400 font-semibold mb-4">Publishing CLI Tool</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Command-line interface for streamlined Python package publishing to PyPI repositories.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href="https://pypi.org/project/khx-publish-pypi/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-lg transition-colors duration-200 border border-cyan-400/20 hover:border-cyan-400/40"
                                        >
                                            View on PyPI
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
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
