'use client'

import * as React from 'react'

import { cx } from 'cva'
import { CheckboxGroup, type CheckboxGroupProps } from 'react-aria-components'

interface _CheckboxGroupProps extends CheckboxGroupProps {
  orientation?: 'horizontal' | 'vertical'
}

const _CheckboxGroup = ({
  orientation = 'vertical',
  ...props
}: _CheckboxGroupProps) => {
  return (
    <CheckboxGroup
      data-orientation={orientation}
      className="group"
      {...props}
    />
  )
}

const _CheckboxGroupContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
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

export {
  _CheckboxGroup as CheckboxGroup,
  _CheckboxGroupContent as CheckboxGroupContent,
}
