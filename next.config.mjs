/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/videos/:path*",
        destination: "/api/media/videos/:path*",
      },
      {
        source: "/images/:path*",
        destination: "/api/media/images/:path*",
      },
    ];
  },
};

export default nextConfig;
