import Link from 'next/link';

export default function FooterNav() {
    return (
        <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-4 sm:gap-6 lg:gap-8 order-2 sm:order-3 lg:order-2">
            <Link
                href="/projects"
                className="group relative text-gray-300 hover:text-cyan-400 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
                <span className="relative z-10">Projects</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
                href="/services"
                className="group relative text-gray-300 hover:text-cyan-400 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
                <span className="relative z-10">Services</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
                href="/contact"
                className="group relative text-gray-300 hover:text-cyan-400 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
                <span className="relative z-10">Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></div>
            </Link>
        </div>
    );
}
