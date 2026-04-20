interface InputProps {
  label: string;
  name: string;
  login: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export default function Input({
  label,
  name,
  login,
  error,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...login(name)}
        className="border p-2 rounded"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}