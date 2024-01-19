import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'

export const Meter = ({ className, ...props }: ReactAria.MeterProps) => {
  return <ReactAria.Meter className={cx('w-full', className)} {...props} />
}

export const MeterTrack = ({
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

export interface MeterFilledTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number
}

export const MeterFilledTrack = ({
  className,
  percentage,
  ...props
}: MeterFilledTrackProps) => {
  return (
    <div
      className={cx('h-full bg-black dark:bg-white', className)}
      style={{ width: percentage + '%' }}
      {...props}
    />
  )
}
