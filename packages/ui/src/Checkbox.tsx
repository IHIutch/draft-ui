'use client'

import { type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Checkbox, type CheckboxProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const checkboxVariants = cva(
  [
    'group inline-flex cursor-pointer items-center gap-2',
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

const checkboxInnerVariants = cva(
  [
    'flex items-center justify-center rounded border-2 border-slate-300 bg-white text-white transition-colors',
    'group-[[data-selected=true]]:border-black group-[[data-selected=true]]:bg-black',
    'group-[[data-disabled]]:cursor-not-allowed group-[[data-disabled]]:border-slate-100 group-[[data-disabled]]:bg-slate-100',
    'group-[[data-selected=true][data-disabled]]:border-slate-100 group-[[data-selected=true][data-disabled]]:bg-slate-100 group-[[data-selected=true][data-disabled]]:text-slate-400',
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

export interface _CheckboxProps
  extends CheckboxProps,
    VariantProps<typeof checkboxVariants>,
    VariantProps<typeof checkboxInnerVariants> {
  className?: string
  children?: ReactNode
}

const _Checkbox = ({ className, size, children, ...props }: _CheckboxProps) => {
  return (
    <Checkbox
      className={cn(
        checkboxVariants({
          size,
          className,
        })
      )}
      {...props}
    >
      <>
        <div className={cn(checkboxInnerVariants({ size }))}>
          <svg
            viewBox="0 0 12 10"
            className={cn(
              'fill-none stroke-current stroke-2 transition-all duration-300',
              'group-[[data-selected]]:block',
              '[stroke-dasharray:22] [stroke-dashoffset:66] group-[[data-selected]]:[stroke-dasharray:28]'
            )}
          >
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
        <div className="group-[[data-disabled]]:opacity-40">{children}</div>
      </>
    </Checkbox>
  )
}

export { _Checkbox as Checkbox }
