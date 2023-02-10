import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../../Input/src/Input";
import { Textarea } from "../../Textarea/src/Textarea";
import {
  FormControl,
  FormDescription,
  FormErrorMessage,
  FormLabel,
} from "../src/FormControl";

export default {
  title: "FormControl",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

export const withInput: ComponentStory<typeof FormControl> = (props) => (
  <FormControl {...props}>
    <FormLabel>Label</FormLabel>
    <Input />
    <FormDescription>This is the form description</FormDescription>
    <FormErrorMessage>This is an error message</FormErrorMessage>
  </FormControl>
);

withInput.argTypes = {
  isInvalid: { type: "boolean" },
  isDisabled: { type: "boolean" },
};

withInput.args = {
  isInvalid: false,
  isDisabled: false,
};

export const withTextarea: ComponentStory<typeof FormControl> = (props) => (
  <FormControl {...props}>
    <FormLabel>Label</FormLabel>
    <Textarea />
    <FormDescription>This is the form description</FormDescription>
    <FormErrorMessage>This is an error message</FormErrorMessage>
  </FormControl>
);

withTextarea.argTypes = {
  isInvalid: { type: "boolean" },
  isDisabled: { type: "boolean" },
};

withTextarea.args = {
  isInvalid: false,
  isDisabled: false,
};
