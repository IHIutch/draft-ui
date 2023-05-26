import React from 'react'

import { Copy } from 'lucide-react'

import { IconButton } from './ui'

export default function CopyClipboardButton({ text }: { text: string }) {
  const handleCopyToClipboard = () => {
    // setIsToolTipVisible(true)
    navigator.clipboard.writeText(text)

    // setTimeout(() => {
    //   setIsToolTipVisible(false)
    // }, 800)
  }
  return (
    <IconButton
      aria-label="Copy component source code"
      onPress={handleCopyToClipboard}
      variant="link"
      size="xs"
      className="text-white"
    >
      <Copy size="1em" />
    </IconButton>
  )
}
