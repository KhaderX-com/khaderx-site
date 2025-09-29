// Advanced route-based code splitting utility
// This helps optimize client-side routing performance

import React, { lazy, ComponentType } from 'react';

// Higher-order component for lazy loading with better error handling
export function withLazyLoading<T extends ComponentType>(
    importFunc: () => Promise<{ default: T }>,
    fallbackComponent?: ComponentType
) {
    const LazyComponent = lazy(importFunc);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function LazyWrapper(props: any) {
        const Fallback = fallbackComponent || (() => (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="component-loading w-full h-32 rounded-lg"></div>
            </div>
        ));

        return (
            <React.Suspense fallback={<Fallback />}>
                <LazyComponent {...props} />
            </React.Suspense>
        );
    };
}

// Preload function for critical route components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preloadComponent(importFunc: () => Promise<{ default: ComponentType<any> }>) {
    // Only preload in browser environment
    if (typeof window !== 'undefined') {
        // Use requestIdleCallback for non-critical preloading
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                importFunc().catch(error => {
                    console.warn('Failed to preload component:', error);
                });
            });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => {
                importFunc().catch(error => {
                    console.warn('Failed to preload component:', error);
                });
            }, 100);
        }
    }
}

// Route-based code splitting helper
export const createLazyRoute = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    importFunc: () => Promise<{ default: ComponentType<any> }>,
    options: {
        preload?: boolean;
        fallback?: ComponentType;
    } = {}
) => {
    const { preload = false, fallback } = options;

    // Preload if requested
    if (preload) {
        preloadComponent(importFunc);
    }

    return withLazyLoading(importFunc, fallback);
};

// Performance-aware component loader
export class ComponentLoader {
    private static loadedComponents = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static loadingComponents = new Map<string, Promise<{ default: ComponentType<any> }>>();

    static async loadComponent(
        componentName: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        importFunc: () => Promise<{ default: ComponentType<any> }>,
        priority: 'high' | 'medium' | 'low' = 'medium'
    ) {
        // Return if already loaded
        if (this.loadedComponents.has(componentName)) {
            return;
        }

        // Return existing promise if already loading
        if (this.loadingComponents.has(componentName)) {
            return this.loadingComponents.get(componentName);
        }

        // Create loading promise
        const loadPromise = this.performLoad(componentName, importFunc, priority);
        this.loadingComponents.set(componentName, loadPromise);

        try {
            await loadPromise;
            this.loadedComponents.add(componentName);
        } finally {
            this.loadingComponents.delete(componentName);
        }
    }

    private static async performLoad(
        componentName: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        importFunc: () => Promise<{ default: ComponentType<any> }>,
        priority: 'high' | 'medium' | 'low'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): Promise<{ default: ComponentType<any> }> {
        const loadComponent = () => {
            const startTime = performance.now();
            return importFunc().then(module => {
                const loadTime = performance.now() - startTime;
                console.log(`Component ${componentName} loaded in ${loadTime}ms`);
                return module;
            });
        };

        switch (priority) {
            case 'high':
                return loadComponent();
            case 'medium':
                return new Promise(resolve => {
                    requestAnimationFrame(() => {
                        loadComponent().then(resolve);
                    });
                });
            case 'low':
                return new Promise(resolve => {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => {
                            loadComponent().then(resolve);
                        });
                    } else {
                        setTimeout(() => {
                            loadComponent().then(resolve);
                        }, 500);
                    }
                });
        }
    }
}