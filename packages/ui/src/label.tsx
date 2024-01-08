import { Label, type LabelProps } from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const _Label = ({ className, ...props }: LabelProps) => {
  return (
    <Label
      className={cx(
        'mb-2 mr-3 block font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-40 dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

export { _Label as Label }
