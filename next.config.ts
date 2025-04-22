import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@builder.io/partytown"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        partytown: {
          test: /partytown/,
          name: "partytown",
          chunks: "all",
          priority: 10,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
