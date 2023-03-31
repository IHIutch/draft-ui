import { Label } from '../../Label/src/Label'
import {
  Slider,
  SliderFilledTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from '../src/Slider'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

export const Default: ComponentStory<typeof Slider> = (props) => (
  <Slider defaultValue={30} orientation={props.orientation} className="h-32">
    <Label>Opacity</Label>
    <SliderTrack>
      {(state) => (
        <>
          <SliderFilledTrack
            pctFilled={state.getValuePercent(state.values[0]) * 100}
            orientation={state.orientation}
          />
          <SliderThumb>
            <SliderOutput />
          </SliderThumb>
        </>
      )}
    </SliderTrack>
  </Slider>
)

Default.argTypes = {
  orientation: {
    type: 'string',
    control: 'radio',
    options: ['vertical', 'horizontal'],
  },
}

Default.args = {
  orientation: 'horizontal',
}
