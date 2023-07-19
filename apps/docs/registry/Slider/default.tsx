import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Default() {
  return (
    <Slider defaultValue={30} className="h-32">
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
  )
}