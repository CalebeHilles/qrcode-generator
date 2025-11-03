import { HelpCircle } from "lucide-react";

export default function Checkbox({
  label,
  formData,
  onChange,
}: {
  label: string;
  formData: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex gap-1 text-xs sm:text-sm">
      <div>
        <label className="flex items-center gap-2 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={formData}
            className="w-4 h-4 cursor-pointer"
            onChange={(e) => onChange(e.target.checked)}
          />
          <span className="text-neutral-700">{label}</span>
        </label>
      </div>
      <HelpCircle className="w-4 text-gray-600" />
    </div>
  );
}
