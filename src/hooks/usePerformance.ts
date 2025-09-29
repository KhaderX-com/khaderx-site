'use client';

import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetric {
    name: string;
    value: number;
    timestamp: number;
}

export function usePerformanceTracking() {
    const metricsRef = useRef<PerformanceMetric[]>([]);

    // Track custom metrics
    const trackMetric = useCallback((name: string, value: number) => {
        const metric: PerformanceMetric = {
            name,
            value,
            timestamp: Date.now(),
        };

        metricsRef.current.push(metric);

        // Log for development
        if (process.env.NODE_ENV === 'development') {
            console.log(`Performance Metric - ${name}:`, value);
        }

        // In production, send to analytics service
        // analytics.track('performance_metric', metric);
    }, []);

    // Track component mount time
    const trackComponentMount = useCallback((componentName: string) => {
        const startTime = performance.now();

        return () => {
            const endTime = performance.now();
            const mountTime = endTime - startTime;
            trackMetric(`${componentName}_mount_time`, mountTime);
        };
    }, [trackMetric]);

    // Track user interactions
    const trackInteraction = useCallback((action: string, element?: string) => {
        const timestamp = performance.now();
        trackMetric(`interaction_${action}${element ? `_${element}` : ''}`, timestamp);
    }, [trackMetric]);

    // Track API calls
    const trackApiCall = useCallback((endpoint: string, duration: number, success: boolean) => {
        trackMetric(`api_${endpoint}_duration`, duration);
        trackMetric(`api_${endpoint}_${success ? 'success' : 'error'}`, 1);
    }, [trackMetric]);

    // Get all metrics
    const getMetrics = useCallback(() => {
        return [...metricsRef.current];
    }, []);

    // Clear metrics
    const clearMetrics = useCallback(() => {
        metricsRef.current = [];
    }, []);

    return {
        trackMetric,
        trackComponentMount,
        trackInteraction,
        trackApiCall,
        getMetrics,
        clearMetrics,
    };
}

// Hook for tracking page load performance
export function usePageLoadTracking() {
    useEffect(() => {
        const startTime = performance.now();

        const trackPageLoad = () => {
            const loadTime = performance.now() - startTime;

            if (process.env.NODE_ENV === 'development') {
                console.log('Page Load Time:', loadTime);
            }

            // Track page-specific metrics
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'paint') {
                        console.log(`${entry.name}:`, entry.startTime);
                    }
                });
            });

            observer.observe({ entryTypes: ['paint'] });

            return () => observer.disconnect();
        };

        // Track when page is fully loaded
        if (document.readyState === 'complete') {
            trackPageLoad();
        } else {
            window.addEventListener('load', trackPageLoad);
            return () => window.removeEventListener('load', trackPageLoad);
        }
    }, []);
}

// Hook for tracking scroll performance
export function useScrollTracking() {
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const documentHeight = document.documentElement.scrollHeight;
                    const windowHeight = window.innerHeight;
                    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

                    // Track scroll depth milestones
                    if (scrollPercent >= 25 && scrollPercent < 50) {
                        console.log('Scroll: 25%');
                    } else if (scrollPercent >= 50 && scrollPercent < 75) {
                        console.log('Scroll: 50%');
                    } else if (scrollPercent >= 75 && scrollPercent < 90) {
                        console.log('Scroll: 75%');
                    } else if (scrollPercent >= 90) {
                        console.log('Scroll: 90%');
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}