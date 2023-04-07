import { type StoryObj, type Meta } from '@storybook/react'
import { Label } from 'ui'
import { DateField, DateInput, DateSegment } from 'ui'

const meta: Meta<typeof DateField> = {
  title: 'DateField',
  component: DateField,
}

export default meta

export const Default: StoryObj<typeof DateField> = (props) => (
  <DateField>
    <Label>Date Label</Label>
    <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
  </DateField>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
