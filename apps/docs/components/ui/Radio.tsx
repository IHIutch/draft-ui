'use client'

import { type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Radio, type RadioProps } from 'react-aria-components'

const radioVariants = cva(
  [
    'group flex cursor-pointer flex-row items-center gap-2',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        lg: 'text-lg',
        md: 'text-base',
        sm: 'text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const radioInnerVariants = cva(
  [
    'flex items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-colors',
    'before:block before:h-1/2 before:w-1/2 before:scale-0 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[""]',
    'group-[[data-selected=true]]:border-black group-[[data-selected=true]]:bg-black group-[[data-selected=true]]:text-white',
    'group-[[data-selected=true]]:before:scale-100',
    'group-[[data-disabled]]:border-slate-100 group-[[data-selected=true][data-disabled]]:border-slate-100 group-[[data-selected=true][data-disabled]]:bg-slate-100 group-[[data-selected=true][data-disabled]]:before:bg-slate-400',
  ],
  {
    variants: {
      size: {
        lg: 'h-5 w-5',
        md: 'h-4 w-4',
        sm: 'h-3 w-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface _RadioProps
  extends Omit<RadioProps, 'className'>,
    VariantProps<typeof radioVariants>,
    VariantProps<typeof radioInnerVariants> {
  className?: string
  children?: ReactNode
}

const _Radio = ({ className, size, children, ...props }: _RadioProps) => {
  return (
    <Radio
      className={radioVariants({
        size,
        className,
      })}
      {...props}
    >
      <>
        <div className={radioInnerVariants({ size })} />
        <div className="group-[[data-disabled]]:opacity-40">{children}</div>
      </>
    </Radio>
  )
}

export { _Radio as Radio }
