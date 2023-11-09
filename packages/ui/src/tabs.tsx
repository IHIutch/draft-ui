'use client'

import { cx } from 'cva'
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
} from 'react-aria-components'

const _Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <Tabs
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

const _TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <TabList
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

const _Tab = ({ className, ...props }: TabProps) => {
  return (
    <Tab
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

const _TabPanel = ({ className, ...props }: TabPanelProps) => {
  return <TabPanel className={cx('grow p-4', className)} {...props} />
}

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanel as TabPanel,
}
