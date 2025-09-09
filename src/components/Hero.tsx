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
                    src="/images/hero/hero-airplane-cyan.png"
                    alt="Hero airplane"
                    fill
                    className="object-contain object-center"
                    priority
                    quality={100}
                    unoptimized
                    sizes="100vw"
                />

                {/* Soft overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content overlay area - ready for text or other content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                    {/* Add your hero content here */}
                </div>
            </div>
        </section>
    );
}
