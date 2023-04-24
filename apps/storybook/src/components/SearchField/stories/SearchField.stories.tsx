import { type Meta, type StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import {
  Label,
  SearchField,
  SearchFieldClearButton,
  SearchFieldInput,
} from 'ui'

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
      <SearchFieldClearButton variant="subtle" size="sm">
        <X size="1em" />
      </SearchFieldClearButton>
    </div>
  </SearchField>
)

Default.argTypes = {}

Default.args = {}
