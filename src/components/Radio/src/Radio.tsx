import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { Radio, type RadioProps } from 'react-aria-components'

const radioVariants = cva('group flex flex-row items-center gap-2', {
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const radioInnerVariants = cva(
  [
    'flex items-center justify-center rounded-full border-2 border-slate-300',
    'group-[&[data-selected=true]]:border-blue-500 group-[&[data-selected=true]]:bg-blue-500 group-[&[data-selected=true]]:text-white',
    'before: before:block before:h-1/2 before:w-1/2 before:rounded-full before:bg-white before:content-[""]',
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
  className?: ClassValue
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
        <div className={radioInnerVariants({ size })}></div>
        {children}
      </>
    </Radio>
  )
}

export { _Radio as Radio }
