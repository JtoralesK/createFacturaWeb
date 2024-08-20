type InputProp = {
  label: string;
  type: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string;
};

export const Input = ({
  label,
  type,
  placeholder,
  readonly,
  value,
}: InputProp) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        required
        value={value}
      />
    </div>
  );
};
