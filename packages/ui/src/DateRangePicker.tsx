import { Button, type _ButtonProps } from "./Button";
import { type ClassValue } from "class-variance-authority/dist/types";
import { DatePicker, Dialog, Popover } from "react-aria-components";

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _DateRangePicker = (props) => {
  return <DatePicker {...props} />;
};

const _DateRangePickerContent = (props) => {
  return (
    <Popover>
      <Dialog {...props} />
    </Popover>
  );
};

export {
  _DateRangePicker as DateRangePicker,
  _DateRangePickerContent as DateRangePickerContent,
};
