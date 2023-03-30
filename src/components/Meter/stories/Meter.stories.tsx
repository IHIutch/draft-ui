import { Label } from '../../Label/src/Label'
import { Meter } from '../src/Meter'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Meter',
  component: Meter,
} as ComponentMeta<typeof Meter>

export const Default: ComponentStory<typeof Meter> = (props) => (
  <Meter value={100} minValue={props.minValue} maxValue={props.maxValue}>
    {({ percentage, valueText }) => (
      <>
        <Label>Meter Label</Label>
        <span className="value">{valueText}</span>
        <div className="bar">
          <div className="fill" style={{ width: percentage + '%' }} />
        </div>
      </>
    )}
  </Meter>
)

Default.argTypes = {
  className: { type: 'string' },
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  value: { type: 'number' },
}

Default.args = {
  className: '',
  minValue: 50,
  maxValue: 150,
}
