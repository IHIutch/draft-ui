import { NumberField } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import MobileStepperStory from './stories/with-mobile-stepper'
import StepperStory from './stories/with-stepper'

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
}

export default meta

export const Default = () => <DefaultStory />
export const Stepper = () => <StepperStory />
export const MobileStepper = () => <MobileStepperStory />
export const Disabled = () => <DisabledStory />
