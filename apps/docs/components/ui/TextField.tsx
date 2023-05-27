'use client'

import { type HTMLAttributes } from 'react'

import { Text, TextField, type TextFieldProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _TextField = (props: TextFieldProps) => {
  return <TextField {...props} />
}

const _TextFieldDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <Text
      {...props}
      elementType="div"
      slot="description"
      className={cn('mt-2 text-sm text-slate-500', className)}
    />
  )
}

const _TextFieldErrorMessage = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <Text
      {...props}
      elementType="div"
      slot="errorMessage"
      className={cn('mt-2 text-sm text-red-500', className)}
    />
  )
}

export {
  _TextField as TextField,
  _TextFieldDescription as TextFieldDescription,
  _TextFieldErrorMessage as TextFieldErrorMessage,
}
