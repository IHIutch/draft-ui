import { type StoryObj, type Meta } from '@storybook/react'
import { SelectValue } from 'react-aria-components'
import { Label, Select, SelectButton, SelectContent, SelectItem } from 'ui/src'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
}

export default meta

export const Default: StoryObj<typeof Select> = (props) => (
  <Select>
    <Label>Favorite Animal</Label>
    <SelectButton icon="▼" variant="outline">
      <SelectValue />
    </SelectButton>
    <SelectContent>
      <SelectItem>Aardvark</SelectItem>
      <SelectItem>Cat</SelectItem>
      <SelectItem>Dog</SelectItem>
      <SelectItem>Kangaroo</SelectItem>
      <SelectItem>Panda</SelectItem>
      <SelectItem>Snake</SelectItem>
    </SelectContent>
  </Select>
)

Default.argTypes = {}

Default.args = {}
