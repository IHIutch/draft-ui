import { Checkbox } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import SizesStory from './stories/sizes'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Default = () => <DefaultStory />
export const Sizes = () => <SizesStory />
export const Disabled = () => <DisabledStory />
