export const InputField = ({
  label,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any;
  error: any;
  valueAsNumber?: boolean;
  className?: string;
}) => {
  return (
    <div className={className || "mb-2 flex flex-col"}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <p className="text-red-500">{error?.message}</p>}
    </div>
  );
};

export const SelectField = ({
  label,
  name,
  register,
  error,
  options,
  valueAsNumber,
  className,
}: {
  label: string;
  name: string;
  register: any;
  error: any;
  options: { value: string; label: string }[];
  valueAsNumber?: boolean;
  className?: string;
}) => {
  return (
    <div className={className || "mb-2 flex flex-col"}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name, { valueAsNumber })}>
        <option>--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error?.message}</p>}
    </div>
  );
};

export const TextAreaField = ({
  label,
  name,
  register,
  error,
  className,
  placeholder,
  background,
  rows,
}: {
  label?: string;
  name: string;
  register: any;
  error: any;
  className?: string;
  placeholder: string;
  background?: string;
  rows?: string;
}) => {
  return (
    <>
      <div className={className || "mb-2 flex flex-col bg-gray-900 px-4 py-2"}>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea
          id={name}
          {...register(name)}
          rows={rows || "4"}
          className={`w-full border-0 ${background} px-0 text-base text-white placeholder-gray-400 focus:ring-0`}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-500">{error?.message}</p>}
    </>
  );
};
