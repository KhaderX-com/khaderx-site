import Link from 'next/link';
import NeonTriangle from '../NeonTriangle';

export default function Logo() {
    return (
        <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                <NeonTriangle
                    size="md"
                    glowIntensity="medium"
                />
                <span className="text-xl sm:text-2xl font-bold tracking-wider transition-colors duration-300 font-heading inline-flex items-baseline">
                    <span className="text-cyan-400 inline-block">K</span>
                    <span className="text-white inline-block">hader</span>
                    <span className="text-cyan-400 inline-block">X</span>
                    <span className="text-gray-400 mx-1 sm:mx-2 inline-block">-</span>
                    <span className="text-cyan-400 inline-block">K</span>
                    <span className="text-cyan-400 inline-block">X</span>
                </span>
            </Link>
        </div>
    );
}
