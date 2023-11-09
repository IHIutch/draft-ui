'use client'

import * as React from 'react'

import { Check, Circle } from 'lucide-react'
import {
  Header,
  Item,
  Menu,
  MenuTrigger,
  Popover,
  Section,
  Separator,
  type ItemProps,
  type MenuProps,
  type MenuTriggerProps,
  type PopoverProps,
  type SectionProps,
  type SeparatorProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Menu = (props: MenuTriggerProps) => {
  return <MenuTrigger {...props} />
}
export interface _MenuContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style'>,
    MenuProps<T> {
  className?: string
  popoverClassName?: string
}

const _MenuContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _MenuContentProps<T>) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        // Base
        'min-w-[150px] overflow-auto rounded-md border bg-white p-1 shadow dark:border-slate-700 dark:bg-slate-800',
        // Entering
        'data-[entering]:animate-in data-[entering]:fade-in',
        // Exiting
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        // Top
        'data-[placement=top]:slide-in-from-bottom-2',
        // Bottom
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName,
      )}
      {...props}
    >
      <Menu className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

const _MenuItem = ({ className, children, ...props }: ItemProps) => {
  return (
    <Item
      className={cn(
        'group',
        'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-black outline-none transition-colors dark:text-white',
        // Hover
        'hover:bg-slate-100 dark:hover:bg-slate-700',
        // Focus
        'focus:bg-slate-100 dark:focus:bg-slate-700',
        // Disabled
        'aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:bg-transparent dark:aria-disabled:hover:bg-transparent',
        className,
      )}
      {...props}
    >
      {({ selectionMode }) => (
        <>
          {selectionMode === 'single' ? (
            <Circle
              aria-hidden="true"
              strokeWidth="3"
              className="h-2 w-2 fill-current group-[[aria-checked=false]]:invisible"
            />
          ) : selectionMode === 'multiple' ? (
            <Check
              aria-hidden="true"
              strokeWidth="3"
              className="h-4 w-4 group-[[aria-checked=false]]:invisible"
            />
          ) : null}
          {children}
        </>
      )}
    </Item>
  )
}

const _MenuSection = <T extends object>(props: SectionProps<T>) => {
  return <Section {...props} />
}

const _MenuHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Header
      className={cn(
        'px-2 py-1 text-sm font-medium text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

const _MenuSeparator = ({ className, ...props }: SeparatorProps) => {
  return (
    <Separator
      className={cn('-mx-1 my-1 border-t dark:border-slate-700', className)}
      {...props}
    />
  )
}

export {
  _Menu as Menu,
  _MenuContent as MenuContent,
  _MenuSection as MenuSection,
  _MenuHeader as MenuHeader,
  _MenuItem as MenuItem,
  _MenuSeparator as MenuSeparator,
}
