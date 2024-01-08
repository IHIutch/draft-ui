import { X } from 'lucide-react'
import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

import { IconButton, type IconButtonProps } from './icon-button'
import { Input, type InputProps } from './input'

export const SearchField = ({
  className,
  ...props
}: ReactAria.SearchFieldProps) => {
  return (
    <ReactAria.SearchField
      className={cx('group w-full', className)}
      {...props}
    />
  )
}

export const SearchFieldInput = ({ className, ...props }: InputProps) => {
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

export const SearchFieldClearButton = ({
  className,
  ...props
}: IconButtonProps) => {
  return (
    <IconButton className={cx('group-empty:hidden', className)} {...props}>
      <X size="1em" />
    </IconButton>
  )
}
