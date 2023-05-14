import { type HTMLAttributes } from 'react'

interface ComponentSourceProps extends HTMLAttributes<HTMLDivElement> {
  src: string
}

export function ComponentSource({ children }: ComponentSourceProps) {
  return (
    <div>
      <h2 className="font-bold">Component Source</h2>
      {children}
    </div>
  )
}
