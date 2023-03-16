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
  variant: {
    type: "string",
    control: "select",
    options: ["default", "destructive", "outline", "subtle", "ghost", "link"],
  },
  isDisabled: { type: "boolean" },
};

Default.args = {
  children: "Press Me",
  className: "",
  variant: undefined,
  isDisabled: false,
};
