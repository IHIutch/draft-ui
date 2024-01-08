import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const RadioGroup = (props: ReactAria.RadioGroupProps) => {
  return <ReactAria.RadioGroup className="group" {...props} />
}

export const RadioGroupContent = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      className={cx(
        'flex flex-wrap gap-x-6 gap-y-2',
        'group-orientation-horizontal:flex-row',
        'group-orientation-vertical:flex-col',
      )}
      {...props}
    />
  )
}
