'use client'

import { X } from 'lucide-react'
import { SearchField, type SearchFieldProps } from 'react-aria-components'

import { cx } from '@/lib/cva.config'

import { type _ButtonProps } from './button'
import { IconButton, type _IconButtonProps } from './icon-button'
import { Input, type _InputProps } from './input'

const _SearchField = ({ className, ...props }: SearchFieldProps) => {
  return <SearchField className={cx('group w-full', className)} {...props} />
}

const _SearchFieldInput = ({ className, ...props }: _InputProps) => {
  return (
    <Input
      className={cx(
        '[&::-webkit-search-cancel-button]:appearance-none',
        '[&::-webkit-search-decoration]:appearance-none',
        className,
      )}
      {...props}
    />
  )
}

const _SearchFieldClearButton = ({ className, ...props }: _IconButtonProps) => {
  return (
    <IconButton className={cx('group-empty:hidden', className)} {...props}>
      <X size="1em" />
    </IconButton>
  )
}

export {
  _SearchField as SearchField,
  _SearchFieldInput as SearchFieldInput,
  _SearchFieldClearButton as SearchFieldClearButton,
}
