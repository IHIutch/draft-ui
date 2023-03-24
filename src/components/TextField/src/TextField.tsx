import clsx from 'clsx'
import { type HTMLAttributes } from 'react'
import {
  TextField,
  type TextFieldProps,
} from 'react-aria-components/src/TextField'

const _TextField = (props: TextFieldProps) => {
  return <TextField {...props} />
}

const _TextFieldDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      {...props}
      className={clsx('mt-2 text-sm text-slate-500', className)}
    />
  )
}

const _TextFieldErrorMessage = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div {...props} className={clsx('mt-2 text-sm text-red-500', className)} />
  )
}

export {
  _TextField as TextField,
  _TextFieldDescription as TextFieldDescription,
  _TextFieldErrorMessage as TextFieldErrorMessage,
}
