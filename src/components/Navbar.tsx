'use client';

import Link from 'next/link';
import { useState } from 'react';
import NeonTriangle from './NeonTriangle';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-lg shadow-2xl border-b border-cyan-400/30 z-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            <NeonTriangle 
                                size="md" 
                                glowIntensity="medium"
                            />
                            <span className="text-xl font-bold tracking-wider transition-colors duration-300 font-heading">
                                <span className="text-cyan-400 group-hover:text-cyan-300">K</span>
                                <span className="text-white group-hover:text-gray-200">hader</span>
                                <span className="text-cyan-400 group-hover:text-cyan-300">X</span>
                                <span className="text-gray-400 group-hover:text-gray-300 mx-2">-</span>
                                <span className="text-cyan-400 group-hover:text-cyan-300">K</span>
                                <span className="text-cyan-400 group-hover:text-cyan-300">X</span>
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/projects"
                                className="group relative text-gray-300 hover:text-cyan-400 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105"
                            >
                                Projects
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-8"></div>
                            </Link>
                            <Link
                                href="/services"
                                className="group relative text-gray-300 hover:text-cyan-400 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105"
                            >
                                Services
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-8"></div>
                            </Link>
                            <Link
                                href="/contact"
                                className="group relative text-gray-300 hover:text-cyan-400 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-cyan-400/10 rounded-lg font-brand hover:scale-105"
                            >
                                Contact
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-8"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="bg-gray-800/80 backdrop-blur-md border border-gray-600 rounded-lg p-2.5 inline-flex items-center justify-center text-white hover:text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
                            {...(isMenuOpen && { 'aria-expanded': true })}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon with improved animation */}
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
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
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-cyan-400/20 shadow-lg">
                        <Link
                            href="/projects"
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-base font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-base font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-base font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10"
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
