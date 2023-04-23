import { type Meta, type StoryObj } from '@storybook/react'
import { DateField, DateInput, DateSegment } from 'ui'

const meta: Meta<typeof DateInput> = {
  title: 'DateInput',
  component: DateInput,
}

export default meta

export const Default: StoryObj<typeof DateInput> = (props) => (
  <DateField>
    <DateInput {...props}>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
  </DateField>
)

Default.argTypes = {
  validationState: {
    type: 'string',
    control: 'radio',
    options: ['valid', 'invalid'],
  },
  size: {
    type: 'string',
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
}

Default.args = {
  validationState: 'valid',
  size: 'md',
}
