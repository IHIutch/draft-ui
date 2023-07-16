'use client'

import { type HTMLAttributes } from 'react'

import { Switch, type SwitchProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Switch = ({ children, ...props }: SwitchProps) => {
  return (
    <Switch className="group flex items-center gap-2 font-medium" {...props}>
      {children}
    </Switch>
  )
}

const _SwitchIndicator = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'h-5 w-8 rounded-full bg-gray-300 dark:bg-slate-700 p-0.5 transition-colors',
        // Focused
        'group-[[data-focused]]:ring-2 group-[[data-focused]]:ring-slate-400 group-[[data-focused]]:ring-offset-2 dark:group-[[data-focused]]:ring-slate-400 dark:group-[[data-focused]]:ring-offset-slate-900',
        // Selected
        'group-[[data-selected]]:bg-black dark:group-[[data-selected]]:bg-slate-400'
      )}
      {...props}
    >
      <div
        className={cn(
          'h-4 w-4 rounded-full bg-white dark:bg-white transition-transform',
          // Selected
          'group-[[data-selected]]:translate-x-3'
        )}
      />
    </div>
  )
}

export { _Switch as Switch, _SwitchIndicator as SwitchIndicator }
