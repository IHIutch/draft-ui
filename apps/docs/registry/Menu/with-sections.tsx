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

export default function WithSections() {
  return (
    <Menu>
      <Button className="flex items-center gap-2">
        <span>Menu</span>
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <MenuContent>
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