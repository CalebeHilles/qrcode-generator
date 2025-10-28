import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Checkbox({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex gap-1">
      <div>
        <label className="flex items-center gap-2 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={checked}
            className="w-4 h-4 cursor-pointer"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="text-neutral-700">{label}</span>
        </label>
      </div>
      <HelpCircle className="w-4 text-gray-600" />
    </div>
  );
}
