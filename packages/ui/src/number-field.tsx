'use client'

import * as React from 'react'

import {
  Button,
  Group,
  NumberField,
  type GroupProps,
  type NumberFieldProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { type _ButtonProps } from './button'
import { Input, type _InputProps } from './input'

const _NumberField = ({ className, ...props }: NumberFieldProps) => {
  return <NumberField className={cn('w-full', className)} {...props} />
}

const _NumberInputGroup = (props: GroupProps) => {
  return <Group {...props} />
}

const _NumberInputStepper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cn(
        'absolute right-0 top-0 z-10 m-px flex h-[calc(100%-2px)] w-6 flex-col',
        className,
      )}
      {...props}
    />
  )
}

const _NumberInput = ({ className, ...props }: _InputProps) => {
  return <Input className={cn('pr-6', className)} {...props} />
}

const _NumberIncrementStepper = ({ className, ...props }: _ButtonProps) => {
  return (
    <Button
      slot="increment"
      className={cn(
        [
          'text-black dark:text-white flex flex-1 select-none items-center justify-center border-l dark:border-slate-700 leading-none transition-colors duration-100 rounded-tr-md',
          // Pressed
          'data-[pressed]:bg-slate-100 dark:data-[pressed]:bg-slate-700',
        ],
        className,
      )}
      {...props}
    />
  )
}

const _NumberDecrementStepper = ({ className, ...props }: _ButtonProps) => {
  return (
    <Button
      slot="decrement"
      className={cn(
        [
          'text-black dark:text-white flex flex-1 select-none items-center justify-center border-l dark:border-slate-700 leading-none transition-colors duration-100 rounded-br-md border-t',
          // Pressed
          'data-[pressed]:bg-slate-100 dark:data-[pressed]:bg-slate-700',
        ],
        className,
      )}
      {...props}
    />
  )
}

export {
  _NumberField as NumberField,
  _NumberInput as NumberInput,
  _NumberInputGroup as NumberInputGroup,
  _NumberInputStepper as NumberInputStepper,
  _NumberIncrementStepper as NumberIncrementStepper,
  _NumberDecrementStepper as NumberDecrementStepper,
}
