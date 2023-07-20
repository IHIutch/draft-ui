import { RadioGroup } from 'ui'

import { type Meta } from '@storybook/react'

import OrientationStory from '../RadioGroup/stories/orientation'
import DefaultStory from './stories/default'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Orientation = () => <OrientationStory />
