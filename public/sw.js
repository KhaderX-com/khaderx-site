// Monetag verification
self.options = {
    "domain": "vaugroar.com",
    "zoneId": 9955758
}
self.lary = ""
importScripts('https://vaugroar.com/act/files/service-worker.min.js?r=sw')

// Service Worker for KhaderX Site
// Optimized caching strategy for better performance

const CACHE_NAME = 'khaderx-v1';
const STATIC_CACHE_NAME = 'khaderx-static-v1';
const IMAGE_CACHE_NAME = 'khaderx-images-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
    '/',
    '/contact',
    '/services',
    '/projects',
    '/products',
    '/_next/static/css/app/layout.css',
    '/images/New-Logo/KhaderX-KX-Logo-Cyan-corner.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');

    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('Service Worker: Installed successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Installation failed', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME &&
                            cacheName !== STATIC_CACHE_NAME &&
                            cacheName !== IMAGE_CACHE_NAME) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated successfully');
                return self.clients.claim();
            })
    );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests and chrome-extension requests
    if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
        return;
    }

    // Handle different types of requests with appropriate strategies
    if (url.pathname.startsWith('/images/')) {
        // Images: Cache first, fallback to network
        event.respondWith(cacheFirstStrategy(request, IMAGE_CACHE_NAME));
    } else if (url.pathname.startsWith('/_next/static/')) {
        // Next.js static files: Cache first (immutable)
        event.respondWith(cacheFirstStrategy(request, STATIC_CACHE_NAME));
    } else if (url.pathname === '/' ||
        url.pathname.startsWith('/contact') ||
        url.pathname.startsWith('/services') ||
        url.pathname.startsWith('/projects') ||
        url.pathname.startsWith('/products')) {
        // Pages: Network first, fallback to cache
        event.respondWith(networkFirstStrategy(request, CACHE_NAME));
    }
});

// Cache first strategy - for static assets
async function cacheFirstStrategy(request, cacheName) {
    try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.error('Cache first strategy failed:', error);
        return new Response('Offline', { status: 503 });
    }
}

// Network first strategy - for dynamic content
async function networkFirstStrategy(request, cacheName) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('Network failed, trying cache:', error);

        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Message handling
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_CACHE_STATS') {
        getCacheStats().then((stats) => {
            event.ports[0].postMessage(stats);
        });
    }
});

// Get cache statistics
async function getCacheStats() {
    const cacheNames = await caches.keys();
    const stats = {};

    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        stats[cacheName] = keys.length;
    }

    return stats;
}