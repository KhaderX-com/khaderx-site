'use client';

import { useRoutePrefetching, useViewportPrefetch } from '@/hooks/useRoutePrefetch';

export default function RoutePreloader() {
    useRoutePrefetching();
    useViewportPrefetch();

    return null; // This component renders nothing but provides prefetching functionality
}