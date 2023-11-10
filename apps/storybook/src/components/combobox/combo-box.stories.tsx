import { ComboBox } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import DisabledKeysStory from './stories/disabled-keys'
import WithButtonStory from './stories/with-button'

const meta: Meta<typeof ComboBox> = {
  title: 'ComboBox',
  component: ComboBox,
}

export default meta

export const Default = () => <DefaultStory />
export const WithButton = () => <WithButtonStory />
export const Disabled = () => <DisabledStory />
export const DisabledKeys = () => <DisabledKeysStory />
