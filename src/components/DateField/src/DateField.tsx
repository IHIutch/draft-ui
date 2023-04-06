import { type ClassValue } from 'class-variance-authority/dist/types'
import { DateField, DateInput, DateSegment } from 'react-aria-components'

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
