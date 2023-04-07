import { type StoryObj, type Meta } from '@storybook/react'
import { Label } from 'ui'
import { SearchField, SearchFieldClearButton, SearchFieldInput } from 'ui'

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
      <div className="absolute inset-y-0 right-0 flex items-center p-1">
        <SearchFieldClearButton variant="subtle" size="sm" className="w-8 !p-0">
          ✕
        </SearchFieldClearButton>
      </div>
    </div>
  </SearchField>
)

Default.argTypes = {
  //   value: { type: 'number' },
}

Default.args = {
  //   value: 150,
}
