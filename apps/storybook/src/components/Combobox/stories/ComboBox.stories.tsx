import { type StoryObj, type Meta } from '@storybook/react'
import { ListBox, Popover } from 'react-aria-components'
import { Button } from 'ui/src'
import { Input } from 'ui/src'
import { Label } from 'ui/src'
import { ComboBox, ComboBoxItem } from 'ui/src'

const meta: Meta<typeof ComboBox> = {
  title: 'ComboBox',
  component: ComboBox,
}

export default meta

export const Default: StoryObj<typeof ComboBox> = (props) => (
  <ComboBox>
    <Label>Favorite Animal</Label>
    <div>
      <Input />
      <Button>▼</Button>
    </div>
    <Popover>
      <ListBox>
        <ComboBoxItem>Aardvark</ComboBoxItem>
        <ComboBoxItem>Cat</ComboBoxItem>
        <ComboBoxItem>Dog</ComboBoxItem>
        <ComboBoxItem>Kangaroo</ComboBoxItem>
        <ComboBoxItem>Panda</ComboBoxItem>
        <ComboBoxItem>Snake</ComboBoxItem>
      </ListBox>
    </Popover>
  </ComboBox>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
