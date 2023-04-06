import { type ClassValue } from 'class-variance-authority/dist/types'
import { Item, ComboBox } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _ComboBox = (props) => {
  return <ComboBox {...props} />
}

const _ComboBoxItem = (props) => {
  return <Item {...props} />
}

export { _ComboBox as ComboBox, _ComboBoxItem as ComboBoxItem }
