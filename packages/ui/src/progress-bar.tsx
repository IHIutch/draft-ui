'use client'

import * as React from 'react'

import { ProgressBar, type ProgressBarProps } from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const _ProgressBar = ({ className, ...props }: ProgressBarProps) => {
  return <ProgressBar className={cx('w-full', className)} {...props} />
}

const _ProgressBarTrack = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        'h-2 w-full overflow-hidden rounded bg-slate-200 dark:bg-slate-700',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface _ProgressBarFilledTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  percentage?: number
}

const _ProgressBarFilledTrack = ({
  className,
  percentage = 0,
  ...props
}: _ProgressBarFilledTrackProps) => {
  return (
    <div
      className={cx('h-full bg-black dark:bg-white', className)}
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
