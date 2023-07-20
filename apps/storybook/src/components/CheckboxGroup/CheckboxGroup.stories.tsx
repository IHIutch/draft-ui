import { CheckboxGroup } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import OrientationStory from './stories/orientation'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Orientation = () => <OrientationStory />
