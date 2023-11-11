import { Tabs } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import DisabledKeysStory from './stories/disabled-keys'
import VerticalStory from './stories/vertical'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
}

export default meta

export const Default = () => <DefaultStory />
export const Vertical = () => <VerticalStory />
export const Disabled = () => <DisabledStory />
export const DisabledKeys = () => <DisabledKeysStory />
