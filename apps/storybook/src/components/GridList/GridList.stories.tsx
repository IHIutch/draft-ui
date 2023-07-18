import { GridList } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof GridList> = {
  title: 'GridList',
  component: GridList,
}

export default meta

export const Default = () => <DefaultStory />
