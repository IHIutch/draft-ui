/** @type { import('@storybook/react').Preview } */
import { withThemeByClassName } from '@storybook/addon-styling'

import '../src/styles.css'

import { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark bg-slate-800',
    },
    defaultTheme: 'light',
  }),
]

export default preview
