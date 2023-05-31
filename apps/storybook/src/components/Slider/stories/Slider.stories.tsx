import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
}

export default meta

export const Default: StoryObj<typeof Slider> = {
  argTypes: {
    orientation: {
      type: 'string',
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
  render: (props) => (
    <Slider defaultValue={30} orientation={props.orientation} className="h-32">
      <Label>Opacity</Label>
      <SliderTrack>
        {(state) => (
          <>
            <SliderFilledTrack
              percentage={state.getValuePercent(state.values[0]) * 100}
              orientation={state.orientation}
            />
            <SliderThumb />
          </>
        )}
      </SliderTrack>
    </Slider>
  ),
}
