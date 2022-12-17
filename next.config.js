const securityHeaders = [
  {
    key: "Cache-Control",
    value: "public,  s-maxage=300, stale-while-revalidate=59",
  },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
