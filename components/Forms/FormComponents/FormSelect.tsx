export default function FormSelect({
  options,
  value,
  onChange,
  label,
  error,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-secondary-800 dark:text-blue-100 font-medium">
          {label}
        </label>
        {error && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            Please select at least one option.
          </p>
        )}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={label}
        className="p-4 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background dark:bg-zinc-900 text-secondary-800 dark:text-blue-100
          focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
