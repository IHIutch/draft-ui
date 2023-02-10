import clsx from "clsx";
import { AriaFieldProps, mergeProps, useFocusRing, useHover } from "react-aria";
import { useFormControlContext } from "../../FormControl/src/FormControl";

interface InputProps extends AriaFieldProps {
  className?: string;
  defaultClassName?: string;
  hoverClassName?: string;
  focusVisibleClassName?: string;
  disabledClassName?: string;
  readOnlyClassName?: string;
  requiredClassName?: string;
  invalidClassName?: string;
}

export function Input(props: InputProps) {
  const {
    inputProps,
    inputRef,
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
  } = useFormControlContext();

  const {
    className = "",
    defaultClassName = "",
    hoverClassName = "",
    focusVisibleClassName = "",
    disabledClassName = "",
    readOnlyClassName = "",
    requiredClassName = "",
    invalidClassName = "",
  } = props;

  const { hoverProps, isHovered } = useHover({ isDisabled: !!isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <input
      ref={inputRef}
      {...mergeProps(inputProps, hoverProps, focusProps)}
      className={clsx(className, {
        [defaultClassName]: !isHovered,
        [hoverClassName]: isHovered,
        [focusVisibleClassName]: isFocusVisible,
        [disabledClassName]: isDisabled,
        [readOnlyClassName]: isReadOnly,
        [requiredClassName]: isRequired,
        [invalidClassName]: isInvalid,
      })}
    />
  );
}
