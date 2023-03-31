import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { type InputHTMLAttributes } from 'react'
import { Input } from 'react-aria-components/src/Input'

const inputVariants = cva(
  [
    'flex w-full border border-slate-300 bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
  ],
  {
    variants: {
      validationState: {
        valid: '',
        invalid: 'border-2 border-red-500',
      },
      size: {
        lg: 'h-12 px-4 rounded-lg text-lg',
        md: 'h-10 px-4 rounded-md text-md',
        sm: 'h-8 px-3 rounded text-sm',
        xs: 'h-6 px-2 rounded-sm text-xs',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

type InputProps = InputHTMLAttributes<HTMLInputElement>

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
