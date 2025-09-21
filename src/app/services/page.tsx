import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-20 sm:pt-24 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 sm:mb-6">
                        Services
                    </h1>

                    {/* Coming Soon Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-full">
                                <svg className="w-16 h-16 text-[#00C2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
                            Coming Soon...
                        </h2>

                        {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I&apos;m currently developing a comprehensive range of services to help bring your projects to life.
                            From aerospace engineering consulting to custom software development, exciting offerings are on the way!
                        </p> */}

                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                        </div> */}

                        {/* Preview of upcoming services */}
                        {/* <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-[#0A2540] mb-6">
                                Services in Development
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-3 h-3 bg-[#00C2FF] rounded-full mr-3"></div>
                                    <span className="text-gray-700">Aerospace Engineering Consulting</span>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-3 h-3 bg-[#00C2FF] rounded-full mr-3"></div>
                                    <span className="text-gray-700">Custom Software Development</span>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-3 h-3 bg-[#00C2FF] rounded-full mr-3"></div>
                                    <span className="text-gray-700">Python Development Services</span>
                                </div>

                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-3 h-3 bg-[#00C2FF] rounded-full mr-3"></div>
                                    <span className="text-gray-700">Flutter Mobile Applications</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
