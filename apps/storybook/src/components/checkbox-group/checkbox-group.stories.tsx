import { CheckboxGroup } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import HorizontalStory from './stories/horizontal'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Horizontal = () => <HorizontalStory />
