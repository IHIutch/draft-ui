import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "react-aria-components/src/TextField";
import LabelStory from "../../Label/stories/Label.stories";
import InputStory from "../../Input/stories/Input.stories";
import { Label } from "../../Label/src/Label";
import { Input } from "../../Input/src/Input";
import { Text } from "react-aria-components/src/Text";

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    className: { type: "string" },
    isDisabled: { type: "boolean" },
    isReadOnly: { type: "boolean" },
    isRequired: { type: "boolean" },
    validationState: {
      type: "string",
      control: "radio",
      options: ["valid", "invalid"],
    },
  },
  args: {
    className: "",
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    validationState: "valid",
  },
  subcomponents: { Label, Input },
} as ComponentMeta<typeof TextField>;

InputStory.args = {
  className: "",
  size: "md",
};

LabelStory.args = {
  className: "",
  children: "Label",
};

export const Default: ComponentStory<typeof TextField> = (props) => (
  <TextField {...props}>
    <Label {...LabelStory.args} />
    <Input validationState={props.validationState} {...InputStory.args} />
    {props.validationState === "invalid" ? (
      <Text slot="errorMessage" className="mt-2 text-red-500 text-sm">
        This is an error message
      </Text>
    ) : (
      <Text slot="description" className="mt-2 text-slate-500 text-sm">
        This is a description
      </Text>
    )}
  </TextField>
);
