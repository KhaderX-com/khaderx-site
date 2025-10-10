'use client';

import { useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-lg shadow-2xl border-b border-cyan-400/30 z-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-18">
                    <Logo />
                    <DesktopNav />
                    <MobileMenuButton isOpen={isMenuOpen} toggle={toggleMenu} />
                </div>
            </div>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </nav>
    );
}
