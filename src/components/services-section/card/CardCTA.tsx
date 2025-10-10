import Link from 'next/link';

interface CardCTAProps {
    href: string;
}

export default function CardCTA({ href }: CardCTAProps) {
    return (
        <div className="mt-auto pt-3">
            <Link href={href} className="glow-pill">
                <span>Explore</span>
                <span className="text-base leading-none">→</span>
            </Link>
        </div>
    );
}
