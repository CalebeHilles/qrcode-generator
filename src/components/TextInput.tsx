export default function TextInput({
  label,
  placeholder,
  data,
  noPass,
  onChange,
}: {
  label: string;
  placeholder: string;
  data: string;
  noPass: boolean;
  onChange: (value: string) => void;
}) {
  return noPass ? null : (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-700">{label}:</label>
      <input
        value={data}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border pl-1.5 p-0.5"
        type="text"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
