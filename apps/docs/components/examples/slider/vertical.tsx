import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui'

export function SliderVertical() {
  return (
    <Slider orientation="vertical" defaultValue={30} className="h-72">
      <SliderTrack>
        {(state) => (
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
