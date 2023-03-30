import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { type HTMLAttributes } from 'react'
import {
  RadioGroup,
  type RadioGroupProps,
} from 'react-aria-components/src/RadioGroup'

const _RadioGroup = (props: RadioGroupProps) => {
  return <RadioGroup className="group" {...props} />
}

const _RadioGroupContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        'flex gap-2',
        'group-[&[aria-orientation=horizontal]]:flex-row group-[&[aria-orientation=horizontal]]:gap-6',
        'group-[&[aria-orientation=vertical]]:flex-col group-[&[aria-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export { _RadioGroup as RadioGroup, _RadioGroupContent as RadioGroupContent }
