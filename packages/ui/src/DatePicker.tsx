import { type ClassValue } from 'class-variance-authority/dist/types'
import { DatePicker, Dialog, Popover } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _DatePicker = (props) => {
  return <DatePicker {...props} />
}

const _DatePickerContent = (props) => {
  return (
    <Popover className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <Dialog {...props} />
    </Popover>
  )
}

export { _DatePicker as DatePicker, _DatePickerContent as DatePickerContent }
