export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-full h-32 bg-gradient-to-r from-gray-900/50 to-gray-800/50 animate-pulse rounded-lg border border-gray-700/30"></div>
        </div>
    );
}