export default function TextInput({
  label,
  placeholder,
  data,
  onChange,
}: {
  label: string;
  placeholder: string;
  data: string;
  onChange: (value: string) => void;
}) {

  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-700">
        {label}:
      </label>
      <input
        value={data}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border pl-1"
        type="text"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
