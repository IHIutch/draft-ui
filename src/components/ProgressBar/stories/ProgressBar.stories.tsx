import { Label } from '../../Label/src/Label'
import { ProgressBar } from '../src/ProgressBar'
import { type StoryObj, type Meta } from '@storybook/react'

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
    {({ percentage, valueText }) => (
      <>
        <Label>Progress</Label>
        <span>{valueText}</span>
        <div>
          <div style={{ width: percentage + '%' }} />
        </div>
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
  value: 100,
  minValue: 50,
  maxValue: 150,
}
