/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config/tailwind.config.cjs')

module.exports = {
  presets: [sharedConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './registry/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'p:not(pre)': {
              code: {
                color: theme('colors.slate.800'),
                fontWeight: 'normal',
                backgroundColor: theme('colors.slate.100'),
                paddingTop: '2px',
                paddingRight: theme('spacing.1'),
                paddingBottom: '2px',
                paddingLeft: theme('spacing.1'),
                borderRadius: theme('spacing.1'),
                letterSpacing: theme('letterSpacing.wide'),
              },
              'strong code': {
                fontWeight: 'bolder',
              },
            },
            'li:not(pre)': {
              code: {
                color: theme('colors.slate.800'),
                fontWeight: 'normal',
                backgroundColor: theme('colors.slate.100'),
                paddingTop: '2px',
                paddingRight: theme('spacing.1'),
                paddingBottom: '2px',
                paddingLeft: theme('spacing.1'),
                borderRadius: theme('spacing.1'),
                letterSpacing: theme('letterSpacing.wide'),
              },
              'strong code': {
                fontWeight: 'bolder',
              },
            },
          },
        },
        invert: {
          css: {
            'p:not(pre)': {
              code: {
                color: theme('colors.white'),
                backgroundColor: theme('colors.slate.800'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
