/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.cjs");

module.exports = {
  presets: [sharedConfig],
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
};
