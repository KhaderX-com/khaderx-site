import Link from 'next/link';

export default function ServicesCTA() {
    return (
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="mb-4 sm:mb-6">
                <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4 px-4">Ready to bring your vision to life?</p>
                <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 sm:mb-8"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <Link
                    href="/contact"
                    className="btn-primary group w-full sm:w-auto"
                >
                    <span className="mr-2">Start Your Project</span>
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>

                <Link
                    href="/services"
                    className="btn-secondary group w-full sm:w-auto"
                >
                    <span className="mr-2">View All Services</span>
                    <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:rotate-45 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
