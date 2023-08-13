'use client'

import { X } from 'lucide-react'
import { SearchField, type SearchFieldProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { type _ButtonProps } from './button'
import { IconButton, type _IconButtonProps } from './icon-button'
import { Input, type _InputProps } from './input'

const _SearchField = ({ className, ...props }: SearchFieldProps) => {
  return <SearchField className={cn('group w-full', className)} {...props} />
}

const _SearchFieldInput = ({ className, ...props }: _InputProps) => {
  return (
    <Input
      className={cn(
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
    <IconButton
      className={cn('group-[[data-empty]]:hidden', className)}
      {...props}
    >
      <X size="1em" />
    </IconButton>
  )
}

export {
  _SearchField as SearchField,
  _SearchFieldInput as SearchFieldInput,
  _SearchFieldClearButton as SearchFieldClearButton,
}
