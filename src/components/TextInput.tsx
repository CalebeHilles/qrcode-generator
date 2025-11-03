import { X } from "lucide-react";

export default function TextInput({
  label,
  placeholder,
  formData,
  noPass,
  onChange,
  onInputClean,
}: {
  label: string;
  placeholder: string;
  formData: string;
  noPass: boolean;
  onChange: (value: string) => void;
  onInputClean: () => void;
}) {
  return noPass ? null : (
    <div className="flex flex-col gap-1 text-xs sm:text-sm">
      <label className="text-neutral-700">{label}:</label>
      <div className="flex border rounded-md outline-0 pl-1.5 py-1 px-0.5 ">
        <input
          value={formData}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
          type="text"
          placeholder={placeholder}
          required
        />
        <button onClick={() => onInputClean()} type="button">
          <X />
        </button>
      </div>
    </div>
  );
}
