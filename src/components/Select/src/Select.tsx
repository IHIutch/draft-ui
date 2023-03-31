import { Button, type _ButtonProps } from '../../Button/src/Button'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { type ReactNode } from 'react'
import { Item } from 'react-aria-components/src/Collection'
import { ListBox } from 'react-aria-components/src/ListBox'
import { Popover } from 'react-aria-components/src/Popover'
import { Select } from 'react-aria-components/src/Select'

const _Select = (props) => {
  return <Select {...props} />
}

export interface _SelectButtonProps extends _ButtonProps {
  icon?: ReactNode
  children?: ReactNode
}

const _SelectButton = ({ children, icon, ...props }: _SelectButtonProps) => {
  return (
    <Button className="flex gap-2" {...props}>
      <span>{children}</span>
      <span aria-hidden="true">{icon}</span>
    </Button>
  )
}

const _SelectContent = (props) => {
  return (
    <Popover>
      <ListBox {...props} />
    </Popover>
  )
}

const _SelectItem = (props) => {
  return <Item {...props} />
}

export {
  _Select as Select,
  _SelectButton as SelectButton,
  _SelectContent as SelectContent,
  _SelectItem as SelectItem,
}
