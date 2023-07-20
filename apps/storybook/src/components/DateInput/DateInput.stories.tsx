import { DateInput } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'

const meta: Meta<typeof DateInput> = {
  title: 'DateInput',
  component: DateInput,
}

export default meta

export const Default = () => <DefaultStory />
export const Sizes = () => <SizesStory />
