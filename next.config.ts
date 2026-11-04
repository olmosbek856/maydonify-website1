import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
  async redirects() {
    // Eski Maydonify manzillari → yangi MiniPolya sahifalari
    return [
      { source: "/owners", destination: "/maydon-egalari", permanent: true },
      { source: "/privacy", destination: "/maxfiylik", permanent: true },
      { source: "/terms", destination: "/shartlar", permanent: true },
    ];
  },
};

export default nextConfig;
