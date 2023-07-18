import { NumberField } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import MobileStory from './stories/mobile'

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
}

export default meta

export const Default = () => <DefaultStory />

export const Mobile = () => <MobileStory />
