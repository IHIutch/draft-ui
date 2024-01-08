import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const GridList = <T extends object>({
  className,
  ...props
}: ReactAria.GridListProps<T>) => {
  return (
    <ReactAria.GridList
      className={cx('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

export const GridListItem = (props: ReactAria.GridListItemProps) => {
  return <ReactAria.GridListItem {...props} />
}
