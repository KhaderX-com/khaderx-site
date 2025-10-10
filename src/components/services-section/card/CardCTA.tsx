import Link from 'next/link';

interface CardCTAProps {
    href: string;
    title: string;
}

export default function CardCTA({ href, title }: CardCTAProps) {
    return (
        <div className="mt-auto pt-3">
            <Link href={href} className="glow-pill">
                <span>Explore {title}</span>
                <span className="text-base leading-none">→</span>
            </Link>
        </div>
    );
}
