'use client'

import { GridList, Item } from 'react-aria-components'

import { cn } from '../lib/utils'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _GridList = ({ className, ...props }) => {
  return (
    <GridList {...props} className={cn('flex flex-col gap-2', className)} />
  )
}

const _GridListItem = ({ className, ...props }) => {
  return <Item {...props} className={cn('', className)} />
}

export { _GridList as GridList, _GridListItem as GridListItem }
