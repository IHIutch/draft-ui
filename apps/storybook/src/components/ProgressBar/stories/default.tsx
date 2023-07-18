import {
  Label,
  ProgressBar,
  ProgressBarFilledTrack,
  ProgressBarTrack,
} from 'ui'

export default function Default() {
  return (
    <ProgressBar value={75} minValue={0} maxValue={100}>
      {({ percentage }) => (
        <>
          <Label>Progress</Label>
          <ProgressBarTrack>
            <ProgressBarFilledTrack percentage={percentage} />
          </ProgressBarTrack>
        </>
      )}
    </ProgressBar>
  )
}
