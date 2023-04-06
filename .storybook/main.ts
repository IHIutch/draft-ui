/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    reactDocgen: false,
  },
  docs: {
    autodocs: false,
  },
}
export default config
