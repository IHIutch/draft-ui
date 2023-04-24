/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config/tailwind.config.cjs')

module.exports = {
  presets: [sharedConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography')],
}
