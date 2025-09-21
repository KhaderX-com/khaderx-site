'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={`fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-sm border-b border-white/20 z-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo/logo-3-removebg-preview.png"
                                alt="KhaderX Logo - Engineering Tomorrow"
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
                                href="/projects"
                                className="text-[#0A2540] hover:text-[#00C2FF] px-3 py-2 text-sm font-bold transition-colors duration-200"
                            >
                                Projects
                            </Link>
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
                            onClick={toggleMenu}
                            className="bg-white/90 backdrop-blur-sm rounded-md p-2 inline-flex items-center justify-center text-[#0A2540] hover:text-[#00C2FF] hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            {...(isMenuOpen && { 'aria-expanded': true })}
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
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                        <Link
                            href="/projects"
                            className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-3 text-base font-bold transition-colors duration-200 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-3 text-base font-bold transition-colors duration-200 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#0A2540] hover:text-[#00C2FF] block px-3 py-3 text-base font-bold transition-colors duration-200 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
