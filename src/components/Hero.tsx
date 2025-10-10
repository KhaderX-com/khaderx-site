import Image from 'next/image';

interface HeroProps {
    className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
    return (
        <section className={`relative w-full bg-black ${className}`}>
            {/* Hero Image - Optimized Responsive Loading */}
            <div className="relative w-full">
                {/* Mobile Hero Image */}
                <div className="block md:hidden">
                    <div className="relative w-full h-screen">
                        <Image
                            src="/images/New-Logo/main-hero-vertical-1333-2000.jpg"
                            alt="KhaderX aerospace | aeronautical | mechanical engineering hero - cutting-edge technology and innovation"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={85}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>
                </div>

                {/* Desktop Hero Image */}
                <div className="hidden md:block">
                    <div className="relative w-full aspect-[3/2]">
                        <Image
                            src="/images/New-Logo/main-hero-horizontal-1920-1280.jpg"
                            alt="KhaderX aerospace | aeronautical | mechanical engineering hero - cutting-edge technology and innovation"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={85}
                            sizes="(max-width: 1200px) 100vw, (max-width: 1920px) 100vw, 1920px"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>
                </div>
            </div>

            {/* Content overlay area - IMPROVED RESPONSIVE */}
            <div className="absolute inset-0 flex flex-col items-start justify-start pointer-events-none">
                <div className="text-left z-10 w-full sm:w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-black/50 border border-white/15 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl pointer-events-auto h-full flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-10 md:pb-12">

                    {/* Main Slogan */}
                    <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
                        <div className="relative">
                            <h1 className="text-fluid-hero font-bold font-heading text-white hero-text-shadow">
                                <span className="block">Engineering Tomorrow,</span>
                                <span className="relative inline-block">
                                    <span className="text-cyan-400 neon-text-glow">Today</span>
                                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-cyan-400 to-transparent rounded-full opacity-70 animate-pulse"></div>
                                </span>
                            </h1>

                            {/* Decorative elements - adjusted for mobile */}
                            <div className="absolute -left-2 sm:-left-4 top-2 sm:top-4 w-1 sm:w-2 h-8 sm:h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 rounded-full"></div>
                            <div className="absolute -right-2 sm:-right-4 bottom-2 sm:bottom-4 w-0.5 sm:w-1 h-6 sm:h-12 bg-gradient-to-t from-cyan-400 to-transparent opacity-20 rounded-full"></div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                            </div>

                            {/* Aerospace | Aeronautical | Mechanical Engineer × Developer × Entrepreneur */}
                            <div className="text-gray-100 leading-relaxed space-y-3 drop-shadow">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-100 font-bold text-fluid-lg">
                                        Aerospace | Aeronautical | Mechanical
                                    </span>
                                    <span className="text-cyan-400 font-bold text-fluid-lg">
                                        Engineer
                                    </span>
                                    <span className="text-cyan-400 font-bold text-fluid-lg">×</span>
                                    <span className="text-cyan-400 font-bold text-fluid-lg">
                                        Developer
                                    </span>
                                    <span className="text-cyan-400 font-bold text-fluid-lg">×</span>
                                    <span className="text-cyan-400 font-bold text-fluid-lg">
                                        Entrepreneur
                                    </span>
                                </div>
                                <p className="text-gray-100 leading-relaxed font-semibold readable-content text-fluid-base">
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
