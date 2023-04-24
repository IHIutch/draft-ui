import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { SearchField } from 'react-aria-components'

import { type _ButtonProps } from './Button'
import { IconButton } from './IconButton'
import { Input, type _InputProps } from './Input'

const _SearchField = (props) => {
  return <SearchField className="group" {...props} />
}

const _SearchFieldInput = ({ className, ...props }: _InputProps) => {
  return (
    <Input
      className={clsx(
        '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none',
        className
      )}
      {...props}
    />
  )
}

const _SearchFieldClearButton = ({ className, ...props }: _ButtonProps) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center p-1">
      <IconButton
        className={clsx('group-[&[data-empty]]:hidden', className)}
        {...props}
      />
    </div>
  )
}

export {
  _SearchField as SearchField,
  _SearchFieldInput as SearchFieldInput,
  _SearchFieldClearButton as SearchFieldClearButton,
}
