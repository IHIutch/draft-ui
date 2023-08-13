import { AlertCircle } from 'lucide-react'
import { IconButton } from 'ui'

export default function Theme() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <IconButton aria-label="alert" variant="solid">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" variant="outline">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" variant="subtle">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" variant="ghost">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" variant="destructive">
        <AlertCircle size="1em" />
      </IconButton>
      <IconButton aria-label="alert" variant="link">
        <AlertCircle size="1em" />
      </IconButton>
    </div>
  )
}