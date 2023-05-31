'use client'

import * as React from 'react'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { IconButton, Menu, MenuContent, MenuItem } from '@/components/ui'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <Menu>
      <IconButton size="sm" variant="ghost" className="flex items-center gap-2">
        <Sun size="20" className="dark:hidden" />
        <Moon size="20" className="hidden dark:block" />
      </IconButton>
      <MenuContent
        onAction={(value: 'light' | 'dark' | 'system') => setTheme(value)}
      >
        <MenuItem id="light">
          <Sun size="16" />
          <span className="pl-2">Light</span>
        </MenuItem>
        <MenuItem id="dark">
          <Moon size="16" />
          <span className="pl-2">Dark</span>
        </MenuItem>
        <MenuItem id="system">
          <Laptop size="16" />
          <span className="pl-2">System</span>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
