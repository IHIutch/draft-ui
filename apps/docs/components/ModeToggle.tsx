'use client'

import * as React from 'react'

import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { IconButton, Menu, MenuContent, MenuItem } from '@/components/ui'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Menu>
      <IconButton
        aria-label={`Select a color theme, current theme is: ${resolvedTheme}`}
        size="sm"
        variant="ghost"
        className="flex items-center gap-2"
      >
        {resolvedTheme === 'dark' ? (
          <MoonIcon size="20" />
        ) : (
          <SunIcon size="20" />
        )}
      </IconButton>
      <MenuContent
        onAction={(value: 'light' | 'dark' | 'system') => setTheme(value)}
      >
        <MenuItem id="light">
          <SunIcon aria-hidden="true" size="16" />
          <span className="pl-2">Light</span>
        </MenuItem>
        <MenuItem id="dark">
          <MoonIcon aria-hidden="true" size="16" />
          <span className="pl-2">Dark</span>
        </MenuItem>
        <MenuItem id="system">
          <LaptopIcon aria-hidden="true" size="16" />
          <span className="pl-2">System</span>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
