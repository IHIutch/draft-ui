// import { withContentlayer } from "next-contentlayer";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

// This could be an .mjs file, but there is an issue documented here: https://github.com/contentlayerdev/contentlayer/issues/129#issuecomment-1080416633

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['ui'],
  redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/breadcrumbs',
        permanent: true,
      },
    ]
  },
}

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig)
