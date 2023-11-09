'use client'

import * as React from 'react'

import { cva, cx, type VariantProps } from 'cva'
import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  type DialogTriggerProps,
  type ModalOverlayProps,
} from 'react-aria-components'

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

const _Modal = (props: DialogTriggerProps) => {
  return <DialogTrigger {...props} />
}

export interface _ModalContentProps
  extends ModalOverlayProps,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: React.ReactNode
}

const _ModalContent = ({
  className,
  size,
  children,
  ...props
}: _ModalContentProps) => {
  return (
    <Modal
      className={cx(
        modalVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <Dialog className="relative flex h-full flex-col outline-none">
        {children}
      </Dialog>
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

const _ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Heading
      slot="title"
      className={cx(
        'shrink-0 px-6 py-4 text-xl font-semibold text-black dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

const _ModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('flex-1 px-6 py-2', className)} {...props} />
}

const _ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return <footer className={cx('px-6 py-4', className)} {...props} />
}

export {
  _Modal as Modal,
  _ModalContent as ModalContent,
  _ModalOverlay as ModalOverlay,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter,
}
