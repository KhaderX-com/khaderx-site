import Link from 'next/link';

interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`bg-gray-900 text-white ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
                    {/* Copyright */}
                    <div className="text-sm sm:text-base text-gray-300 order-2 sm:order-1">
                        © KhaderX 2025
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 order-1 sm:order-2">
                        <Link
                            href="/projects"
                            className="text-gray-300 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-300 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
