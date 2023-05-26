'use client'

import { type HTMLAttributes } from 'react'

import clsx from 'clsx'
import { RadioGroup, type RadioGroupProps } from 'react-aria-components'

const _RadioGroup = (props: RadioGroupProps) => {
  return <RadioGroup className="group" {...props} />
}

const _RadioGroupContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        'flex',
        'group-[[aria-orientation=horizontal]]:flex-row group-[[aria-orientation=horizontal]]:gap-6',
        'group-[[aria-orientation=vertical]]:flex-col group-[[aria-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export { _RadioGroup as RadioGroup, _RadioGroupContent as RadioGroupContent }
