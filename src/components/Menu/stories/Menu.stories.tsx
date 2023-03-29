import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuSection,
  MenuSeparator,
} from '../src/Menu'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (props) => {
  return (
    <Menu>
      <MenuButton aria-label="Menu">☰</MenuButton>
      <MenuList>
        <MenuSection title={<span>Section 1</span>}>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </MenuSection>
        <MenuSeparator
          style={{ borderTop: '1px solid gray', margin: '2px 5px' }}
        />
        <MenuSection title={<span>Section 2</span>}>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </MenuSection>
      </MenuList>
    </Menu>
  )
}

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
