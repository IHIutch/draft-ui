import { RadioGroup } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import VerticalStory from './stories/vertical'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Vertical = () => <VerticalStory />
