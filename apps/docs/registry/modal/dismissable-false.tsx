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
} from 'ui'

export default function DismissableFalse() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <ModalOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
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