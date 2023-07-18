import { DateInputGroup } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof DateInputGroup> = {
  title: 'DateInput',
  component: DateInputGroup,
}

export default meta

export const Default = () => <DefaultStory />
