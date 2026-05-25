import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG format which is commonly returned by placeholder services
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    // Allow external images from specific domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
