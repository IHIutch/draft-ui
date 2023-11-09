'use client'

import * as React from 'react'

import { cx } from 'cva'
import { Check, Circle } from 'lucide-react'
import {
  Header,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Section,
  Separator,
  type MenuItemProps,
  type MenuProps,
  type MenuTriggerProps,
  type PopoverProps,
  type SectionProps,
  type SeparatorProps,
} from 'react-aria-components'

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
      className={cx(
        // Base
        'min-w-[150px] overflow-auto rounded-md border bg-white p-1 shadow dark:border-slate-700 dark:bg-slate-800',
        // Entering
        'entering:animate-in entering:fade-in',
        // Exiting
        'exiting:animate-in exiting:fade-in exiting:direction-reverse',
        // Top
        'placement-top:slide-in-from-bottom-2',
        // Bottom
        'placement-bottom:slide-in-from-top-2',
        popoverClassName,
      )}
      {...props}
    >
      <Menu className={cx('outline-none', className)} {...props} />
    </Popover>
  )
}

const _MenuItem = ({ className, children, ...props }: MenuItemProps) => {
  return (
    <MenuItem
      className={cx(
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
              className="invisible h-2 w-2 fill-current group-selected:visible"
            />
          ) : selectionMode === 'multiple' ? (
            <Check
              aria-hidden="true"
              strokeWidth="3"
              className="invisible h-4 w-4 group-selected:visible"
            />
          ) : null}
          {children}
        </>
      )}
    </MenuItem>
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
      className={cx(
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
      className={cx('-mx-1 my-1 border-t dark:border-slate-700', className)}
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
