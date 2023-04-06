import { type ClassValue } from 'class-variance-authority/dist/types'
import { Checkbox } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Checkbox = (props) => {
  return (
    <Checkbox {...props}>
      <div>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {props.children}
    </Checkbox>
  )
}

export { _Checkbox as Checkbox }
