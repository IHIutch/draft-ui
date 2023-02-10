import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../src/button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

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
