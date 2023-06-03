import { DateField, DateInput, DateInputGroup, DateSegment } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof DateInputGroup> = {
  title: 'DateInput',
  component: DateInputGroup,
}

export default meta

export const Default: StoryObj<typeof DateInputGroup> = {
  argTypes: {
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
  },
  args: {
    validationState: 'valid',
    size: 'md',
  },
  render: (props) => (
    <DateField>
      <DateInputGroup {...props}>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputGroup>
    </DateField>
  ),
}
