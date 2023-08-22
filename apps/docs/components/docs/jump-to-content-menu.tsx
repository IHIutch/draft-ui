'use client'

import { ChevronDown } from 'lucide-react'
import { Button } from 'ui/src/button'
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
} from 'ui/src/menu'

import { type TocItemProps } from '@/types'

export default function JumpToContentMenu({
  toc,
}: {
  toc: Array<TocItemProps>
}) {
  const focusAnchorElement = (anchor: string) => {
    const el = document?.getElementById(anchor)
    if (el) el.focus()
  }

  return (
    <Menu>
      <Button
        size="xs"
        className="fixed left-0 top-0 z-50 items-center gap-2 opacity-0 aria-expanded:opacity-100 data-[focus-visible]:opacity-100"
      >
        <span>Skip to Content</span>
        <ChevronDown aria-hidden size="16" strokeWidth="3" />
      </Button>
      <MenuContent
        onAction={(slug: TocItemProps['slug']) => focusAnchorElement(slug)}
      >
        <MenuSection>
          <MenuHeader>Landmark Regions</MenuHeader>
          <MenuItem id="page-content">Page Content</MenuItem>
          <MenuItem id="site-navigation">Site Navigation</MenuItem>
          <MenuItem id="page-navigation">Page Navigation</MenuItem>
        </MenuSection>
        <MenuSeparator />
        {toc ? (
          <MenuSection>
            <MenuHeader>Headings</MenuHeader>
            {toc.map((heading: TocItemProps, idx: number) => (
              <MenuItem id={heading.slug} key={idx}>
                {heading.content}
              </MenuItem>
            ))}
          </MenuSection>
        ) : null}
      </MenuContent>
    </Menu>
  )
}
