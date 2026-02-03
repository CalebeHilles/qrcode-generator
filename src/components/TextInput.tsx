import { X } from "lucide-react";

export default function TextInput({
  label,
  placeholder,
  formData,
  noPass,
  onChange,
  onInputClean,
  shouldRenderClearBtn,
}: {
  label: string;
  placeholder: string;
  formData: string;
  noPass: boolean;
  onChange: (value: string) => void;
  onInputClean: () => void;
  shouldRenderClearBtn: boolean;
}) {
  return noPass ? null : (
    <div className="flex flex-col gap-1 text-xs sm:text-sm">
      <label className="text-zinc-400">{label}:</label>
      <div className="flex border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden pr-2 transition-all focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30">
        <input
          value={formData}  
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-zinc-100 py-2 px-3 outline-none placeholder:text-zinc-700"
          type="text"
          placeholder={placeholder}
          required
        />
        {shouldRenderClearBtn && (
          <button onClick={onInputClean} type="button" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}