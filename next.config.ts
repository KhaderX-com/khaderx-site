import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    // Add formats for better quality and compression
    formats: ['image/webp', 'image/avif'],
    // Optimized device sizes for better responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add quality configuration for Next.js 16 compatibility
    qualities: [75, 85, 90, 95, 100],
    // Enable image optimization
    minimumCacheTTL: 60,
    // Optimize for performance
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Add compression for static assets
  compress: true,
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default withBundleAnalyzer(nextConfig);
