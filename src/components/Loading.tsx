interface LoadingProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'white';
    text?: string;
    className?: string;
}

export default function Loading({
    size = 'medium',
    color = 'primary',
    text = 'Loading...',
    className = ''
}: LoadingProps) {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12'
    };

    const colorClasses = {
        primary: 'text-[#00C2FF]',
        secondary: 'text-[#0A2540]',
        white: 'text-white'
    };

    const textSizeClasses = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg'
    };

    return (
        <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
            <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
                <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            </div>

            {text && (
                <p className={`${textSizeClasses[size]} ${colorClasses[color]} font-medium animate-pulse`}>
                    {text}
                </p>
            )}
        </div>
    );
}

// Skeleton loader for content placeholders
export function SkeletonLoader({ className = '', lines = 3 }: { className?: string; lines?: number }) {
    return (
        <div className={`animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
                <div key={index} className={`bg-gray-200 rounded h-4 mb-3 ${index === lines - 1 ? 'w-3/4' : 'w-full'}`} />
            ))}
        </div>
    );
}

// Page loading overlay
export function PageLoader({ isLoading = true }: { isLoading?: boolean }) {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <Loading size="large" text="Loading page..." />
        </div>
    );
}