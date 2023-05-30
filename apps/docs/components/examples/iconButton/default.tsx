import { AlertCircle } from 'lucide-react'

import { IconButton } from '@/components/ui'

export function IconButtonDefault() {
  return (
    <IconButton aria-label="alert">
      <AlertCircle size="1em" />
    </IconButton>
  )
}
