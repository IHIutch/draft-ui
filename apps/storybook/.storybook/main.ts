/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
  ],
  typescript: {
    reactDocgen: false,
  },
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}
export default config
