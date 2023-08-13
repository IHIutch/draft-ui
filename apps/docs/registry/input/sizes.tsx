import { Input } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <Input size="xs" />
      <Input size="sm" />
      <Input size="md" />
      <Input size="lg" />
    </div>
  )
}