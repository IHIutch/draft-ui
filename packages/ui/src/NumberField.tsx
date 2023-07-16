'use client'

import {
  Button,
  Group,
  NumberField,
  type GroupProps,
  type NumberFieldProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { type _ButtonProps } from './Button'
import { Input, type _InputProps } from './Input'

const _NumberField = (props: NumberFieldProps) => {
  return <NumberField {...props} />
}

const _NumberInputStepper = ({ className, ...props }: GroupProps) => {
  return (
    <Group
      className={cn(
        'absolute right-0 top-0 z-10 m-px flex h-[calc(100%-2px)] w-6 flex-col',
        className
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
        'flex flex-1 select-none items-center justify-center border-l border-slate-300 dark:border-slate-700 leading-none',
        'transition-colors duration-100 data-[pressed]:bg-slate-100 dark:data-[pressed]:bg-slate-700',
        'rounded-tr-md',
        className
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
        'flex flex-1 select-none items-center justify-center border-l border-slate-300 dark:border-slate-700 leading-none',
        'transition-colors duration-100 data-[pressed]:bg-slate-100 dark:data-[pressed]:bg-slate-700',
        'rounded-br-md border-t',
        className
      )}
      {...props}
    />
  )
}

export {
  _NumberField as NumberField,
  _NumberInput as NumberInput,
  _NumberInputStepper as NumberInputStepper,
  _NumberIncrementStepper as NumberIncrementStepper,
  _NumberDecrementStepper as NumberDecrementStepper,
}
