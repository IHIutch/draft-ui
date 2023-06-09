import { useState } from 'react'

import { ChevronDown } from 'lucide-react'
import { type Selection } from 'react-aria-components'
import {
  Button,
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  type _MenuContentProps,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
}

export default meta

export const Default: StoryObj<typeof MenuContent> = {
  argTypes: {
    selectionMode: {
      type: 'string',
      control: 'radio',
      options: ['none', 'single', 'multiple'],
    },
  },
  args: {
    selectionMode: 'none',
  },
  render: (props) => <MenuStory {...props} />,
}

const MenuStory = <T extends object>(props: _MenuContentProps<T>) => {
  const [selected, setSelected] = useState<Selection>(new Set(['foo1']))

  return (
    <Menu>
      <Button className="flex items-center gap-2">
        <span>Menu</span>
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <MenuContent
        selectionMode={props.selectionMode}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuSection>
          <MenuHeader>Styles</MenuHeader>
          <MenuItem id="foo1">Foo</MenuItem>
          <MenuItem id="bar1">Bar</MenuItem>
          <MenuItem id="baz1">Baz</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuHeader>Align</MenuHeader>
          <MenuItem id="foo2">Foo</MenuItem>
          <MenuItem id="bar2">Bar</MenuItem>
          <MenuItem id="baz2">Baz</MenuItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}
