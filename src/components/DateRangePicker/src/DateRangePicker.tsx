import { Button, type _ButtonProps } from '../../Button/src/Button'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { Item, Section } from 'react-aria-components/src/Collection'
import { DatePicker } from 'react-aria-components/src/DatePicker'
import { Dialog } from 'react-aria-components/src/Dialog'
import { Popover } from 'react-aria-components/src/Popover'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _DatePicker = (props) => {
  return <DatePicker {...props} />
}

const _DatePickerContent = (props) => {
  return (
    <Popover>
      <Dialog {...props} />
    </Popover>
  )
}

export { _DatePicker as DatePicker, _DatePickerContent as DatePickerContent }
