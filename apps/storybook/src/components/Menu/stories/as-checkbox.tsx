import * as React from 'react'

import { ChevronDown } from 'lucide-react'
import { type Selection } from 'react-aria-components'
import { Button, Menu, MenuContent, MenuItem } from 'ui'

export default function AsCheckbox() {
  const [selected, setSelected] = React.useState<Selection>(new Set(['bar1']))
  return (
    <Menu>
      <Button className="flex items-center gap-2">
        <span>Menu</span>
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <MenuContent
        selectionMode="multiple"
        onSelectionChange={setSelected}
        selectedKeys={selected}
      >
        <MenuItem id="foo1">Foo</MenuItem>
        <MenuItem id="bar1">Bar</MenuItem>
        <MenuItem id="baz1">Baz</MenuItem>
      </MenuContent>
    </Menu>
  )
}
