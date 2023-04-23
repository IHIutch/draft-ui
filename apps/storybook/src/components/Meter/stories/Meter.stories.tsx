import { type Meta, type StoryObj } from '@storybook/react'
import { Label, Meter } from 'ui'

const meta: Meta<typeof Meter> = {
  title: 'Meter',
  component: Meter,
}

export default meta

export const Default: StoryObj<typeof Meter> = (props) => (
  <Meter
    value={props.value}
    minValue={props.minValue}
    maxValue={props.maxValue}
  >
    {({ percentage, valueText }) => (
      <>
        <Label>Meter Label</Label>
        <span>{valueText}</span>
        <div>
          <div style={{ width: percentage + '%' }} />
        </div>
      </>
    )}
  </Meter>
)

Default.argTypes = {
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  value: { type: 'number' },
}

Default.args = {
  value: 100,
  minValue: 50,
  maxValue: 150,
}
