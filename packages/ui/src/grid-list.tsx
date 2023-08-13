'use client'

import {
  GridList,
  Item,
  type GridListProps,
  type ItemProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _GridList = <T extends object>({
  className,
  ...props
}: GridListProps<T>) => {
  return (
    <GridList className={cn('flex flex-col gap-2', className)} {...props} />
  )
}

const _GridListItem = (props: ItemProps) => {
  return <Item {...props} />
}

export { _GridList as GridList, _GridListItem as GridListItem }
