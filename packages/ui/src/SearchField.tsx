import { Button, type _ButtonProps } from "./Button";
import { Input, type _InputProps } from "./Input";
import { type ClassValue } from "class-variance-authority/dist/types";
import clsx from "clsx";
import { SearchField } from "react-aria-components";

const _SearchField = (props) => {
  return <SearchField className="group" {...props} />;
};

const _SearchFieldInput = ({ className, ...props }: _InputProps) => {
  return (
    <Input
      className={clsx(
        "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
        className
      )}
      {...props}
    />
  );
};

const _SearchFieldClearButton = ({ className, ...props }: _ButtonProps) => {
  return (
    <Button
      className={clsx("group-[&[data-empty]]:hidden", className)}
      {...props}
    />
  );
};

export {
  _SearchField as SearchField,
  _SearchFieldInput as SearchFieldInput,
  _SearchFieldClearButton as SearchFieldClearButton,
};
