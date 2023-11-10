import { DateRangePicker } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'

const meta: Meta<typeof DateRangePicker> = {
  title: 'DateRangePicker',
  component: DateRangePicker,
}

export default meta

export const Default = () => <DefaultStory />
export const Disabled = () => <DisabledStory />
