/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
  // safelist: [
  //   {
  //     pattern: /react-aria-.+/,
  //   },
  // ],
}
