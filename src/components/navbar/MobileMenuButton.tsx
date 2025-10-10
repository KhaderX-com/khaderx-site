interface MobileMenuButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function MobileMenuButton({ isOpen, toggle }: MobileMenuButtonProps) {
    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={toggle}
                className="bg-gray-800/80 backdrop-blur-md border border-gray-600 rounded-lg p-2.5 inline-flex items-center justify-center text-white hover:text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black shadow-lg touch-target"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
                aria-controls="mobile-menu"
            >
                {/* Hamburger icon with improved animation */}
                <svg
                    className={`h-6 w-6 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>
        </div>
    );
}
