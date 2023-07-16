'use client'

import { type HTMLAttributes } from 'react'

import { ProgressBar, type ProgressBarProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _ProgressBar = ({ className, ...props }: ProgressBarProps) => {
  return <ProgressBar className={cn('w-full', className)} {...props} />
}

const _ProgressBarTrack = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'h-2 w-full overflow-hidden rounded bg-slate-200 dark:bg-slate-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface _ProgressBarFilledTrackProps
  extends HTMLAttributes<HTMLDivElement> {
  percentage?: number
}

const _ProgressBarFilledTrack = ({
  className,
  percentage = 0,
  ...props
}: _ProgressBarFilledTrackProps) => {
  return (
    <div
      className={cn('h-full bg-black dark:bg-white', className)}
      style={{ width: percentage + '%' }}
      {...props}
    />
  )
}

export {
  _ProgressBar as ProgressBar,
  _ProgressBarTrack as ProgressBarTrack,
  _ProgressBarFilledTrack as ProgressBarFilledTrack,
}
