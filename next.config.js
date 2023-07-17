/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/daijishin',
  basePath: '/daijishin',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
