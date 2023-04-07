import { type StoryObj, type Meta } from '@storybook/react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuSection,
  MenuSeparator,
} from 'ui'

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
}

export default meta

export const Default: StoryObj<typeof Menu> = (props) => {
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
