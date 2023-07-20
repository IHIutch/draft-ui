import { ModalContent } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'

const meta: Meta<typeof ModalContent> = {
  title: 'Modal',
  component: ModalContent,
}

export default meta

export const Default = () => <DefaultStory />
export const Sizes = () => <SizesStory />
