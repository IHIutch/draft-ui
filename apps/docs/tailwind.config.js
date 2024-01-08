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
            'code:not([data-rehype-pretty-code-figure] code)': {
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
            'strong code:not([data-rehype-pretty-code-figure] code)': {
              fontWeight: 'bolder',
            },
            '[data-rehype-pretty-code-title]': {
              backgroundColor: '#282a36',
              borderTopLeftRadius: theme('borderRadius.md'),
              borderTopRightRadius: theme('borderRadius.md'),
              paddingLeft: theme('spacing.4'),
              paddingRight: theme('spacing.4'),
              paddingTop: theme('spacing.3'),
              marginTop: theme('spacing.0'),
              paddingBottom: theme('spacing.1'),
              color: theme('colors.gray.400'),
              userSelect: 'none',
              '+ pre': {
                borderTopLeftRadius: theme('borderRadius.none'),
                borderTopRightRadius: theme('borderRadius.none'),
                marginTop: theme('spacing.0'),
              },
            },
            '[data-rehype-pretty-code-figure]': {
              '> pre': {
                paddingLeft: theme('spacing.0'),
                paddingRight: theme('spacing.0'),
                code: {
                  paddingLeft: theme('spacing.0'),
                  paddingRight: theme('spacing.0'),
                  '[data-line]': {
                    paddingLeft: theme('spacing.4'),
                    paddingRight: theme('spacing.4'),
                  },
                },
              },
            },
          },
        },
        invert: {
          css: {
            'code:not([data-rehype-pretty-code-figure] code)': {
              color: theme('colors.white'),
              backgroundColor: theme('colors.slate.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
