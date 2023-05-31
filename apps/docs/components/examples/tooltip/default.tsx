import { Button, Tooltip, TooltipContent } from '@/components/ui'

export function TooltipDefault() {
  return (
    <Tooltip>
      <Button size="sm">Hover Me</Button>
      <TooltipContent>Hello!</TooltipContent>
    </Tooltip>
  )
}
