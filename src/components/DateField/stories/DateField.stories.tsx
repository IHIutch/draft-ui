import { Label } from '../../Label/src/Label'
import { DateField, DateInput, DateSegment } from '../src/DateField'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'DateField',
  component: DateField,
} as ComponentMeta<typeof DateField>

export const Default: ComponentStory<typeof DateField> = (props) => (
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
