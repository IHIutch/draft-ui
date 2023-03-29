import { type ClassValue } from 'class-variance-authority/dist/types'
import {
  Menu,
  type MenuItemRenderProps,
  type MenuProps,
} from 'react-aria-components/src/Menu'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Menu = (props: any) => {
  return <div {...props} />
}

const _MenuItem = (props: any) => {
  return <div {...props} />
}

export { _Menu as Menu, _MenuItem as MenuItem }
