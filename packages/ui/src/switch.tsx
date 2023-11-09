'use client'

import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Switch, type SwitchProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const switchIndicatorVariants = cva(
  [
    'cursor-pointer rounded-full bg-gray-300 p-0.5 transition-colors dark:bg-slate-700',
    // Focus
    'group-focus:ring-2 group-focus:ring-slate-400 group-focus:ring-offset-2 dark:group-focus:ring-slate-400 dark:group-focus:ring-offset-slate-900',
    // Selected
    'group-selected:bg-black dark:group-selected:bg-slate-400',
    // Disabled
    'group-disabled:cursor-not-allowed group-disabled:opacity-40',
  ],
  {
    variants: {
      size: {
        lg: 'h-7 w-12',
        md: 'h-5 w-8',
        sm: 'h-4 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const switchIndicatorInnerVariants = cva(
  ['rounded-full bg-white transition-transform'],
  {
    variants: {
      size: {
        lg: 'h-6 w-6 group-selected:translate-x-5',
        md: 'h-4 w-4 group-selected:translate-x-3',
        sm: 'h-3 w-3 group-selected:translate-x-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface _SwitchProps
  extends SwitchProps,
    VariantProps<typeof switchIndicatorVariants> {
  className?: string
}

const _Switch = ({ children, className, ...props }: _SwitchProps) => {
  return (
    <Switch
      className={cn(
        [
          'group',
          'flex items-center gap-2 font-medium text-black dark:text-white',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Switch>
  )
}

export interface _SwitchIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof switchIndicatorVariants> {
  className?: string
}

const _SwitchIndicator = ({
  size,
  className,
  ...props
}: _SwitchIndicatorProps) => {
  return (
    <div
      className={cn(switchIndicatorVariants({ size, className }))}
      {...props}
    >
      <div className={cn(switchIndicatorInnerVariants({ size }))} />
    </div>
  )
}

export { _Switch as Switch, _SwitchIndicator as SwitchIndicator }
