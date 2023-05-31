'use client'

import { Search, X } from 'lucide-react'
import { SearchField, type SearchFieldProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { type _ButtonProps } from './Button'
import { IconButton } from './IconButton'
import { Input, type _InputProps } from './Input'

const _SearchField = ({ className, ...props }: SearchFieldProps) => {
  return <SearchField className={cn('group w-full', className)} {...props} />
}

const _SearchFieldInput = ({ className, ...props }: _InputProps) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-500">
        <Search size="18" />
      </div>
      <Input
        className={cn(
          'pl-10',
          '[&::-webkit-search-cancel-button]:appearance-none',
          '[&::-webkit-search-decoration]:appearance-none',
          className
        )}
        {...props}
      />
    </div>
  )
}

const _SearchFieldClearButton = ({ className, ...props }: _ButtonProps) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center p-1">
      <IconButton
        className={cn('group-[[data-empty]]:hidden', className)}
        {...props}
      >
        <X size="1em" />
      </IconButton>
    </div>
  )
}

export {
  _SearchField as SearchField,
  _SearchFieldInput as SearchFieldInput,
  _SearchFieldClearButton as SearchFieldClearButton,
}
