export default function TextInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-700" htmlFor="SSID">
        {label}:
      </label>
      <input
        className="rounded-md border pl-1"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
