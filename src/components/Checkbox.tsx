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
    <div className="flex gap-2 items-center text-xs sm:text-sm mt-2">
      <label className="flex items-center gap-2 cursor-pointer w-fit group">
        <input
          type="checkbox"
          checked={formData}
          className="
            appearance-none w-4 h-4 cursor-pointer rounded
            bg-zinc-950 border border-zinc-800
            checked:bg-purple-600 checked:border-purple-600
            focus:ring-0 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-purple-500
            transition-all relative
            after:content-[''] after:absolute after:hidden after:checked:block
            after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px]
            after:border-white after:border-b-2 after:border-r-2 after:rotate-45
          "
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors tracking-wide">
          {label}
        </span>
      </label>
      <HelpCircle className="w-4 h-4 text-zinc-600" />
    </div>
  );
}