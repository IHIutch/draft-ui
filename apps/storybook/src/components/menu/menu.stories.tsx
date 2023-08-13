import { Menu } from 'ui'

import { type Meta } from '@storybook/react'

import AsCheckboxStory from './stories/as-checkbox'
import AsRadioStory from './stories/as-radio'
import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import WithSectionsStory from './stories/with-sections'

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
}

export default meta

export const Default = () => <DefaultStory />
export const WithSections = () => <WithSectionsStory />
export const AsCheckbox = () => <AsCheckboxStory />
export const AsRadio = () => <AsRadioStory />
export const Disabled = () => <DisabledStory />
