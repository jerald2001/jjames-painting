import type { NextConfig } from "next";
import { MIGRATION_REDIRECTS } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return MIGRATION_REDIRECTS;
  },
};

export default nextConfig;
