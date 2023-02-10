import clsx from "clsx";
import {
  AriaTextFieldProps,
  mergeProps,
  useFocusRing,
  useHover,
} from "react-aria";
import { useFormControlContext } from "../../FormControl/src/FormControl";

interface TextareaProps extends AriaTextFieldProps {
  className?: string;
  defaultClassName?: string;
  hoverClassName?: string;
  focusVisibleClassName?: string;
  disabledClassName?: string;
  readOnlyClassName?: string;
  requiredClassName?: string;
  invalidClassName?: string;
}

export function Textarea(props: TextareaProps) {
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
    <textarea
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
