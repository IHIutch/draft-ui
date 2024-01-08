// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  settings: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
  },
  overrides: [
    // MDX
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
  ignorePatterns: ['registry/**/*.tsx'],
}
