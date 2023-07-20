import { TextField } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import WithErrorStory from './stories/with-error'

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
}

export default meta

export const Default = () => <DefaultStory />
export const WithError = () => <WithErrorStory />
