import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Default() {
  return (
    <Slider defaultValue={30} minValue={25} maxValue={200}>
      <Label>Opacity</Label>
      <SliderTrack>
        {({ state }) => (
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
  )
}