import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: '192.168.1.173',
      pathname: '**'
    }]
  }
};

export default nextConfig;
