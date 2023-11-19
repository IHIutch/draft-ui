import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Vertical() {
  return (
    <Slider orientation="vertical" defaultValue={30}>
      <Label>Vertical Slider</Label>
      <SliderTrack className="h-72">
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
