import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../src/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: { type: "string" },
    className: { type: "string" },
    variant: {
      type: "string",
      control: "select",
      options: ["solid", "destructive", "outline", "subtle", "ghost", "link"],
    },
    size: {
      type: "string",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: { type: "boolean" },
  },
  args: {
    children: "Press Me",
    className: "",
    variant: undefined,
    isDisabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);
