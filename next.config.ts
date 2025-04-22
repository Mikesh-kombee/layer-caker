import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development checks
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // Optimize images by default
    unoptimized: false,
  },

  // Enable production source maps for better debugging
  productionBrowserSourceMaps: false,

  // Optimize fonts
  optimizeFonts: true,

  // Enable experimental features for better performance
  experimental: {
    // Enable optimizeCss for better CSS optimization
    optimizeCss: true,
  },
};

export default nextConfig;
