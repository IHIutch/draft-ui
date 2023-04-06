import { type ClassValue } from 'class-variance-authority/dist/types'
import { Breadcrumbs, Item } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Breadcrumbs = (props) => {
  return <Breadcrumbs {...props} />
}

const _BreadcrumbItem = (props) => {
  return <Item {...props} />
}

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem }
