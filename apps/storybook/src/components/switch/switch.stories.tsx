import { Switch } from 'ui'

import { type Meta } from '@storybook/react'

import AlignmentStory from './stories/alignment'
import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import SizesStory from './stories/sizes'

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
}

export default meta

export const Default = () => <DefaultStory />
export const Alignment = () => <AlignmentStory />
export const Sizes = () => <SizesStory />
export const Disabled = () => <DisabledStory />
