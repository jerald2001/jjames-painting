import type { NextConfig } from "next";
import { MIGRATION_REDIRECTS } from "./src/lib/redirects";

// CSP intentionally omitted: Next 16 with Turbopack ships inline scripts and
// dynamic chunks that need nonce plumbing. Add CSP in a follow-up after the
// prod build is verified.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return MIGRATION_REDIRECTS;
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
