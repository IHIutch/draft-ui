import clsx from "clsx";
import { Switch } from "react-aria-components";

const _Switch = ({ children, ...props }) => {
  return (
    <Switch {...props} className="group">
      <div className="flex">
        <div className={clsx("w-12 h-6 bg-gray-300 rounded-full p-1",
          "group-[&[data-selected]]:bg-blue-500")}>
          <div className="bg-white rounded-full h-4 w-4" />
        </div>
        {children}
      </div>
    </Switch>
  )
}

export {
  _Switch as Switch
}