import { type TooltipProps } from 'react-aria-components'
import { Button, Tooltip, TooltipContent } from 'ui'

type Placement = Pick<TooltipProps, 'placement'>['placement']
export default function Placement() {
  const placements: Placement[] = [
    'bottom',
    'bottom left',
    'bottom right',
    'bottom start',
    'bottom end',
    'top',
    'top left',
    'top right',
    'top start',
    'top end',
    'left',
    'left top',
    'left bottom',
    'start',
    'start top',
    'start bottom',
    'right',
    'right top',
    'right bottom',
    'end',
    'end top',
    'end bottom',
  ]
  return (
    <div className="grid grid-cols-4 gap-4">
      {placements.map((placement, idx) => (
        <Tooltip key={idx}>
          <Button className="mx-auto" size="sm" variant="outline">
            {placement}
          </Button>
          <TooltipContent placement={placement}>Hello!</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
