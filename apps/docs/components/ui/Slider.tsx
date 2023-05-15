'use client'

import { cn } from '@/lib/utils'
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderThumbProps,
  type SliderTrackProps,
} from 'react-aria-components'

const _Slider = ({ className, ...props }) => {
  return <Slider {...props} className={cn('group', className)} />
}

const _SliderOutput = (props) => {
  return <SliderOutput {...props} />
}

const _SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <SliderTrack
      {...props}
      className={cn([
        'relative cursor-pointer',
        // Vertical
        'group-[[data-orientation=vertical]]:h-full group-[[data-orientation=vertical]]:w-6',
        // Horizontal
        'group-[[data-orientation=horizontal]]:h-6 group-[[data-orientation=horizontal]]:w-full',
        // ::before
        'before:absolute before:block before:rounded-full before:bg-slate-200',
        // ::before Vertical
        'group-[[data-orientation=vertical]]:before:left-1/2 group-[[data-orientation=vertical]]:before:h-full group-[[data-orientation=vertical]]:before:w-2 group-[[data-orientation=vertical]]:before:-translate-x-1/2',
        // ::before Horizontal
        'group-[[data-orientation=horizontal]]:before:top-1/2 group-[[data-orientation=horizontal]]:before:h-2 group-[[data-orientation=horizontal]]:before:w-full group-[[data-orientation=horizontal]]:before:-translate-y-1/2',
        className,
      ])}
    />
  )
}

const _SliderFilledTrack = ({
  percentage = 0,
  orientation = 'horizontal',
  className,
  ...props
}) => {
  const dir = orientation === 'vertical' ? 'height' : 'width'
  return (
    <div
      {...props}
      className={cn(
        [
          'absolute h-2 rounded-full bg-black',
          // Vertical
          'group-[[data-orientation=vertical]]:bottom-0 group-[[data-orientation=vertical]]:left-1/2 group-[[data-orientation=vertical]]:h-full group-[[data-orientation=vertical]]:w-2 group-[[data-orientation=vertical]]:-translate-x-1/2',
          // Horizontal
          'group-[[data-orientation=horizontal]]:left-0 group-[[data-orientation=horizontal]]:top-1/2 group-[[data-orientation=horizontal]]:h-2 group-[[data-orientation=horizontal]]:w-full group-[[data-orientation=horizontal]]:-translate-y-1/2',
        ],
        className
      )}
      style={{
        [dir]: percentage + '%',
      }}
    />
  )
}

const _SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <SliderThumb
      {...props}
      className={cn([
        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-xs shadow',
        // Dragging
        'data-[dragging]:outline-none data-[dragging]:ring-2 data-[dragging]:ring-slate-400 data-[dragging]:ring-offset-2',
        // Focus Visible
        'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400 data-[focus-visible]:ring-offset-2',
        // Vertical
        'group-[[data-orientation=vertical]]:left-1/2',
        // Horizontal
        'group-[[data-orientation=horizontal]]:top-1/2',
        className,
      ])}
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
