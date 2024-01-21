import * as React from 'react'

import { Check, Circle } from 'lucide-react'
import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'

export const Menu = (props: ReactAria.MenuTriggerProps) => {
  return <ReactAria.MenuTrigger {...props} />
}
export interface MenuContentProps<T>
  extends Omit<ReactAria.PopoverProps, 'children' | 'style'>,
    ReactAria.MenuProps<T> {
  className?: string
  popoverClassName?: string
}

export const MenuContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: MenuContentProps<T>) => {
  return (
    <ReactAria.Popover
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
      <ReactAria.Menu className={cx('outline-none', className)} {...props} />
    </ReactAria.Popover>
  )
}

export const MenuItem = ({
  className,
  children,
  ...props
}: ReactAria.MenuItemProps) => {
  return (
    <ReactAria.MenuItem
      className={cx(
        'group',
        'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-black outline-none transition-colors dark:text-white',
        // Hover
        'hover:bg-slate-100 dark:hover:bg-slate-700',
        // Focus
        'focus:bg-slate-100 dark:focus:bg-slate-700',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent',
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
    </ReactAria.MenuItem>
  )
}

export const MenuSection = <T extends object>(
  props: ReactAria.SectionProps<T>,
) => {
  return <ReactAria.Section {...props} />
}

export const MenuHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ReactAria.Header
      className={cx(
        'px-2 py-1 text-sm font-medium text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

export const MenuSeparator = ({
  className,
  ...props
}: ReactAria.SeparatorProps) => {
  return (
    <ReactAria.Separator
      className={cx('-mx-1 my-1 border-t dark:border-slate-700', className)}
      {...props}
    />
  )
}
