import { AriaTextFieldProps, useTextField } from "react-aria";
import React, { createContext, useMemo, useRef } from "react";

interface FormControlContextProps {
  getLabelProps: Function;
  getInputProps: Function;
  getInputRef: Function;
  getDescriptionProps: Function;
  getErrorMessageProps: Function;
  isInvalid: boolean;
}

const FormControlContext = createContext({} as FormControlContextProps);

interface FormControlProps extends AriaTextFieldProps {
  className?: string;
  defaultClassName?: string;
  hoverClassName?: string;
  activeClassName?: string;
  focusVisibleClassName?: string;
  disabledClassName?: string;
  children?: React.ReactNode;
  isInvalid?: boolean;
}

function useFormControlContext() {
  const context = React.useContext(FormControlContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

export function FormControl(props: FormControlProps) {
  let ref = useRef<HTMLInputElement>(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      { ...props, label: "foo", errorMessage: "foo", description: "foo" },
      ref
    );

  const value = useMemo(
    () => ({
      isInvalid: props.isInvalid || false,
      getLabelProps: () => labelProps,
      getInputProps: () => inputProps,
      getInputRef: () => ref,
      getDescriptionProps: () => descriptionProps,
      getErrorMessageProps: () => errorMessageProps,
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
    <div>
      <FormControlContext.Provider value={value}>
        {props.children}
      </FormControlContext.Provider>
    </div>
  );
}

export function FormLabel(props: any) {
  const { children, ...rest } = props;
  const { getLabelProps } = useFormControlContext();
  return (
    <label {...getLabelProps()} {...rest}>
      {children}
    </label>
  );
}

export function Input(props: any) {
  const { getInputProps, getInputRef } = useFormControlContext();
  return <input {...getInputProps()} ref={getInputRef} {...props} />;
}

export function FormHelperText(props: any) {
  const { children, ...rest } = props;
  const { getDescriptionProps } = useFormControlContext();
  return (
    <div {...getDescriptionProps()} {...rest}>
      {children}
    </div>
  );
}

export function FormErrorMessage(props: any) {
  const { children, ...rest } = props;
  const { getErrorMessageProps, isInvalid } = useFormControlContext();
  return isInvalid ? (
    <div {...getErrorMessageProps()} {...rest}>
      {children}
    </div>
  ) : null;
}
