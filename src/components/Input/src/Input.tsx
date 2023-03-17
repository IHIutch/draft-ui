import { Input } from "react-aria-components/src/Input";
import { ClassValue } from "class-variance-authority/dist/types";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
  {
    variants: {
      validationState: {
        valid: "",
        invalid: "border-2 border-red-500",
      },
      size: {
        lg: "h-11 px-8",
        md: "h-10 py-2 px-4",
        sm: "h-9 px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface InputProps extends VariantProps<typeof inputVariants> {
  className?: ClassValue;
}

const _Input = ({
  className = "",
  validationState,
  size,
  ...props
}: InputProps) => {
  return (
    <Input
      className={inputVariants({
        size,
        validationState,
        className,
      })}
      {...props}
    />
  );
};

export { _Input as Input };
