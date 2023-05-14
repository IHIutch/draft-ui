'use client'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'react-aria-components'

import { cn } from '../lib/utils'

const _Tabs = ({ className, ...props }) => {
  return (
    <Tabs
      {...props}
      className={cn(
        [
          'group flex',
          // Horizontal
          'data-[orientation=horizontal]:flex-col',
          ,
        ],
        className
      )}
    />
  )
}

const _TabList = ({ className, ...props }) => {
  return (
    <TabList
      {...props}
      className={cn(
        [
          'flex border-slate-200',
          // Horizontal
          'group-[[data-orientation=horizontal]]:border-b-2',
          // Vertical
          'group-[[data-orientation=vertical]]:border-r-2 group-[[data-orientation=vertical]]:flex-col',
        ],
        className
      )}
    />
  )
}

const _Tab = ({ className, ...props }) => {
  return (
    <Tab
      {...props}
      className={cn(
        [
          'transition-colors px-4 py-2 cursor-pointer border-transparent relative text-slate-500 outline-none',
          // Focus-visible
          'data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400',
          // Disabled
          'aria-[disabled]:opacity-40 aria-[disabled]:cursor-not-allowed',
          // Horizontal
          'group-[[data-orientation=horizontal]]:border-b-2 group-[[data-orientation=horizontal]]:top-[2px]',
          // Horizontal & Selected
          'group-[[data-orientation=horizontal]]:aria-[selected=true]:border-b-2',
          // Vertical
          'group-[[data-orientation=vertical]]:inline-flex group-[[data-orientation=vertical]]:border-r-2 group-[[data-orientation=vertical]]:left-[2px]',
          // Vertical & Selected
          'group-[[data-orientation=vertical]]:aria-[selected=true]:border-r-2',
          // Selected
          'aria-[selected=true]:border-black aria-[selected=true]:text-black',
        ],
        className
      )}
    />
  )
}

const _TabPanels = (props) => {
  return <TabPanels {...props} />
}

const _TabPanel = ({ className, ...props }) => {
  return <TabPanel {...props} className={cn('p-4', className)} />
}

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanels as TabPanels,
  _TabPanel as TabPanel,
}
