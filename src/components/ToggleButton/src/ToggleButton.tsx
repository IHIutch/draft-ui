import {
  useToggleButton,
  useHover,
  useFocusRing,
  mergeProps,
} from "react-aria";
import { useToggleState } from "react-stately";
import { AriaToggleButtonProps } from "@react-types/button";
import { useRef } from "react";
import clsx from "clsx";

interface ToggleButtonProps extends AriaToggleButtonProps {
  className?: string;
  defaultClassName?: string;
  hoverClassName?: string;
  activeClassName?: string;
  focusVisibleClassName?: string;
  disabledClassName?: string;
  selectedClassName?: string;
  selectedHoverClassName?: string;
  selectedActiveClassName?: string;
  selectedFocusVisibleClassName?: string;
}

export function ToggleButton(props: ToggleButtonProps) {
  const {
    children,
    className = "",
    defaultClassName = "",
    hoverClassName = "",
    focusVisibleClassName = "",
    activeClassName = "",
    disabledClassName = "",
    selectedClassName = "",
    selectedHoverClassName = "",
    selectedActiveClassName = "",
    selectedFocusVisibleClassName = "",
    isDisabled = false,
  } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocusVisible } = useFocusRing();

  const hoverClass =
    selectedHoverClassName && state.isSelected
      ? selectedHoverClassName
      : hoverClassName;
  const activeClass =
    selectedActiveClassName && state.isSelected
      ? selectedActiveClassName
      : activeClassName;
  const focusVisibleClass =
    selectedFocusVisibleClassName && state.isSelected
      ? selectedFocusVisibleClassName
      : focusVisibleClassName;

  return (
    <button
      ref={ref}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      className={clsx(className, {
        [defaultClassName]: !state.isSelected && !isHovered && !isPressed,
        [selectedClassName]: state.isSelected,
        [hoverClass]: isHovered,
        [activeClass]: isPressed,
        [focusVisibleClass]: isFocusVisible,
        [disabledClassName]: isDisabled,
      })}
    >
      {children}
    </button>
  );
}
