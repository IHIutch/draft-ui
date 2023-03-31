import { Button } from '../../Button/src/Button'
import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import { ComboBox, ComboBoxItem } from '../src/Combobox'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ListBox } from 'react-aria-components/src/ListBox'
import { Popover } from 'react-aria-components/src/Popover'

export default {
  title: 'ComboBox',
  component: ComboBox,
} as ComponentMeta<typeof ComboBox>

export const Default: ComponentStory<typeof ComboBox> = (props) => (
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