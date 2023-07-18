import { Select } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
}

export default meta

export const Default = () => <DefaultStory />
