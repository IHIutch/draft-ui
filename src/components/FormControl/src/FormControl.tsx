import {
  LabelAriaProps,
  useTextField,
  TextFieldAria,
  AriaTextFieldOptions,
} from "react-aria";
import React, { createContext, useContext, useMemo, useRef } from "react";

interface FormControlContextProps
  extends TextFieldAria,
    AriaTextFieldOptions<"input"> {
  isInvalid: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  children?: React.ReactNode;
}

interface LabelProps extends LabelAriaProps {
  children?: React.ReactNode;
}

const FormControlContext = createContext<FormControlContextProps>({
  labelProps: {},
  inputProps: {},
  descriptionProps: {},
  errorMessageProps: {},
  isInvalid: false,
  isReadOnly: false,
  isRequired: false,
  isDisabled: false,
  inputElementType: "input",
});

export function useFormControlContext({ inputElementType }) {
  const context = useContext(FormControlContext({ inputElementType }));
  if (!context) {
    throw new Error(
      `FormControl compound components cannot be rendered outside the FormControl component`
    );
  }
  return context;
}

function FormControlProvider({
  children,
  initialValue,
}: {
  children: any;
  initialValue: FormControlContextProps;
}) {
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...initialValue,
        label: initialValue.label || "foo",
        errorMessage: initialValue.errorMessage || "foo",
        description: initialValue.description || "foo",
        inputElementType: initialValue.inputElementType,
      },
      ref
    );

  const value = useMemo(
    () => ({
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
    }),
    [descriptionProps, errorMessageProps, inputProps, labelProps]
  );
  return (
    <FormControlContext.Provider value={value}>
      {children}
    </FormControlContext.Provider>
  );
}

export function FormControl(props: FormControlProps) {
  const value = useMemo(
    () => ({
      isInvalid: props.isInvalid || false,
      isReadOnly: props.isReadOnly || false,
      isRequired: props.isRequired || false,
      isDisabled: props.isDisabled || false,
    }),
    [props.isDisabled, props.isInvalid, props.isReadOnly, props.isRequired]
  );

  return (
    <FormControlProvider initialValue={value}>
      {props.children}
    </FormControlProvider>
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
