import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
    return (
        <nav className={`fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-sm border-b border-white/20 z-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo/logo-3-removebg-preview.png"
                                alt="KhaderX Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/services"
                                className="text-[#0A2540] hover:text-[#00C2FF] px-3 py-2 text-sm font-bold transition-colors duration-200"
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="text-[#0A2540] hover:text-[#00C2FF] px-3 py-2 text-sm font-bold transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md border-t border-white/20">
                    <Link
                        href="/about"
                        className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-2 text-base font-bold transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-2 text-base font-bold transition-colors duration-200"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-2 text-base font-bold transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
