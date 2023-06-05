/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
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
