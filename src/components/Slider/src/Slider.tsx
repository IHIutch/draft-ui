import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderTrackProps,
} from 'react-aria-components'

const _Slider = ({ className, ...props }) => {
  return <Slider {...props} className={clsx('group', className)} />
}

const _SliderOutput = (props) => {
  return <SliderOutput {...props} />
}

const _SliderTrack = (props: SliderTrackProps) => {
  return (
    <SliderTrack
      {...props}
      className={clsx(
        'relative cursor-pointer',
        'group-[&[data-orientation=vertical]]:h-full group-[&[data-orientation=vertical]]:w-6',
        'group-[&[data-orientation=horizontal]]:h-6 group-[&[data-orientation=horizontal]]:w-full',
        '',
        'before:absolute before:block before:rounded-full before:bg-slate-300',
        'group-[&[data-orientation=vertical]]:before:left-1/2 group-[&[data-orientation=vertical]]:before:h-full group-[&[data-orientation=vertical]]:before:w-2 group-[&[data-orientation=vertical]]:before:-translate-x-1/2',
        'group-[&[data-orientation=horizontal]]:before:top-1/2 group-[&[data-orientation=horizontal]]:before:h-2 group-[&[data-orientation=horizontal]]:before:w-full group-[&[data-orientation=horizontal]]:before:-translate-y-1/2'
      )}
    />
  )
}

// const _SliderTrack = ({ children, ...props }: SliderTrackProps) => {
//   return (
//     <SliderTrack
//       {...props}
//       className={clsx(
//         'relative cursor-pointer',
//         'group-[&[data-orientation=vertical]]:h-full group-[&[data-orientation=vertical]]:w-6',
//         'group-[&[data-orientation=horizontal]]:h-6 group-[&[data-orientation=horizontal]]:w-full'
//       )}
//     >
//       <div
//         className={clsx(
//           'absolute block rounded-full bg-slate-300',
//           'group-[&[data-orientation=vertical]]:left-1/2 group-[&[data-orientation=vertical]]:h-full group-[&[data-orientation=vertical]]:w-2 group-[&[data-orientation=vertical]]:-translate-x-1/2',
//           'group-[&[data-orientation=horizontal]]:top-1/2 group-[&[data-orientation=horizontal]]:h-2 group-[&[data-orientation=horizontal]]:w-full group-[&[data-orientation=horizontal]]:-translate-y-1/2'
//         )}
//       >
//         {children}
//       </div>
//     </SliderTrack>
//   )
// }

const _SliderFilledTrack = ({
  pctFilled = 0,
  orientation = 'horizontal',
  ...props
}) => {
  const dir = orientation === 'vertical' ? 'height' : 'width'
  return (
    <div
      {...props}
      className={clsx(
        'absolute h-2 rounded-full bg-blue-500',
        'group-[&[data-orientation=vertical]]:bottom-0 group-[&[data-orientation=vertical]]:left-1/2 group-[&[data-orientation=vertical]]:h-full group-[&[data-orientation=vertical]]:w-2 group-[&[data-orientation=vertical]]:-translate-x-1/2',
        'group-[&[data-orientation=horizontal]]:left-0 group-[&[data-orientation=horizontal]]:top-1/2 group-[&[data-orientation=horizontal]]:h-2 group-[&[data-orientation=horizontal]]:w-full group-[&[data-orientation=horizontal]]:-translate-y-1/2'
      )}
      style={{
        [dir]: pctFilled + '%',
      }}
    />
  )
}

const _SliderThumb = (props) => {
  return (
    <SliderThumb
      {...props}
      className={clsx(
        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-xs shadow',
        'data-[dragging]:outline-none data-[dragging]:ring-2 data-[dragging]:ring-slate-400 data-[dragging]:ring-offset-2',
        'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400 data-[focus-visible]:ring-offset-2',
        'group-[&[data-orientation=vertical]]:left-1/2',
        'group-[&[data-orientation=horizontal]]:top-1/2'
      )}
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
