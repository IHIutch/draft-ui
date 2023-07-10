/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
  },
  redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/breadcrumbs',
        permanent: true,
      },
      {
        source: '/getting-started',
        destination: '/docs/introduction',
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
