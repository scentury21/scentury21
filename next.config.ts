import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages doesn't support Next's built-in image optimizer.
    // Revisit in a later phase with Cloudflare Images or an external loader.
    unoptimized: true,
  },
};

export default nextConfig;
