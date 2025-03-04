"use client";
import { InputField, SelectField } from "@components/FormField";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  type RegistrationInputFieldProps,
  type RegistrationSelectFieldProps,
  type TRegistrationSchema,
  registrationSchema,
} from "@/types/registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

const year = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => (year + i).toString());

const RegistrationInput = (props: RegistrationInputFieldProps) => {
  return (
    <InputField
      label={props.label}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      register={props.register}
      error={props.error}
      valueAsNumber={props.valueAsNumber}
    />
  );
};

const RegistrationSelect = (props: RegistrationSelectFieldProps) => {
  return (
    <SelectField
      label={props.label}
      name={props.name}
      register={props.register}
      error={props.error}
      options={props.options}
      valueAsNumber={props.valueAsNumber}
    />
  );
};

const Registration = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<TRegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const registerUser = api.user.create.useMutation({
    onError(res) {
      console.log(`onError res: ${JSON.stringify(res)}`);
      if (res.data?.zodError && res.data.zodError.fieldErrors) {
        const fieldErrors = res.data.zodError.fieldErrors;
        Object.entries(fieldErrors).forEach((error) => {
          console.log(`error: ${error[0]}: ${error[1]}`);
          if (!!error[1])
            setError(error[0] as keyof TRegistrationSchema, {
              type: "manual",
              message: error[1].join(",\n"),
            });
        });
      } else if (!res.data) {
        console.log("An error occurred on the server. Please try again later.");
      } else {
        alert(`An error occurred: ${JSON.stringify(errors)}`);
      }
    },
    onSuccess: (data) => {
      console.log(`onSuccess data: ${JSON.stringify(data)}`);
      router.push("/analytics");
    },
  });

  const onSubmit: SubmitHandler<TRegistrationSchema> = async (data) => {
    try {
      registerUser.mutate(data);
    } catch (e) {
      if (e) {
        alert(`error: ${JSON.stringify(e)}`);
      }
    }
  };

  return (
    <div className="mt-[var(--header-height)] flex flex-col items-center justify-center rounded-lg p-6 max-sm:p-4">
      <form
        className="flex min-w-96 flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RegistrationInput
          label="First Name"
          type="text"
          placeholder="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <RegistrationInput
          label="Last Name"
          type="text"
          placeholder="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <RegistrationInput
          label="Account ID"
          type="text"
          placeholder="Account ID"
          name="accountId"
          register={register}
          error={errors.accountId}
        />

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          onClick={handleSubmit(onSubmit)}
          className="btn btn-primary mt-5 w-36 self-center text-xl hover:cursor-pointer disabled:bg-gray-400"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Registration;
