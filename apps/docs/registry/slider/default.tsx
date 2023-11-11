import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Default() {
  return (
    <Slider defaultValue={30}>
      <Label>Opacity</Label>
      <SliderTrack>
        {({ state }) => (
          <>
            <SliderFilledTrack
              percentage={state.getThumbPercent(0) * 100}
              orientation={state.orientation}
            />
            <SliderThumb />
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}