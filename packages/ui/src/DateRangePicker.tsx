import { DateRangePicker, Dialog, Popover } from 'react-aria-components'

import { cn } from '../lib/utils'

const _DateRangePicker = (props) => {
  return <DateRangePicker {...props} />
}

const _DateRangePickerContent = (props) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2'
      )}
    >
      <Dialog
        className={cn(
          'rounded-lg border border-slate-200 bg-white p-3 shadow-md'
        )}
        {...props}
      />
    </Popover>
  )
}

export {
  _DateRangePicker as DateRangePicker,
  _DateRangePickerContent as DateRangePickerContent,
}
