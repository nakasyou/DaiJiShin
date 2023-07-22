/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/kojishin',
  basePath: '/kojishin',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
