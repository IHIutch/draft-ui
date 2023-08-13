import { Button, Tooltip, TooltipContent } from 'ui'

export default function Default() {
  return (
    <Tooltip>
      <Button size="sm" variant="outline">
        Hover Me
      </Button>
      <TooltipContent>Hello!</TooltipContent>
    </Tooltip>
  )
}
