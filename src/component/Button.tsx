export default function Button({
  label,
  type = "button",
  isLoading = false,
}: any) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
}