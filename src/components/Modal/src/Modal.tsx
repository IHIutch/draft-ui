import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { clsx } from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'
import { Dialog, DialogTrigger } from 'react-aria-components/src/Dialog'
import {
  Modal,
  ModalOverlay,
  type ModalRenderProps,
  type ModalOverlayProps,
} from 'react-aria-components/src/Modal'

const buttonVariants = cva('bg-white rounded mx-auto', {
  variants: {
    size: {
      full: 'w-full h-full',
      xl: 'w-[36rem] my-16',
      lg: 'w-[32rem] my-16',
      md: 'w-[28rem] my-16',
      sm: 'w-[24rem] my-16',
      xs: 'w-[20rem] my-16',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const _Modal = (props) => {
  return <DialogTrigger {...props} />
}

export interface _ModalProps
  extends ModalRenderProps,
    Omit<ModalOverlayProps, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: ClassValue
  children?: ReactNode
}

const _ModalContent = ({
  className,
  size,
  children,
  ...props
}: _ModalProps) => {
  return (
    <Modal
      className={buttonVariants({
        size,
        className: clsx(
          'data-[entering]:animate-in data-[entering]:zoom-in-75',
          // 'data-[exiting]:animate-out data-[exiting]:zoom-out-75 data-[exiting]:duration-1000', // This breaks the modal closing for some reason
          className
        ),
      })}
      {...props}
    >
      <Dialog>{children}</Dialog>
    </Modal>
  )
}

const _ModalOverlay = ({
  isDismissable = true,
  className,
  ...props
}: ModalOverlayProps) => {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={clsx(
        'h-[var(--visual-viewport-height)]',
        'fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-sm transition-all',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-out data-[exiting]:fade-out',
        className
      )}
      {...props}
    />
  )
}

const _ModalHeader = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <header
      {...props}
      className={clsx('py-4 px-6 text-xl font-semibold', className)}
    />
  )
}

const _ModalBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={clsx('py-2 px-6', className)} />
}

const _ModalFooter = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <footer {...props} className={clsx('py-4 px-6', className)} />
}

export {
  _Modal as Modal,
  _ModalContent as ModalContent,
  _ModalOverlay as ModalOverlay,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter,
}
