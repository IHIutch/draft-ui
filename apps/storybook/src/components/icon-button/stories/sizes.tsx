import { AlertCircle } from 'lucide-react'
import { IconButton } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <IconButton aria-label="alert" size="xs">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" size="sm">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" size="md">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" size="lg">
        <AlertCircle size="1em" />
      </IconButton>
    </div>
  )
}
