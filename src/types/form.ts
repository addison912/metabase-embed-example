import { type FieldError } from "react-hook-form";

export type SelectFieldProps = {
  label: string;
  error: FieldError | undefined;
  options: { value: string; label: string }[];
  valueAsNumber?: boolean;
  className?: string | undefined;
};

export type InputFieldProps = {
  label: string;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  className?: string | undefined;
  type: string;
  placeholder: string;
};

export type TextAreaFieldProps = {
  label: string;
  error: FieldError | undefined;
  className?: string | undefined;
  placeholder: string;
};
