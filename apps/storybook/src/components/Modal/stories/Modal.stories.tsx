import { useState } from 'react'

import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  type _ModalContentProps,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof ModalContent> = {
  title: 'Modal',
  component: ModalContent,
}

export default meta

export const Default: StoryObj<typeof ModalContent> = {
  argTypes: {
    size: {
      type: 'string',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  },
  args: {
    size: 'md',
  },
  render: (props) => <ModalStory {...props} />,
}

const ModalStory = (props: _ModalContentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <ModalOverlay isDismissable isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent {...props}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis.
            </p>
          </ModalBody>
          <ModalFooter className="flex">
            <Button
              autoFocus
              className="ml-auto"
              onPress={() => setIsOpen(false)}
            >
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
