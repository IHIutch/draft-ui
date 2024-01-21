import * as React from 'react'

import { X } from 'lucide-react'
import {
  Button,
  IconButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  type ModalContentProps,
} from 'ui'

type Size = Pick<ModalContentProps, 'size'>['size']
export default function Default() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalSize, setModalSize] = React.useState<Size>('md')

  const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const handlePress = (size: Size, open: boolean) => {
    setModalSize(size)
    setIsOpen(open)
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {sizes.map((size, idx) => (
          <Button onPress={() => handlePress(size, true)} key={idx}>
            Open {size}
          </Button>
        ))}
      </div>

      <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent size={modalSize}>
          <ModalHeader>Modal Title</ModalHeader>
          <IconButton
            className="absolute right-2 top-2"
            size="sm"
            variant="ghost"
            aria-label="close"
            onPress={() => setIsOpen(false)}
          >
            <X size="1em" />
          </IconButton>
          <ModalBody>
            <p className="text-black dark:text-white">
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis.
            </p>
          </ModalBody>
          <ModalFooter className="flex">
            <Button className="ml-auto" onPress={() => setIsOpen(false)}>
              Close
            </Button>
            <Button
              className="ml-2"
              variant="outline"
              onPress={() => setIsOpen(false)}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
