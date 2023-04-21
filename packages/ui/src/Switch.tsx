import clsx from 'clsx'
import { Switch } from 'react-aria-components'

const _Switch = ({ children, ...props }) => {
  return (
    <Switch {...props} className="group flex items-center gap-2 font-medium">
      {children}
    </Switch>
  )
}

const _SwitchIndicator = (props) => {
  return (
    <div
      {...props}
      className={clsx(
        'h-5 w-8 rounded-full bg-gray-300 p-0.5',
        'transition-colors group-[&[data-selected]]:bg-blue-500'
      )}
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-white',
          'transition-transform group-[&[data-selected]]:translate-x-3'
        )}
      />
    </div>
  )
}

export { _Switch as Switch, _SwitchIndicator as SwitchIndicator }
