import * as React from 'react'

import { type VariantProps } from 'cva'
import * as ReactAria from 'react-aria-components'

import { cva, cx } from '../lib/cva.config'

export const modalVariants = cva({
  base: [
    'mx-auto w-full flex-col rounded bg-white outline-none dark:bg-slate-800',
    // Entering
    'entering:animate-in entering:zoom-in-95',
    // Exiting
    'exiting:animate-in exiting:zoom-in-95 exiting:direction-reverse',
  ],
  variants: {
    size: {
      full: 'h-full',
      xl: 'my-16 max-w-[36rem]',
      lg: 'my-16 max-w-[32rem]',
      md: 'my-16 max-w-[28rem]',
      sm: 'my-16 max-w-[24rem]',
      xs: 'my-16 max-w-[20rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Modal = (props: ReactAria.DialogTriggerProps) => {
  return <ReactAria.DialogTrigger {...props} />
}

export interface ModalContentProps
  extends ReactAria.ModalOverlayProps,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
}

export const ModalContent = ({
  className,
  size,
  children,
  ...props
}: ModalContentProps) => {
  return (
    <ReactAria.Modal
      className={cx(
        modalVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <ReactAria.Dialog className="relative flex h-full flex-col outline-none">
        {children}
      </ReactAria.Dialog>
    </ReactAria.Modal>
  )
}

export const ModalOverlay = ({
  isDismissable = true,
  className,
  ...props
}: ReactAria.ModalOverlayProps) => {
  return (
    <ReactAria.ModalOverlay
      isDismissable={isDismissable}
      className={cx(
        'h-[--visual-viewport-height]',
        'fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-sm transition-all',
        // Entering
        'entering:duration-75 entering:animate-in entering:fade-in',
        // Exiting
        'exiting:animate-in exiting:fade-in exiting:direction-reverse',
        className,
      )}
      {...props}
    />
  )
}

export const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ReactAria.Heading
      slot="title"
      className={cx(
        'shrink-0 px-6 py-4 text-xl font-semibold text-black dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

export const ModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('flex-1 px-6 py-2', className)} {...props} />
}

export const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return <footer className={cx('px-6 py-4', className)} {...props} />
}
