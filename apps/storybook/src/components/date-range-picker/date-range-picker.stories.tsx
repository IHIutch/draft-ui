import { DateRangePicker } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof DateRangePicker> = {
  title: 'DateRangePicker',
  component: DateRangePicker,
}

export default meta

export const Default = () => <DefaultStory />
