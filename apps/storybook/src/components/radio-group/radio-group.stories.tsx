import { RadioGroup } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import HorizontalStory from './stories/horizontal'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Horizontal = () => <HorizontalStory />
