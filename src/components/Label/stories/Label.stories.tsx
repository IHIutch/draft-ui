import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "../src/Label";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (props) => (
  <Label {...props} />
);

Default.argTypes = {
  className: { type: "string" },
  children: { type: "string" },
};

Default.args = {
  className: "",
  children: "Label",
};
