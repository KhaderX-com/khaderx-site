import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-cyan-400/20 shadow-lg">
                <Link
                    href="/projects"
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-lg font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10 border-l-2 border-transparent hover:border-cyan-400/50 touch-target"
                    onClick={onClose}
                >
                    Projects
                </Link>
                <Link
                    href="/services"
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-lg font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10 border-l-2 border-transparent hover:border-cyan-400/50 touch-target"
                    onClick={onClose}
                >
                    Services
                </Link>
                <Link
                    href="/contact"
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-lg font-semibold transition-all duration-300 rounded-md hover:bg-cyan-400/10 border-l-2 border-transparent hover:border-cyan-400/50 touch-target"
                    onClick={onClose}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}
