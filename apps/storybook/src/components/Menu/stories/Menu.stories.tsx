import { type Meta, type StoryObj } from '@storybook/react'
import { ChevronDown } from 'lucide-react'
import {
  Button,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
} from 'ui'

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
}

export default meta

export const Default: StoryObj<typeof Menu> = () => {
  return (
    <Menu>
      <Button className="flex items-center gap-2">
        <span>Menu</span>
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <MenuContent>
        <MenuSection>
          <MenuHeader>Styles</MenuHeader>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuHeader>Align</MenuHeader>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}

Default.argTypes = {}

Default.args = {}
