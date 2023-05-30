import { Meter, MeterFilledTrack, MeterTrack } from '@/components/ui'

export function MeterDefault() {
  return (
    <Meter value={75} minValue={0} maxValue={100}>
      {({ percentage }) => (
        <>
          <MeterTrack>
            <MeterFilledTrack percentage={percentage} />
          </MeterTrack>
        </>
      )}
    </Meter>
  )
}
