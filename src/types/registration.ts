import { type UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { type SelectFieldProps, type InputFieldProps } from "@/types/form";

export const registrationSchema = z.object({
  firstName: z.string().min(1).trim(),
  lastName: z.string().min(1).trim(),
  accountId: z.string().min(1).trim(),
});

export type TRegistrationSchema = z.infer<typeof registrationSchema>;

export type RegistrationInputFieldProps = InputFieldProps & {
  name: RegistrationFieldName;
  register: UseFormRegister<TRegistrationSchema>;
};

export type RegistrationSelectFieldProps = SelectFieldProps & {
  name: RegistrationFieldName;
  register: UseFormRegister<TRegistrationSchema>;
};

export type RegistrationFieldName = keyof TRegistrationSchema;
