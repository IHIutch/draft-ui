import { Label, Meter, MeterFilledTrack, MeterTrack } from 'ui'

export default function Default() {
  return (
    <Meter value={75} minValue={0} maxValue={100}>
      {({ percentage }) => (
        <>
          <Label>Meter Label</Label>
          <MeterTrack>
            <MeterFilledTrack percentage={percentage} />
          </MeterTrack>
        </>
      )}
    </Meter>
  )
}
