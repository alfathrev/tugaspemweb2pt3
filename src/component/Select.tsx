interface SelectProps {
  label: string;
  name: string;
  login: any;
  error?: string;
  options: { label: string; value: string }[];
}

export default function Select({
  label,
  name,
  login,
  error,
  options,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <select {...login(name)} className="border p-2 rounded">
        <option value="">Pilih...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}