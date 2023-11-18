import { Label, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from 'ui'

export default function Vertical() {
  return (
    <Slider orientation="vertical" defaultValue={30} className="h-52">
      <Label>Vertical Slider</Label>
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