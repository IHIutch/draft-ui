import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../src/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

Default.argTypes = {
  children: { type: "string" },
  className: { type: "string" },
  defaultClassName: { type: "string" },
  hoverClassName: { type: "string" },
  focusVisibleClassName: { type: "string" },
  activeClassName: { type: "string" },
  disabledClassName: { type: "string" },
  isDisabled: { type: "boolean" },
};

Default.args = {
  children: "Button",
  className: "",
  defaultClassName: "",
  hoverClassName: "",
  focusVisibleClassName: "",
  activeClassName: "",
  disabledClassName: "",
  isDisabled: false,
};
