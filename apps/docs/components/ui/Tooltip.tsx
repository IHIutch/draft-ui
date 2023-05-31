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
      offset={4}
      className={cn(
        [
          'fill-mode-forwards rounded-sm bg-slate-700 px-1 py-0.5 text-sm text-white',
          'data-[entering]:animate-in data-[entering]:fade-in',
          'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
          'data-[placement=top]:slide-in-from-bottom-2',
          'data-[placement=right]:slide-in-from-left-2',
          'data-[placement=bottom]:slide-in-from-top-2',
          'data-[placement=left]:slide-in-from-right-2',
        ],
        className
      )}
      {...props}
    >
      {children}
    </Tooltip>
  )
}

export { _Tooltip as Tooltip, _TooltipContent as TooltipContent }
