import {
  LabelAriaProps,
  useTextField,
  TextFieldAria,
  AriaTextFieldOptions,
} from "react-aria";
import React, { createContext, useContext, useMemo, useRef } from "react";

interface FormControlProps
  extends TextFieldAria,
    AriaTextFieldOptions<"input"> {
  isInvalid: boolean;
  children?: React.ReactNode;
}

interface LabelProps extends LabelAriaProps {
  children?: React.ReactNode;
}

const FormControlContext = createContext<FormControlProps>({
  labelProps: {},
  inputProps: {},
  descriptionProps: {},
  errorMessageProps: {},
  isInvalid: false,
});

export function useFormControlContext() {
  const context = useContext(FormControlContext);
  if (!context) {
    throw new Error(
      `FormControl compound components cannot be rendered outside the FormControl component`
    );
  }
  return context;
}

export function FormControl(props: FormControlProps) {
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...props,
        label: props.label || "foo",
        errorMessage: props.errorMessage || "foo",
        description: props.description || "foo",
      },
      ref
    );

  const value = useMemo(
    () => ({
      isInvalid: props.isInvalid || false,
      isReadOnly: props.isReadOnly || false,
      isRequired: props.isRequired || false,
      isDisabled: props.isDisabled || false,
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
    }),
    [
      descriptionProps,
      errorMessageProps,
      inputProps,
      labelProps,
      props.isDisabled,
      props.isInvalid,
      props.isReadOnly,
      props.isRequired,
    ]
  );

  return (
    <FormControlContext.Provider value={value}>
      {props.children}
    </FormControlContext.Provider>
  );
}

export function FormLabel(props: LabelProps) {
  const { labelProps } = useFormControlContext();
  return <label {...labelProps} {...props} />;
}

export function FormDescription(props: React.HTMLProps<HTMLDivElement>) {
  const { descriptionProps } = useFormControlContext();
  return <div {...descriptionProps} {...props} />;
}

export function FormErrorMessage(props: React.HTMLProps<HTMLDivElement>) {
  const { errorMessageProps, isInvalid } = useFormControlContext();
  return isInvalid ? <div {...errorMessageProps} {...props} /> : null;
}
