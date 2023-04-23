import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { type InputHTMLAttributes } from 'react'
import { Input } from 'react-aria-components'

const inputVariants = cva(
  'flex w-full border bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
  {
    variants: {
      validationState: {
        valid: 'border-slate-300',
        invalid: 'border-red-500',
      },
      size: {
        lg: 'h-12 rounded-lg px-4 text-lg',
        md: 'h-10 rounded-md px-4 text-base',
        sm: 'h-8 rounded px-3 text-sm',
        xs: 'h-6 rounded px-2 text-xs',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export interface _InputProps
  extends Omit<InputProps, 'className' | 'size'>,
    VariantProps<typeof inputVariants> {
  className?: ClassValue
}

const _Input = ({
  className = '',
  validationState,
  size,
  ...props
}: _InputProps) => {
  return (
    <Input
      className={inputVariants({
        size,
        validationState,
        className,
      })}
      {...props}
    />
  )
}

export { _Input as Input }
