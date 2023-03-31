import { Label } from '../../Label/src/Label'
import {
  SearchField,
  SearchFieldClearButton,
  SearchFieldInput,
} from '../src/SearchField'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>

export const Default: ComponentStory<typeof SearchField> = (props) => (
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
