import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import { Checkbox, type CheckboxProps } from 'react-aria-components'

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
    'flex items-center justify-center rounded border-2 border-slate-300 text-white transition-all',
    'group-[[data-selected=true]]:border-blue-500 group-[[data-selected=true]]:bg-blue-500',
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
  extends Omit<CheckboxProps, 'className' | 'children'>,
    VariantProps<typeof checkboxVariants>,
    VariantProps<typeof checkboxInnerVariants> {
  className?: ClassValue
  children?: ReactNode
}

const _Checkbox = ({ className, size, children, ...props }: _CheckboxProps) => {
  return (
    // <div className="inline-flex">
    <Checkbox
      className={checkboxVariants({
        size,
        className,
      })}
      {...props}
    >
      <>
        <div className={checkboxInnerVariants({ size })}>
          <svg
            viewBox="0 0 12 10"
            className={clsx(
              'hidden fill-none stroke-current stroke-2 opacity-0 transition-opacity',
              'group-[[data-selected]]:block group-[[data-selected]]:opacity-100'
            )}
            style={{ strokeDasharray: '44' }}
          >
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
        <div className="inline-flex group-[[data-disabled]]:opacity-40">
          {children}
        </div>
      </>
    </Checkbox>
    // </div>
  )
}

export { _Checkbox as Checkbox }
