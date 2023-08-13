import { RangeCalendar } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof RangeCalendar> = {
  title: 'RangeCalendar',
  component: RangeCalendar,
}

export default meta

export const Default = () => <DefaultStory />
