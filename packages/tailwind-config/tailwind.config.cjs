/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-react-aria-components'),
  ],
  // safelist: [
  //   {
  //     pattern: /react-aria-.+/,
  //   },
  // ],
}
