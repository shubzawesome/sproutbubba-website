import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack to this project so a stray lockfile elsewhere (e.g.
  // ~/package-lock.json) can't make Next infer the wrong workspace root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Allow loading the dev server over the LAN IP (enables HMR there).
  allowedDevOrigins: ["192.168.42.42"],
};

export default nextConfig;
