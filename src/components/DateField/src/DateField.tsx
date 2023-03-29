import { type ClassValue } from 'class-variance-authority/dist/types'
import { Item } from 'react-aria-components/src/Collection'
import {
  DateField,
  DateInput,
  DateSegment,
} from 'react-aria-components/src/DateField'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _DateField = (props) => {
  return <DateField {...props} />
}

const _DateInput = (props) => {
  return <DateInput {...props} />
}

const _DateSegment = (props) => {
  return <DateSegment {...props} />
}

export {
  _DateField as DateField,
  _DateInput as DateInput,
  _DateSegment as DateSegment,
}
