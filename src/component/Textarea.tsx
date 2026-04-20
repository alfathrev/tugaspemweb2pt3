export default function Textarea({ label, name, login, error }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <textarea
        {...login(name)}
        className="border p-2 rounded h-24 resize-none focus:ring-2 focus:ring-blue-500"
        />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}