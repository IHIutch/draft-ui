import clsx from "clsx";
import { Switch } from "react-aria-components";

const _Switch = ({ children, ...props }) => {
  return (
    <Switch {...props} className="group flex items-center gap-2 font-medium">
      {children}
    </Switch>
  )
}

const _SwitchIndicator = (props) => {
  return (
    <div {...props} className={clsx("w-8 h-5 bg-gray-300 rounded-full p-0.5",
      "transition-colors group-[&[data-selected]]:bg-blue-500")}>
      <div className={clsx("bg-white rounded-full h-4 w-4",
        "transition-transform group-[&[data-selected]]:translate-x-3")} />
    </div>
  )
}

export {
  _Switch as Switch,
  _SwitchIndicator as SwitchIndicator
}