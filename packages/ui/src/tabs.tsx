import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const Tabs = ({ className, ...props }: ReactAria.TabsProps) => {
  return (
    <ReactAria.Tabs
      className={cx(
        'flex',
        // Horizontal
        'orientation-horizontal:flex-col orientation-horizontal:[--border-width:0_0_2px_0]',
        // Vertical
        'orientation-vertical:[--border-width:0_2px_0_0]',
        className,
      )}
      {...props}
    />
  )
}

export const TabList = <T extends object>({
  className,
  ...props
}: ReactAria.TabListProps<T>) => {
  return (
    <ReactAria.TabList
      className={cx(
        'group',
        'flex border-[length:var(--border-width)] border-slate-200 dark:border-slate-700',
        // Vertical
        'orientation-vertical:flex-col',
        className,
      )}
      {...props}
    />
  )
}

export const Tab = ({ className, ...props }: ReactAria.TabProps) => {
  return (
    <ReactAria.Tab
      className={cx(
        'relative shrink-0 cursor-pointer border-[length:var(--border-width)] border-transparent px-4 py-2 text-slate-500 outline-none transition-colors dark:text-slate-400',
        // Focus-visible
        'focus-visible:ring-2 focus-visible:ring-slate-400',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-40',
        // Horizontal
        'group-orientation-horizontal:border-[width:var(--border-width)] group-orientation-horizontal:top-[2px]',
        // Vertical
        'group-orientation-vertical:border-[width:var(--border-width)] group-orientation-vertical:left-[2px] group-orientation-vertical:inline-flex',
        // Selected
        'selected:border-[length:var(--border-width)] selected:border-black selected:text-black dark:selected:border-white dark:aria-selected:text-white',
        className,
      )}
      {...props}
    />
  )
}

export const TabPanel = ({ className, ...props }: ReactAria.TabPanelProps) => {
  return <ReactAria.TabPanel className={cx('grow p-4', className)} {...props} />
}
