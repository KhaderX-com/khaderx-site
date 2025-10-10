import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

interface HeroProps {
    className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
    return (
        <section className={`relative w-full bg-black ${className}`}>
            <HeroImage />
            <HeroContent />
        </section>
    );
}
