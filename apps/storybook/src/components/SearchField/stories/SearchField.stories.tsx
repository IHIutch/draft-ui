import {
  Label,
  SearchField,
  SearchFieldClearButton,
  SearchFieldInput,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchField> = {
  title: 'SearchField',
  component: SearchField,
}

export default meta

export const Default: StoryObj<typeof SearchField> = (props) => (
  <SearchField>
    <Label>Search</Label>
    <div className="relative">
      <SearchFieldInput className="pr-10" />
      <SearchFieldClearButton variant="subtle" size="sm" />
    </div>
  </SearchField>
)

Default.argTypes = {}

Default.args = {}
