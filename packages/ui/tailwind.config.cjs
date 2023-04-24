/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config/tailwind.config.cjs')

module.exports = {
  presets: [sharedConfig],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
}
