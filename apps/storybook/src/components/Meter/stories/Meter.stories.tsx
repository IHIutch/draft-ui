import { Label, Meter, MeterFilledTrack, MeterTrack } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

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
        <MeterTrack>
          <MeterFilledTrack percentage={percentage} />
        </MeterTrack>
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
