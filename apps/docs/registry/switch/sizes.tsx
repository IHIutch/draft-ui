import { Switch, SwitchIndicator } from 'ui'

export default function Default() {
  return (
    <div className="flex flex-col gap-4">
      <Switch>
        <SwitchIndicator size="sm" />
      </Switch>
      <Switch>
        <SwitchIndicator size="md" />
      </Switch>
      <Switch>
        <SwitchIndicator size="lg" />
      </Switch>
    </div>
  )
}