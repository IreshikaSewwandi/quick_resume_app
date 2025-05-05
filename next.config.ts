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

export default nextConfig
