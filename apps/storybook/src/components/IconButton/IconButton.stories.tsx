import { IconButton } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'
import ThemeStory from './stories/theme'

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
}

export default meta

export const Default = () => <DefaultStory />
export const Sizes = () => <SizesStory />
export const Theme = () => <ThemeStory />
