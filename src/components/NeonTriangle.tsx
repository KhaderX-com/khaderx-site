interface NeonTriangleProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    glowIntensity?: 'low' | 'medium' | 'high';
}

export default function NeonTriangle({ 
    size = 'md', 
    className = '',
    glowIntensity = 'medium'
}: NeonTriangleProps) {
    const glowClass = `neon-triangle-${glowIntensity}`;
    const sizeClass = `neon-triangle-size-${size}`;
    
    const sizeMap = {
        sm: 32,
        md: 40,
        lg: 60,
        xl: 80
    };
    
    return (
        <div 
            className={`neon-triangle-container ${glowClass} ${sizeClass} ${className}`}
        >
            <svg
                width={sizeMap[size]}
                height={sizeMap[size]}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
            >
                {/* Gradient definition for extra glow */}
                <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                        <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0096C7" stopOpacity="0.8" />
                    </linearGradient>
                    
                    {/* Enhanced glow filter for hollow triangle */}
                    <filter id="neonFilter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feGaussianBlur stdDeviation="4" result="outerGlow"/>
                        <feMerge> 
                            <feMergeNode in="outerGlow"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Hollow triangle with neon outline */}
                <polygon
                    points="50,15 85,75 15,75"
                    fill="none"
                    stroke="url(#neonGradient)"
                    strokeWidth="3"
                    filter="url(#neonFilter)"
                    className="animate-pulse"
                />
                
                {/* Inner subtle outline for depth */}
                <polygon
                    points="50,18 82,72 18,72"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="1"
                    opacity="0.4"
                />
            </svg>
        </div>
    );
}
