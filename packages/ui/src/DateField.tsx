'use client'

import {
  DateField,
  type DateFieldProps,
  type DateValue,
} from 'react-aria-components'

const _DateField = <T extends DateValue>(props: DateFieldProps<T>) => {
  return <DateField {...props} />
}

export { _DateField as DateField }
