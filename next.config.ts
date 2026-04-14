import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net/gh/devicons',
        // Opcional: se precisar de subdiretórios específicos
      },
    ],
  },
};

export default nextConfig;
