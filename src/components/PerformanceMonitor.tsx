'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Performance monitoring and Core Web Vitals tracking
export default function PerformanceMonitor() {
    const pathname = usePathname();

    useEffect(() => {
        // Track Core Web Vitals
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            // Dynamically import web-vitals functions
            Promise.all([
                import('web-vitals').then(module => module.onLCP),
                import('web-vitals').then(module => module.onINP), // FID is deprecated, use INP
                import('web-vitals').then(module => module.onCLS),
                import('web-vitals').then(module => module.onFCP),
                import('web-vitals').then(module => module.onTTFB),
            ]).then(([onLCP, onINP, onCLS, onFCP, onTTFB]) => {
                // Largest Contentful Paint - measures loading performance
                onLCP((metric) => {
                    console.log('LCP:', metric);
                    // In production, send to analytics service
                    // analytics.track('web_vital', { name: 'LCP', value: metric.value });
                });

                // Interaction to Next Paint - measures interactivity (replaces FID)
                onINP((metric) => {
                    console.log('INP:', metric);
                    // analytics.track('web_vital', { name: 'INP', value: metric.value });
                });

                // Cumulative Layout Shift - measures visual stability
                onCLS((metric) => {
                    console.log('CLS:', metric);
                    // analytics.track('web_vital', { name: 'CLS', value: metric.value });
                });

                // First Contentful Paint - measures loading
                onFCP((metric) => {
                    console.log('FCP:', metric);
                    // analytics.track('web_vital', { name: 'FCP', value: metric.value });
                });

                // Time to First Byte - measures server response
                onTTFB((metric) => {
                    console.log('TTFB:', metric);
                    // analytics.track('web_vital', { name: 'TTFB', value: metric.value });
                });
            }).catch((error) => {
                console.error('Failed to load web-vitals:', error);
            });
        }
    }, []);

    useEffect(() => {
        // Track page navigation performance    
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                if (entry.entryType === 'navigation') {
                    const navigationEntry = entry as PerformanceNavigationTiming;
                    console.log('Navigation Performance:', {
                        dns: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
                        tcp: navigationEntry.connectEnd - navigationEntry.connectStart,
                        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
                        download: navigationEntry.responseEnd - navigationEntry.responseStart,
                        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
                        totalLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
                    });
                }
            });
        });

        observer.observe({ entryTypes: ['navigation'] });

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    // Track resource loading performance
    useEffect(() => {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                if (entry.entryType === 'resource') {
                    const resourceEntry = entry as PerformanceResourceTiming;
                    // Log slow resources (>1000ms)
                    if (resourceEntry.duration > 1000) {
                        console.warn('Slow Resource:', {
                            name: resourceEntry.name,
                            duration: resourceEntry.duration,
                            size: resourceEntry.transferSize,
                            type: resourceEntry.initiatorType,
                        });
                    }
                }
            });
        });

        observer.observe({ entryTypes: ['resource'] });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null; // This component doesn't render anything
}