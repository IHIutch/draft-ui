// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  root: true,
  extends: ['custom'],
  plugins: ['eslint-plugin-storybook'],
  settings: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
  },
}
