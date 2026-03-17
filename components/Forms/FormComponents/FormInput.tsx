import formatNumber from "@/lib/formatNumber";

export default function FormInput({
  value,
  onChange,
  label,
  error,
  isFormatNumber,
  icon,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: boolean;
  isFormatNumber?: boolean;
  icon?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-secondary-800 dark:text-blue-100 font-medium">
          {label}
        </label>
        {error && (
          <p className="text-red-500 dark:text-red-400 text-sm">Required</p>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(
              isFormatNumber ? formatNumber(e.target.value) : e.target.value,
            )
          }
          className="p-4 rounded-md w-full border border-gray-300 dark:border-gray-700 bg-background dark:bg-zinc-900 text-secondary-800 dark:text-blue-100
                focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
        />
        {icon && (
          <span className="absolute right-4 top-4 text-gray-500">{icon}</span>
        )}
      </div>
    </div>
  );
}
