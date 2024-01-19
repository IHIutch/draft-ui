import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'

export const Tooltip = (props: ReactAria.TooltipTriggerComponentProps) => {
  return <ReactAria.TooltipTrigger delay={0} closeDelay={0} {...props} />
}

export const TooltipContent = ({
  className,
  children,
  ...props
}: ReactAria.TooltipProps) => {
  return (
    <ReactAria.Tooltip
      offset={6}
      className={cx(
        [
          'rounded-sm bg-slate-700 px-1 py-0.5 text-sm text-white dark:bg-slate-300 dark:text-black',
          // Entering
          'entering:animate-in entering:fade-in',
          // Exiting
          'exiting:animate-in exiting:fade-in exiting:direction-reverse',
          // Placement
          'placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </ReactAria.Tooltip>
  )
}
