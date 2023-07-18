// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
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
      {
        source: '/getting-started',
        destination: '/docs/introduction',
        permanent: true,
      },
    ]
  },
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     fs: false,
  //   }
  //   return config
  // },
}

module.exports = withContentlayer(nextConfig)
