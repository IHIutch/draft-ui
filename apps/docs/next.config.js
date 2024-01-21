// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
  transpilePackages: ['ui'],
  redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/breadcrumbs',
        permanent: true,
      },
      // Old Links
      {
        source: '/getting-started',
        destination: '/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/docs/introduction',
        destination: '/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/docs/installation',
        destination: '/getting-started/installation',
        permanent: true,
      },
      {
        source: '/docs/about',
        destination: '/getting-started/about',
        permanent: true,
      },
      {
        source: '/docs/changelog',
        destination: '/changelog',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
