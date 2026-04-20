import { useState } from "react";

export default function PasswordInput({ label, name, login, error }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...login
            
            
            
            (name)}
          className="border p-2 rounded w-full"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-sm"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}