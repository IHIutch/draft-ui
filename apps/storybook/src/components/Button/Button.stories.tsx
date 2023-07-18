import { Button } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta

export const Default = () => <DefaultStory />
