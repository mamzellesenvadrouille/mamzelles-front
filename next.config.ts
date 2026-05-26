import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/formulaire-de-contact', destination: '/formules#formulaire', permanent: true },
      { source: '/formulaire-de-contact/', destination: '/formules#formulaire', permanent: true },
    ]
  }
};

export default nextConfig;