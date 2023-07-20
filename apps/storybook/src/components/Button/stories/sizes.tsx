import { Button } from 'ui'

export default function Sizes() {
  return (
    <div className="flex gap-2">
      <Button size="xs">X Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
