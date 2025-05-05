/** @type {import('next').NextConfig} */
const nextConfig = {
  // Either remove the output: 'export' line if you want to use server features
  // OR keep output: 'export' and add the images.unoptimized setting:
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;

/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
/*};*/

/*export default nextConfig;*/
