import Link from 'next/link';

interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`bg-gray-900 text-white ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-sm text-gray-300">
                        © KhaderX 2025
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <Link
                            href="/about"
                            className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
