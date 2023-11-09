'use client'

import { cx } from 'cva'
import {
  Text,
  TextField,
  type TextFieldProps,
  type TextProps,
} from 'react-aria-components'

const _TextField = ({ className, ...props }: TextFieldProps) => {
  return <TextField className={cx('w-full', className)} {...props} />
}

const _TextFieldDescription = ({ className, ...props }: TextProps) => {
  return (
    <Text
      elementType="div"
      slot="description"
      className={cx(
        'mt-2 text-sm text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

const _TextFieldErrorMessage = ({ className, ...props }: TextProps) => {
  return (
    <Text
      elementType="div"
      slot="errorMessage"
      className={cx('mt-2 text-sm text-red-500 dark:text-red-400', className)}
      {...props}
    />
  )
}

export {
  _TextField as TextField,
  _TextFieldDescription as TextFieldDescription,
  _TextFieldErrorMessage as TextFieldErrorMessage,
}
