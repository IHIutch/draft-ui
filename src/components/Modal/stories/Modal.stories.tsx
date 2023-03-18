import { Button } from '../../Button/src/button'
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '../src/Modal'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Modal',
  component: ModalContent,
} as ComponentMeta<typeof ModalContent>

export const Default: ComponentStory<typeof ModalContent> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <ModalOverlay isOpen={isOpen}>
        <ModalContent onOpenChange={setIsOpen} isOpen={isOpen} {...props}>
          <ModalHeader>Hello</ModalHeader>
          <ModalBody data-entering={undefined}>
            <p>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis.
            </p>
          </ModalBody>
          <ModalFooter className="flex">
            <Button className="ml-auto" onPress={() => setIsOpen(false)}>
              Close Modal
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

Default.argTypes = {
  className: { type: 'string' },
  size: {
    type: 'string',
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
  },
}

Default.args = {
  className: '',
  size: 'md',
}
