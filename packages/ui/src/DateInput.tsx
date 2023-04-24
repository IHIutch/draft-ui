import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import {
  DateInput,
  DateSegment,
  Group,
  type DateInputProps,
} from 'react-aria-components'

const dateInputVariants = cva(
  'flex w-full items-center gap-2 border bg-transparent placeholder:text-slate-400 focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
  {
    variants: {
      validationState: {
        valid: 'border-slate-300',
        invalid: 'border-red-500',
      },
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
  }
)

export interface _DateInputProps
  extends VariantProps<typeof dateInputVariants> {
  className?: ClassValue
  children: ReactNode
}

const _DateInputContent = ({
  className = '',
  validationState,
  size,
  ...props
}: _DateInputProps) => {
  return (
    <div
      className={dateInputVariants({
        size,
        validationState,
        className,
      })}
      {...props}
    />
  )
}

const _DateInputGroup = ({
  className = '',
  validationState,
  size,
  ...props
}: _DateInputProps) => {
  return (
    <Group
      className={dateInputVariants({
        size,
        validationState,
        className,
      })}
      {...props}
    />
  )
}

const _DateInput = (props: DateInputProps) => {
  return <DateInput className="flex" {...props} />
}

const _DateSegment = (props) => {
  return (
    <DateSegment
      className={clsx(
        'flex items-center rounded px-1 focus:outline-none',
        'data-[placeholder]:text-slate-400 data-[placeholder]:focus:text-black',
        'focus:bg-slate-100 focus:text-black',
        'data-[type=literal]:px-0'
      )}
      {...props}
    />
  )
}

export {
  _DateInputContent as DateInputContent,
  _DateInputGroup as DateInputGroup,
  _DateInput as DateInput,
  _DateSegment as DateSegment,
}
