import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const Slider = ({ className, ...props }: ReactAria.SliderProps) => {
  return (
    <ReactAria.Slider {...props} className={cx('group w-full', className)} />
  )
}

export const SliderOutput = (props: ReactAria.SliderOutputProps) => {
  return <ReactAria.SliderOutput {...props} />
}

export const SliderTrack = ({
  className,
  ...props
}: ReactAria.SliderTrackProps) => {
  return (
    <ReactAria.SliderTrack
      {...props}
      className={cx(
        'relative cursor-pointer',
        // Vertical
        'group-orientation-vertical:w-6',
        // Horizontal
        'group-orientation-horizontal:h-6 group-orientation-horizontal:w-full',
        // ::before
        'before:absolute before:block before:rounded-full before:bg-slate-200 dark:before:bg-slate-700',
        // ::before Vertical
        'group-orientation-vertical:before:left-1/2 group-orientation-vertical:before:h-full group-orientation-vertical:before:w-2 group-orientation-vertical:before:-translate-x-1/2',
        // ::before Horizontal
        'group-orientation-horizontal:before:top-1/2 group-orientation-horizontal:before:h-2 group-orientation-horizontal:before:w-full group-orientation-horizontal:before:-translate-y-1/2',
        className,
      )}
    />
  )
}

export interface SliderFilledTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  percentage?: number
  orientation: 'horizontal' | 'vertical'
  className?: string
}

export const SliderFilledTrack = ({
  percentage = 0,
  orientation,
  className,
  ...props
}: SliderFilledTrackProps) => {
  const dir = orientation === 'vertical' ? 'height' : 'width'
  return (
    <div
      className={cx(
        'absolute h-2 rounded-full bg-black dark:bg-white',
        // Vertical
        'group-orientation-vertical:bottom-0 group-orientation-vertical:left-1/2 group-orientation-vertical:h-full group-orientation-vertical:w-2 group-orientation-vertical:-translate-x-1/2',
        // Horizontal
        'group-orientation-horizontal:left-0 group-orientation-horizontal:top-1/2 group-orientation-horizontal:h-2 group-orientation-horizontal:w-full group-orientation-horizontal:-translate-y-1/2',
        className,
      )}
      style={{
        [dir]: percentage + '%',
      }}
      {...props}
    />
  )
}

export const SliderThumb = ({
  className,
  ...props
}: ReactAria.SliderThumbProps) => {
  return (
    <ReactAria.SliderThumb
      className={cx(
        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-white text-xs dark:border-white dark:bg-slate-900',
        // Dragging
        'dragging:outline-none dragging:ring-2 dragging:ring-slate-400 dragging:ring-offset-2 dark:dragging:ring-offset-slate-900',
        // Focus Visible
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
        // Vertical
        'group-orientation-vertical:left-1/2',
        // Horizontal
        'group-orientation-horizontal:top-1/2',
        className,
      )}
      {...props}
    />
  )
}
