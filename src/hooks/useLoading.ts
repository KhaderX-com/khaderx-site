'use client';

import React, { useState, useEffect } from 'react';

// Custom hook for loading states
export function useLoading(initialState = false) {
    const [isLoading, setIsLoading] = useState(initialState);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);
    const toggleLoading = () => setIsLoading(!isLoading);

    return {
        isLoading,
        startLoading,
        stopLoading,
        toggleLoading,
        setIsLoading
    };
}

// Hook for simulating network requests or async operations
export function useAsyncOperation<T>(
    asyncFunction: () => Promise<T>,
    dependencies: React.DependencyList = []
) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        asyncFunction()
            .then(result => {
                setData(result);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setData(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { data, error, isLoading };
}

// Hook for page transitions
export function usePageTransition() {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const startTransition = () => {
        setIsTransitioning(true);
        // Simulate a brief transition delay
        setTimeout(() => setIsTransitioning(false), 300);
    };

    return { isTransitioning, startTransition };
}