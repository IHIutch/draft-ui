import { Label } from '../../Label/src/Label'
import { Select, SelectButton, SelectContent, SelectItem } from '../src/Select'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { SelectValue } from 'react-aria-components/src/Select'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (props) => (
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
