import { type ClassValue } from 'class-variance-authority/dist/types'
import { Breadcrumbs } from 'react-aria-components/src/Breadcrumbs'
import { Item } from 'react-aria-components/src/Collection'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Breadcrumbs = (props: any) => {
  return <Breadcrumbs {...props} />
}

const _BreadcrumbItem = (props: any) => {
  return <Item {...props} />
}

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem }
