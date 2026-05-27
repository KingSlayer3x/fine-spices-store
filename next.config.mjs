/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/fine-spices-store',
  assetPrefix: '/fine-spices-store/',
  output: 'export',
};

export default nextConfig;