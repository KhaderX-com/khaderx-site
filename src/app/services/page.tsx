import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from "next";

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-20 sm:pt-24 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <Breadcrumb className="mb-8" />

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 sm:mb-6">
                        Services
                    </h1>
                    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Professional services tailored to elevate your digital presence and bring your vision to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Web Development - Personal Branding Service Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="p-8">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-full group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                                    <svg className="w-12 h-12 text-[#00C2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#0A2540] mb-4 text-center group-hover:text-[#00C2FF] transition-colors duration-300">
                                Web Development
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#00C2FF] font-semibold text-center mb-4">
                                Specialized in Personal Branding
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-center">
                                Create stunning, responsive websites that showcase your unique brand identity.
                                From modern portfolios to business websites, I craft digital experiences that tell your story.
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Custom responsive design
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    SEO optimization
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Brand-focused approach
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Modern tech stack
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <div className="text-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-[#00C2FF] text-[#0A2540] font-semibold rounded-lg hover:bg-[#00A8E8] transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile & Desktop Applications Development Service Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="p-8">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-full group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-300">
                                    <svg className="w-12 h-12 text-[#00C2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#0A2540] mb-4 text-center group-hover:text-[#00C2FF] transition-colors duration-300">
                                Mobile & Desktop Apps
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#00C2FF] font-semibold text-center mb-4">
                                Games | Apps | Ads Integration | More...
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-center">
                                Build engaging mobile and desktop applications across platforms.
                                From interactive games to productivity apps with seamless ad integration and advanced features.
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Cross-platform development
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Game development & design
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    Ad monetization integration
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                                    iOS, Android & Desktop
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <div className="text-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-[#00C2FF] text-[#0A2540] font-semibold rounded-lg hover:bg-[#00A8E8] transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 opacity-50">
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-full">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-400 mb-4 text-center">
                            More Services
                        </h3>
                        <p className="text-gray-400 text-center">
                            Additional services coming soon...
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-[#0A2540] mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Let&apos;s discuss how I can help bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-[#00C2FF] text-[#0A2540] font-semibold rounded-lg hover:bg-[#00A8E8] transition-colors duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get In Touch
                        </a>

                        <a
                            href="mailto:contact@khaderx.com"
                            className="inline-flex items-center px-6 py-3 border-2 border-[#00C2FF] text-[#00C2FF] font-semibold rounded-lg hover:bg-[#00C2FF] hover:text-[#0A2540] transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Send Email
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
