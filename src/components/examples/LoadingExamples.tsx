// Example usage of the loading components and hooks

import Loading, { SkeletonLoader, PageLoader } from '@/components/Loading';
import { useLoading, useAsyncOperation } from '@/hooks/useLoading';

// Example component showing various loading states
export default function LoadingExamples() {
    const { isLoading, startLoading, stopLoading } = useLoading();

    // Simulate an API call
    const simulateApiCall = async () => {
        return new Promise(resolve => {
            setTimeout(() => resolve('Data loaded!'), 2000);
        });
    };

    const { data, error, isLoading: apiLoading } = useAsyncOperation(simulateApiCall, []);

    return (
        <div className="space-y-8 p-8">
            <h2 className="text-2xl font-bold">Loading Component Examples</h2>

            {/* Basic loading spinner */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Basic Loading Spinner</h3>
                <Loading size="medium" text="Loading content..." />
            </div>

            {/* Different sizes and colors */}
            <div className="flex space-x-4">
                <Loading size="small" color="primary" text="Small" />
                <Loading size="medium" color="secondary" text="Medium" />
                <Loading size="large" color="primary" text="Large" />
            </div>

            {/* Skeleton loader for content */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Skeleton Loader</h3>
                <SkeletonLoader lines={4} className="max-w-md" />
            </div>

            {/* Async operation example */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Async Operation</h3>
                {apiLoading ? (
                    <Loading text="Fetching data..." />
                ) : error ? (
                    <p className="text-red-500">Error: {error.message}</p>
                ) : (
                    <p className="text-green-500">{String(data)}</p>
                )}
            </div>

            {/* Manual loading control */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Manual Loading Control</h3>
                <div className="space-y-2">
                    <div className="space-x-2">
                        <button
                            onClick={startLoading}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Start Loading
                        </button>
                        <button
                            onClick={stopLoading}
                            className="px-4 py-2 bg-gray-500 text-white rounded"
                        >
                            Stop Loading
                        </button>
                    </div>
                    {isLoading && <Loading text="Manual loading..." />}
                </div>
            </div>

            {/* Page loader overlay */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Page Loader Overlay</h3>
                <p className="text-sm text-gray-600 mb-2">
                    This would cover the entire viewport when active
                </p>
                <PageLoader isLoading={false} />
            </div>
        </div>
    );
}