export default function TextInput({
  label,
  placeholder,
  formData,
  noPass,
  onChange,
}: {
  label: string;
  placeholder: string;
  formData: string;
  noPass: boolean;
  onChange: (value: string) => void;
}) {
  return noPass ? null : (
    <div className="flex flex-col gap-1 text-xs sm:text-sm">
      <label className="text-neutral-700">{label}:</label>
      <input
        value={formData}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border pl-1.5 p-0.5"
        type="text"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
