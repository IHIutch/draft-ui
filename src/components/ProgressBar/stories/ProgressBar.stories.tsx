import { Label } from '../../Label/src/Label'
import { ProgressBar } from '../src/ProgressBar'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStory<typeof ProgressBar> = (props) => (
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
