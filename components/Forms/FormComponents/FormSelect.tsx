export default function FormSelect({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-secondary-800 dark:text-blue-100 font-medium">
        {label}
      </label>
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
