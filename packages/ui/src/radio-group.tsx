import * as React from 'react'

import { RadioGroup, type RadioGroupProps } from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const _RadioGroup = (props: RadioGroupProps) => {
  return <RadioGroup className="group" {...props} />
}

const _RadioGroupContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
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

export { _RadioGroup as RadioGroup, _RadioGroupContent as RadioGroupContent }
