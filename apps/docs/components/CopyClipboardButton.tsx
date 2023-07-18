'use client'

import { useState } from 'react'

import { Copy } from 'lucide-react'
import { IconButton, Tooltip, TooltipContent } from 'ui'

export default function CopyClipboardButton({ text }: { text: string }) {
  const [isOpen, setOpen] = useState(false)

  const handleCopyToClipboard = () => {
    setOpen(true)
    navigator.clipboard.writeText(text)

    setTimeout(() => {
      setOpen(false)
    }, 800)
  }
  return (
    <Tooltip isOpen={isOpen}>
      <TooltipContent>Code copied!</TooltipContent>
      <IconButton
        aria-label="Copy component source code"
        onPress={handleCopyToClipboard}
        variant="link"
        size="xs"
        className="text-white"
      >
        <Copy size="1em" />
      </IconButton>
    </Tooltip>
  )
}
