import type { NextConfig } from "next";

const resourceBaseUrl = process.env.RESOURCE_URL?.trim().replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: resourceBaseUrl
        ? [
            {
              source: "/resource/:path*",
              destination: `${resourceBaseUrl}/:path*`,
            },
          ]
        : [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
