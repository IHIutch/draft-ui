import * as React from 'react'

import { X } from 'lucide-react'
import {
  Button,
  IconButton,
  Input,
  Label,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  TextField,
} from 'ui'

export default function SetAutofocus() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
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
          <ModalBody className="flex flex-col gap-4">
            <TextField autoFocus>
              <Label>First Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name</Label>
              <Input />
            </TextField>
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