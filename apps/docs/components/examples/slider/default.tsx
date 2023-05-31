import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui'

export function SliderDefault() {
  return (
    <Slider defaultValue={30}>
      <SliderTrack>
        {(state) => (
          <>
            <SliderFilledTrack
              percentage={state.getValuePercent(state.values[0]) * 100}
            />
            <SliderThumb />
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}
