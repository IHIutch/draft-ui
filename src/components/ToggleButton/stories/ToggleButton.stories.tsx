import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleButton } from "../src/ToggleButton";

export default {
  title: "ToggleButton",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const Default: ComponentStory<typeof ToggleButton> = (props) => (
  <ToggleButton {...props} />
);

Default.argTypes = {
  children: { type: "string" },
  className: { type: "string" },
  defaultClassName: { type: "string" },
  hoverClassName: { type: "string" },
  focusVisibleClassName: { type: "string" },
  activeClassName: { type: "string" },
  disabledClassName: { type: "string" },
  selectedClassName: { type: "string" },
  selectedHoverClassName: { type: "string" },
  selectedActiveClassName: { type: "string" },
  selectedFocusVisibleClassName: { type: "string" },
  isDisabled: { type: "boolean" },
};

Default.args = {
  children: "Toggle Button",
  className: "green",
  defaultClassName: "",
  hoverClassName: "",
  focusVisibleClassName: "",
  activeClassName: "",
  disabledClassName: "",
  selectedClassName: "red",
  selectedHoverClassName: "",
  selectedActiveClassName: "",
  selectedFocusVisibleClassName: "",
  isDisabled: false,
};
