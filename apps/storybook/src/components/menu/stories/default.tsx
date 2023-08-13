import { ChevronDown } from 'lucide-react'
import { Button, Menu, MenuContent, MenuItem } from 'ui'

export default function Default() {
  return (
    <Menu>
      <Button className="flex items-center gap-2">
        <span>Menu</span>
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <MenuContent>
        <MenuItem id="foo1">Foo</MenuItem>
        <MenuItem id="bar1">Bar</MenuItem>
        <MenuItem id="baz1">Baz</MenuItem>
      </MenuContent>
    </Menu>
  )
}
