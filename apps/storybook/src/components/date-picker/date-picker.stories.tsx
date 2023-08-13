import { DatePicker } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
}

export default meta

export const Default = () => <DefaultStory />
