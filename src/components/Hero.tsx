import Image from 'next/image';

interface HeroProps {
    className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
    return (
        <section
            className={`relative w-full h-screen overflow-hidden ${className}`}
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 opacity-80" />

            {/* Hero Image */}
            <div className="relative w-full h-full">
                <Image
                    src="/images/hero/hero-airplane-cyan-high-quality-4.png"
                    alt="Hero airplane"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    unoptimized
                    sizes="100vw"
                />

                {/* Soft overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content overlay area - ready for text or other content */}
            <div className="absolute inset-0 flex items-center justify-start pl-4 md:pl-8 lg:pl-12">
                <div className="text-left text-black z-10 w-4/5 md:w-2/5 lg:w-1/3">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Engineering Tomorrow
                    </h1>
                </div>
            </div>
        </section>
    );
}
