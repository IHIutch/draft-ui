// import { withContentlayer } from "next-contentlayer";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

// This could be an .mjs file, but there is an issue documented here: https://github.com/contentlayerdev/contentlayer/issues/129#issuecomment-1080416633

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // fontLoaders: [
    //   {
    //     loader: '@next/font/google',
    //     options: { subsets: ['latin'] },
    //   },
    // ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['ui'],
}

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig)
