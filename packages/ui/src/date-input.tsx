'use client'

import { cva, cx, type VariantProps } from 'cva'
import {
  DateField,
  DateInput,
  DateSegment,
  Group,
  type DateFieldProps,
  type DateInputProps,
  type DateSegmentProps,
  type DateValue,
  type GroupProps,
} from 'react-aria-components'

const dateInputGroupVariants = cva({
  base: [
    'inline-flex w-full', // Using .inline-flex here, as opposed to .flex appears to fix this issue https://github.com/adobe/react-spectrum/issues/3164
    'w-full items-center border border-slate-300 bg-transparent placeholder:text-slate-400 dark:border-slate-700 dark:text-slate-50',
    // Focus
    'focus:outline-none',
    // Focus-visible
    'focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900',
    // Disabled
    'disabled:cursor-not-allowed disabled:opacity-40',
    // Invalid
    'invalid:border-red-500',
  ],
  variants: {
    size: {
      lg: 'h-12 rounded-lg px-3 py-2 text-lg',
      md: 'h-10 rounded-md px-3 py-1 text-base',
      sm: 'h-8 rounded px-2 py-1 text-sm',
      xs: 'h-6 rounded px-1 py-0.5 text-xs',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface _DateInputGroupProps
  extends GroupProps,
    VariantProps<typeof dateInputGroupVariants> {
  className?: string
}

const _DateInputGroup = ({
  className,
  size,
  ...props
}: _DateInputGroupProps) => {
  return (
    <Group
      className={cx(
        dateInputGroupVariants({
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

const _DateField = <T extends DateValue>(props: DateFieldProps<T>) => {
  return <DateField {...props} />
}

const _DateInput = ({ className, ...props }: DateInputProps) => {
  return <DateInput className={cx('flex gap-1', className)} {...props} />
}

const _DateSegment = ({ className, ...props }: DateSegmentProps) => {
  return (
    <DateSegment
      className={cx(
        'flex items-center rounded px-1 focus:outline-none',
        // Placeholder
        'placeholder-shown:text-slate-500 placeholder-shown:focus:text-black dark:placeholder-shown:focus:text-white',
        // Focus
        'focus:bg-slate-100 focus:text-black dark:focus:bg-slate-700 dark:focus:text-white',
        // Date Separator
        'type-literal:px-0',
        className,
      )}
      {...props}
    />
  )
}

export {
  _DateField as DateField,
  _DateInputGroup as DateInputGroup,
  _DateInput as DateInput,
  _DateSegment as DateSegment,
}
