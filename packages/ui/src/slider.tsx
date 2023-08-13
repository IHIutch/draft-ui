'use client'

import * as React from 'react'

import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderOutputProps,
  type SliderProps,
  type SliderThumbProps,
  type SliderTrackProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Slider = ({ className, ...props }: SliderProps) => {
  return <Slider {...props} className={cn('group/slider w-full', className)} />
}

const _SliderOutput = (props: SliderOutputProps) => {
  return <SliderOutput {...props} />
}

const _SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <SliderTrack
      {...props}
      className={cn(
        'relative cursor-pointer',
        // Vertical
        'group-[[data-orientation=vertical]]/slider:w-6',
        // Horizontal
        'group-[[data-orientation=horizontal]]/slider:h-6 group-[[data-orientation=horizontal]]/slider:w-full',
        // ::before
        'before:absolute before:block before:rounded-full before:bg-slate-200 dark:before:bg-slate-700',
        // ::before Vertical
        'group-[[data-orientation=vertical]]/slider:before:left-1/2 group-[[data-orientation=vertical]]/slider:before:h-full group-[[data-orientation=vertical]]/slider:before:w-2 group-[[data-orientation=vertical]]/slider:before:-translate-x-1/2',
        // ::before Horizontal
        'group-[[data-orientation=horizontal]]/slider:before:top-1/2 group-[[data-orientation=horizontal]]/slider:before:h-2 group-[[data-orientation=horizontal]]/slider:before:w-full group-[[data-orientation=horizontal]]/slider:before:-translate-y-1/2',
        className,
      )}
    />
  )
}

export interface _SliderFilledTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  percentage?: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const _SliderFilledTrack = ({
  percentage = 0,
  orientation = 'horizontal',
  className,
  ...props
}: _SliderFilledTrackProps) => {
  const dir = orientation === 'vertical' ? 'height' : 'width'
  return (
    <div
      className={cn(
        'absolute h-2 rounded-full bg-black dark:bg-white',
        // Vertical
        'group-[[data-orientation=vertical]]/slider:bottom-0 group-[[data-orientation=vertical]]/slider:left-1/2 group-[[data-orientation=vertical]]/slider:h-full group-[[data-orientation=vertical]]/slider:w-2 group-[[data-orientation=vertical]]/slider:-translate-x-1/2',
        // Horizontal
        'group-[[data-orientation=horizontal]]/slider:left-0 group-[[data-orientation=horizontal]]/slider:top-1/2 group-[[data-orientation=horizontal]]/slider:h-2 group-[[data-orientation=horizontal]]/slider:w-full group-[[data-orientation=horizontal]]/slider:-translate-y-1/2',
        className,
      )}
      style={{
        [dir]: percentage + '%',
      }}
      {...props}
    />
  )
}

const _SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <SliderThumb
      className={cn(
        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-xs border-2 border-black dark:border-white dark:bg-slate-900',
        // Dragging
        'data-[dragging]:outline-none data-[dragging]:ring-2 data-[dragging]:ring-slate-400 data-[dragging]:ring-offset-2 dark:data-[dragging]:ring-offset-slate-900',
        // Focus Visible
        'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400 data-[focus-visible]:ring-offset-2 dark:data-[focus-visible]:ring-offset-slate-900',
        // Vertical
        'group-[[data-orientation=vertical]]/slider:left-1/2',
        // Horizontal
        'group-[[data-orientation=horizontal]]/slider:top-1/2',
        className,
      )}
      {...props}
    />
  )
}

export {
  _Slider as Slider,
  _SliderOutput as SliderOutput,
  _SliderTrack as SliderTrack,
  _SliderFilledTrack as SliderFilledTrack,
  _SliderThumb as SliderThumb,
}
