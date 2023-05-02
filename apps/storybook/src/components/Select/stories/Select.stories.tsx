import { type Meta, type StoryObj } from '@storybook/react'
import { ChevronDown } from 'lucide-react'
import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from 'ui'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
}

export default meta

export const Default: StoryObj<typeof Select> = (props) => (
  <Select>
    <Label>Favorite Animal</Label>
    <Button variant="outline" className="flex items-center gap-2 font-normal">
      <SelectValue />
      <ChevronDown size="16" strokeWidth="3" />
    </Button>
    <SelectContent>
      <SelectItem textValue="Aardvark">Aardvark</SelectItem>
      <SelectItem textValue="Cat">Cat</SelectItem>
      <SelectItem textValue="Dog">Dog</SelectItem>
      <SelectItem textValue="Kangaroo">Kangaroo</SelectItem>
      <SelectItem textValue="Panda">Panda</SelectItem>
      <SelectItem textValue="Snake">Snake</SelectItem>
    </SelectContent>
  </Select>
)

Default.argTypes = {}

Default.args = {}
