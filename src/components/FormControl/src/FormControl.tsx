import { LabelAriaProps, useTextField } from "react-aria";
import React, { createContext, HTMLProps, useMemo, useRef } from "react";
import { AriaTextFieldProps } from "@react-types/textfield";

interface FormControlContextProps extends AriaTextFieldProps {
  labelProps: any;
  inputProps: any;
  inputRef: any;
  descriptionProps: any;
  errorMessageProps: any;
  isInvalid: boolean;
  children?: React.ReactNode;
}

interface LabelProps extends LabelAriaProps {
  children?: React.ReactNode;
}

const FormControlContext = createContext({} as FormControlContextProps);

export function useFormControlContext() {
  const context = React.useContext(FormControlContext);
  if (!context) {
    throw new Error(
      `FormControl compound components cannot be rendered outside the FormControl component`
    );
  }
  return context;
}

export function FormControl(props: FormControlContextProps) {
  const ref = useRef<HTMLInputElement>(null);
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
      labelProps,
      inputProps,
      inputRef: ref,
      descriptionProps,
      errorMessageProps,
    }),
    [
      descriptionProps,
      errorMessageProps,
      inputProps,
      labelProps,
      props.isInvalid,
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

// export function Input(props: FormInputProps) {
//   const { inputProps, inputRef } = useFormControlContext();
//   return <input {...inputProps} ref={inputRef} {...props} />;
// }

export function FormDescription(props: HTMLProps<HTMLDivElement>) {
  const { descriptionProps } = useFormControlContext();
  return <div {...descriptionProps} {...props} />;
}

export function FormErrorMessage(props: HTMLProps<HTMLDivElement>) {
  const { errorMessageProps, isInvalid } = useFormControlContext();
  return isInvalid ? <div {...errorMessageProps} {...props} /> : null;
}
