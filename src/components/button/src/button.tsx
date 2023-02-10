import React, { useRef } from "react";
import {
  useButton,
  useHover,
  useFocusRing,
  mergeProps,
  AriaButtonProps,
} from "react-aria";
import clsx from "clsx";

interface ButtonProps extends AriaButtonProps {
  className?: string;
  defaultClassName?: string;
  hoverClassName?: string;
  activeClassName?: string;
  focusVisibleClassName?: string;
  disabledClassName?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    defaultClassName = "",
    hoverClassName = "",
    focusVisibleClassName = "",
    activeClassName = "",
    disabledClassName = "",
    isDisabled = false,
  } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      ref={ref}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      className={clsx(className, {
        [defaultClassName]: !isHovered && !isPressed,
        [hoverClassName]: isHovered,
        [activeClassName]: isPressed,
        [focusVisibleClassName]: isFocusVisible,
        [disabledClassName]: isDisabled,
      })}
    >
      {children}
    </button>
  );
}
