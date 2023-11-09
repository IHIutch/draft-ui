import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Vertical() {
  return (
    <Slider orientation="vertical" defaultValue={30}>
      <Label>Vertical Slider</Label>
      <SliderTrack className="h-72">
        {({ state }) => (
          <>
            <SliderFilledTrack
              orientation="vertical"
              percentage={state.getValuePercent(state.values[0]) * 100}
            />
            <SliderThumb />
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}