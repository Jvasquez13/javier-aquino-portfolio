import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the project root: there is a stray package-lock.json in the home folder.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
