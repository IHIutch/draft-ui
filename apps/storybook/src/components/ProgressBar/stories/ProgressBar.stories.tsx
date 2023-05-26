import {
  Label,
  ProgressBar,
  ProgressBarFilledTrack,
  ProgressBarTrack,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
}

export default meta

export const Default: StoryObj<typeof ProgressBar> = (props) => (
  <ProgressBar
    value={props.value}
    minValue={props.minValue}
    maxValue={props.maxValue}
  >
    {({ percentage }) => (
      <>
        <Label>Progress</Label>
        <ProgressBarTrack>
          <ProgressBarFilledTrack percentage={percentage} />
        </ProgressBarTrack>
      </>
    )}
  </ProgressBar>
)

Default.argTypes = {
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  value: { type: 'number' },
}

Default.args = {
  value: 75,
  minValue: 0,
  maxValue: 100,
}
