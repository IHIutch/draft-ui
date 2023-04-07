import { Button, type _ButtonProps } from "./Button";
import { type ClassValue } from "class-variance-authority/dist/types";
import { type ReactNode } from "react";
import { Item, ListBox, Popover, Select } from "react-aria-components";

const _Select = (props) => {
  return <Select {...props} />;
};

export interface _SelectButtonProps extends _ButtonProps {
  icon?: ReactNode;
  children?: ReactNode;
}

const _SelectButton = ({ children, icon, ...props }: _SelectButtonProps) => {
  return (
    <Button className="flex gap-2" {...props}>
      <span>{children}</span>
      <span aria-hidden="true">{icon}</span>
    </Button>
  );
};

const _SelectContent = (props) => {
  return (
    <Popover>
      <ListBox {...props} />
    </Popover>
  );
};

const _SelectItem = (props) => {
  return <Item {...props} />;
};

export {
  _Select as Select,
  _SelectButton as SelectButton,
  _SelectContent as SelectContent,
  _SelectItem as SelectItem,
};
