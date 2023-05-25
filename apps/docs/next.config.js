/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/breadcrumbs',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    }
    return config
  },
}

module.exports = nextConfig
