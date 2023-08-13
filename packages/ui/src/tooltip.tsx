'use client'

import {
  Tooltip,
  TooltipTrigger,
  type TooltipProps,
  type TooltipTriggerComponentProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Tooltip = (props: TooltipTriggerComponentProps) => {
  return <TooltipTrigger delay={0} closeDelay={0} {...props} />
}

const _TooltipContent = ({ className, children, ...props }: TooltipProps) => {
  return (
    <Tooltip
      offset={6}
      className={cn(
        [
          'fill-mode-forwards',
          'rounded-sm bg-slate-700 dark:bg-slate-300 px-1 py-0.5 text-sm text-white dark:text-black',
          // Entering
          'data-[entering]:animate-in data-[entering]:fade-in',
          // Exiting
          'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
          // Placement
          'data-[placement=top]:slide-in-from-bottom-1 data-[placement=right]:slide-in-from-left-1 data-[placement=bottom]:slide-in-from-top-1 data-[placement=left]:slide-in-from-right-1',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Tooltip>
  )
}

export { _Tooltip as Tooltip, _TooltipContent as TooltipContent }
