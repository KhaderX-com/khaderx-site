'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            'serviceWorker' in navigator &&
            process.env.NODE_ENV === 'production'
        ) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('Service Worker registered successfully:', registration);

                    // Handle updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New content is available
                                    console.log('New content available, refresh to update');

                                    // Optionally show a notification to the user
                                    if (window.confirm('New content available. Refresh to update?')) {
                                        window.location.reload();
                                    }
                                }
                            });
                        }
                    });
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });

            // Handle service worker messages
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'CACHE_UPDATED') {
                    console.log('Cache updated:', event.data);
                }
            });
        }
    }, []);

    return null; // This component doesn't render anything
}