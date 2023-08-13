import { Switch, SwitchIndicator } from 'ui'

export default function Alignment() {
  return (
    <div className="flex flex-col gap-4">
      <Switch>
        <SwitchIndicator />
        I&apos;m on the right
      </Switch>
      <Switch>
        I&apos;m on the left
        <SwitchIndicator />
      </Switch>
    </div>
  )
}