import {
  ProgressBar,
  ProgressBarFilledTrack,
  ProgressBarTrack,
} from '@/components/ui'

export function ProgressBarDefault() {
  return (
    <ProgressBar value={75} minValue={0} maxValue={100}>
      {({ percentage }) => (
        <>
          <ProgressBarTrack>
            <ProgressBarFilledTrack percentage={percentage} />
          </ProgressBarTrack>
        </>
      )}
    </ProgressBar>
  )
}
