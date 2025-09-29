import Image from 'next/image';

interface HeroProps {
    className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
    return (
        <section
            className={`relative w-full min-h-screen h-screen overflow-hidden bg-black ${className}`}
        >
            {/* Dark Background with Neon Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

            {/* Hero Image - Responsive: Vertical on mobile, Horizontal on desktop */}
            <div className="relative w-full h-full">
                {/* Mobile/Portrait - Vertical Images */}
                <div className="block md:hidden">
                    <Image
                        src="/images/New-Logo/main-hero-vertical-1333-2000.jpg"
                        alt="KhaderX aerospace | aeronautical | mechanical engineering hero - cutting-edge technology and innovation"
                        fill
                        className="object-cover object-center opacity-100"
                        priority
                        quality={95}
                        sizes="100vw"
                    />
                </div>

                {/* Desktop/Landscape - Horizontal Images */}
                <div className="hidden md:block">
                    <Image
                        src="/images/New-Logo/main-hero-horizontal-1920-1280.jpg"
                        alt="KhaderX aerospace | aeronautical | mechanical engineering hero - cutting-edge technology and innovation"
                        fill
                        className="object-cover object-center opacity-100"
                        priority
                        quality={95}
                        sizes="100vw"
                    />
                </div>

                {/* Subtle neon cyan overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Gentle neon accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/8 to-transparent" />
            </div>

            {/* Content overlay area - Brand new design */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32">
                <div className="text-left z-10 w-full sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/3 max-w-4xl">

                    {/* Main Slogan with Professional Design */}
                    <div className="mb-8 space-y-6">
                        <div className="relative">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight font-heading">
                                <span className="text-white">Engineering Tomorrow,</span>
                                <br />
                                <span className="relative inline-block">
                                    <span className="text-cyan-400 neon-text-glow">Today</span>
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent rounded-full opacity-70 animate-pulse"></div>
                                </span>
                            </h1>

                            {/* Decorative elements */}
                            <div className="absolute -left-4 top-4 w-2 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 rounded-full"></div>
                            <div className="absolute -right-4 bottom-4 w-1 h-12 bg-gradient-to-t from-cyan-400 to-transparent opacity-20 rounded-full"></div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                                <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Professional Excellence</span>
                            </div>

                            {/* Aerospace | Aeronautical | Mechanical Engineer Developer - Optimized for no overlap */}
                            <div className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed space-y-2">
                                <p className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-200 font-semibold">Aerospace | Aeronautical | Mechanical</span>
                                    <span className="text-cyan-400 font-bold">Engineer</span>
                                    <span className="text-cyan-400 font-bold">×</span>
                                    <span className="text-cyan-400 font-semibold">Developer</span>
                                    <span className="text-cyan-400 font-bold">×</span>
                                    <span className="text-cyan-400 font-semibold">Entrepreneur</span>
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Merging Engineering and Software Development into one powerful, innovative ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
