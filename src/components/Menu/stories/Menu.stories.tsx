import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Button } from 'react-aria-components/src/Button'
import { Item, Section } from 'react-aria-components/src/Collection'
import { Menu, MenuTrigger } from 'react-aria-components/src/Menu'
import { Popover } from 'react-aria-components/src/Popover'
import { Separator } from 'react-aria-components/src/Separator'

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (props) => {
  return (
    <MenuTrigger>
      <Button aria-label="Menu">☰</Button>
      <Popover>
        <Menu>
          <Section title={<span>Section 1</span>}>
            <Item>Foo</Item>
            <Item>Bar</Item>
            <Item>Baz</Item>
          </Section>
          <Separator
            style={{ borderTop: '1px solid gray', margin: '2px 5px' }}
          />
          <Section title={<span>Section 2</span>}>
            <Item>Foo</Item>
            <Item>Bar</Item>
            <Item>Baz</Item>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
