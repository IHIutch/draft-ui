import { Button } from 'ui'

export default function Disabled() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="solid" isDisabled>
        Solid
      </Button>
      <Button variant="outline" isDisabled>
        Outline
      </Button>
      <Button variant="subtle" isDisabled>
        Subtle
      </Button>
      <Button variant="ghost" isDisabled>
        Ghost
      </Button>
      <Button variant="destructive" isDisabled>
        Destructive
      </Button>
      <Button variant="link" isDisabled>
        Link
      </Button>
    </div>
  )
}