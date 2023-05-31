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
        'h-5 w-8 rounded-full bg-gray-300 p-0.5',
        'transition-colors group-[[data-selected]]:bg-black'
      )}
      {...props}
    >
      <div
        className={cn(
          'h-4 w-4 rounded-full bg-white',
          'transition-transform group-[[data-selected]]:translate-x-3'
        )}
      />
    </div>
  )
}

export { _Switch as Switch, _SwitchIndicator as SwitchIndicator }
