import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add formats for better quality
    formats: ['image/webp', 'image/avif'],
    // Increase device sizes for better responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
