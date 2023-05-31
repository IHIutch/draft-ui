import { Label, Meter, MeterFilledTrack, MeterTrack } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Meter> = {
  title: 'Meter',
  component: Meter,
}

export default meta

export const Default: StoryObj<typeof Meter> = {
  argTypes: {
    minValue: { type: 'number' },
    maxValue: { type: 'number' },
    value: { type: 'number' },
  },
  args: {
    value: 100,
    minValue: 50,
    maxValue: 150,
  },
  render: (props) => (
    <Meter
      value={props.value}
      minValue={props.minValue}
      maxValue={props.maxValue}
    >
      {({ percentage }) => (
        <>
          <Label>Meter Label</Label>
          <MeterTrack>
            <MeterFilledTrack percentage={percentage} />
          </MeterTrack>
        </>
      )}
    </Meter>
  ),
}
