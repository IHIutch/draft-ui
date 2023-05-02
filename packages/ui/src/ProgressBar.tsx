'use client'

import { ProgressBar } from 'react-aria-components'

import { cn } from '../lib/utils'

const _ProgressBar = (props) => {
  return <ProgressBar {...props} />
}

const _ProgressBarTrack = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'h-2 w-full overflow-hidden rounded bg-slate-200',
        className
      )}
    >
      {children}
    </div>
  )
}

const _ProgressBarFilledTrack = ({ className, percentage, ...props }) => {
  return (
    <div
      {...props}
      className={cn('h-full bg-black', className)}
      style={{ width: percentage + '%' }}
    />
  )
}

export {
  _ProgressBar as ProgressBar,
  _ProgressBarTrack as ProgressBarTrack,
  _ProgressBarFilledTrack as ProgressBarFilledTrack,
}
