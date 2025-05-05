/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig


/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
/*};*/

/*export default nextConfig;*/
