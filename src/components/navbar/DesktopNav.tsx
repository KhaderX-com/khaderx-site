import Link from 'next/link';

export default function DesktopNav() {
    return (
        <div className="hidden md:flex">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
                <Link
                    href="/projects"
                    className="group relative text-gray-300 hover:text-cyan-400 px-3 lg:px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105 touch-target"
                >
                    Projects
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
                </Link>
                <Link
                    href="/services"
                    className="group relative text-gray-300 hover:text-cyan-400 px-3 lg:px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105 touch-target"
                >
                    Services
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
                </Link>
                <Link
                    href="/contact"
                    className="group relative text-gray-300 hover:text-cyan-400 px-3 lg:px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105 touch-target"
                >
                    Contact
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
                </Link>
            </div>
        </div>
    );
}
