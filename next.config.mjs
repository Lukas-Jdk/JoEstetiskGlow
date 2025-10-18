/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self';",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};`,
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' data: blob: https:;",
  "font-src 'self' data: https:;",
  "connect-src 'self' https:;",
  "frame-src https://www.google.com https://www.google.no https://maps.google.com https://www.youtube.com;",
  "base-uri 'self';",
  "form-action 'self';",
  "object-src 'none';",
  "frame-ancestors 'self';",
].join(" ");

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
