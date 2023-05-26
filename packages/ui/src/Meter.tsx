'use client'

import { Meter } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Meter = (props) => {
  return <Meter {...props} />
}

const _MeterTrack = ({ className, children, ...props }) => {
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

const _MeterFilledTrack = ({ className, percentage, ...props }) => {
  return (
    <div
      {...props}
      className={cn('h-full bg-black', className)}
      style={{ width: percentage + '%' }}
    />
  )
}

export {
  _Meter as Meter,
  _MeterTrack as MeterTrack,
  _MeterFilledTrack as MeterFilledTrack,
}
