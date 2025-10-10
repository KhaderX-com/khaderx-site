import FooterBrand from './FooterBrand';
import FooterNav from './FooterNav';
import FooterSocials from './FooterSocials';
import FooterCopyright from './FooterCopyright';

interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`relative bg-black border-t border-gray-800 ${className}`}>
            {/* Subtle neon accent line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                    <FooterBrand />
                    <FooterNav />
                    <FooterSocials />
                </div>

                <FooterCopyright />
            </div>

            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none"></div>
        </footer>
    );
}
