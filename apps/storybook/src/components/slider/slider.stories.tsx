import { Slider } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import VerticalStory from './stories/vertical'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
}

export default meta

export const Default = () => <DefaultStory />
export const Vertical = () => <VerticalStory />
