'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

// Route prefetching hook for improved navigation performance
export function useRoutePrefetching() {
    const pathname = usePathname();

    // Prefetch route on hover/focus
    const prefetchRoute = useCallback((href: string) => {
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(() => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = href;
                document.head.appendChild(link);

                // Remove after a delay to prevent head pollution
                setTimeout(() => {
                    if (document.head.contains(link)) {
                        document.head.removeChild(link);
                    }
                }, 30000);
            });
        }
    }, []);

    // Auto-prefetch likely next routes based on current page
    useEffect(() => {
        const prefetchNextRoutes = () => {
            const currentPath = pathname;
            let routesToPrefetch: string[] = [];

            // Define likely navigation patterns
            switch (currentPath) {
                case '/':
                    routesToPrefetch = ['/services', '/projects', '/contact'];
                    break;
                case '/services':
                    routesToPrefetch = ['/projects', '/contact'];
                    break;
                case '/projects':
                    routesToPrefetch = ['/services', '/contact'];
                    break;
                case '/products':
                    routesToPrefetch = ['/services', '/contact'];
                    break;
                case '/contact':
                    routesToPrefetch = ['/services', '/projects'];
                    break;
                default:
                    routesToPrefetch = ['/'];
            }

            // Prefetch with delay to not interfere with current page load
            setTimeout(() => {
                routesToPrefetch.forEach(route => {
                    prefetchRoute(route);
                });
            }, 2000);
        };

        prefetchNextRoutes();
    }, [pathname, prefetchRoute]);

    return { prefetchRoute };
}

// Link hover prefetching hook
export function useLinkPrefetch() {
    useEffect(() => {
        const handleLinkHover = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const link = target.closest('a[href]') as HTMLAnchorElement;

            if (link && link.href) {
                const url = new URL(link.href, window.location.origin);

                // Only prefetch internal links
                if (url.origin === window.location.origin) {
                    const prefetchLink = document.createElement('link');
                    prefetchLink.rel = 'prefetch';
                    prefetchLink.href = url.pathname;

                    if (!document.head.querySelector(`link[href="${url.pathname}"]`)) {
                        document.head.appendChild(prefetchLink);
                    }
                }
            }
        };

        // Add event listeners for hover prefetching
        document.addEventListener('mouseenter', handleLinkHover, true);

        return () => {
            document.removeEventListener('mouseenter', handleLinkHover, true);
        };
    }, []);
}

// Intersection Observer for viewport-based prefetching
export function useViewportPrefetch() {
    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const link = entry.target as HTMLAnchorElement;
                        if (link.href) {
                            const url = new URL(link.href, window.location.origin);

                            if (url.origin === window.location.origin) {
                                const prefetchLink = document.createElement('link');
                                prefetchLink.rel = 'prefetch';
                                prefetchLink.href = url.pathname;

                                if (!document.head.querySelector(`link[href="${url.pathname}"]`)) {
                                    document.head.appendChild(prefetchLink);
                                }
                            }
                        }

                        // Stop observing once prefetched
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.1,
            }
        );

        // Observe all links
        const links = document.querySelectorAll('a[href]');
        links.forEach((link) => {
            observer.observe(link);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}