import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

import { type ButtonProps } from './button'
import { Input, type InputProps } from './input'

export const NumberField = ({
  className,
  ...props
}: ReactAria.NumberFieldProps) => {
  return (
    <ReactAria.NumberField className={cx('w-full', className)} {...props} />
  )
}

export const NumberInputGroup = (props: ReactAria.GroupProps) => {
  return <ReactAria.Group {...props} />
}

export const NumberInputStepper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cx(
        'absolute right-0 top-0 z-10 m-px flex h-[calc(100%-2px)] w-6 flex-col',
        className,
      )}
      {...props}
    />
  )
}

export const NumberInput = ({ className, ...props }: InputProps) => {
  return <Input className={cx('pr-6', className)} {...props} />
}

export const NumberIncrementStepper = ({
  className,
  ...props
}: ButtonProps) => {
  return (
    <ReactAria.Button
      slot="increment"
      className={cx(
        [
          'flex flex-1 select-none items-center justify-center rounded-tr-md border-l border-gray-300 leading-none text-black transition-colors duration-100 dark:border-slate-700 dark:text-white',
          // Pressed
          'pressed:bg-slate-100 dark:pressed:bg-slate-700',
          // Disabled
          'disabled:opacity-40 disabled:cursor-not-allowed',
        ],
        className,
      )}
      {...props}
    />
  )
}

export const NumberDecrementStepper = ({
  className,
  ...props
}: ButtonProps) => {
  return (
    <ReactAria.Button
      slot="decrement"
      className={cx(
        [
          'flex flex-1 select-none items-center justify-center rounded-br-md border-l border-t border-gray-300 leading-none text-black transition-colors duration-100 dark:border-slate-700 dark:text-white',
          // Pressed
          'pressed:bg-slate-100 dark:pressed:bg-slate-700',
          // Disabled
          'disabled:opacity-40 disabled:cursor-not-allowed',
        ],
        className,
      )}
      {...props}
    />
  )
}
