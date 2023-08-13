import { Button } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button size="xs">X Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
