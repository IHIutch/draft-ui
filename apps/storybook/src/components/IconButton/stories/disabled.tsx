import { AlertCircle } from 'lucide-react'
import { IconButton } from 'ui'

export default function Disabled() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <IconButton variant="solid" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton variant="outline" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton variant="subtle" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton variant="ghost" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton variant="destructive" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton variant="link" aria-label="alert" isDisabled>
        <AlertCircle size="1em" />
      </IconButton>
    </div>
  )
}
