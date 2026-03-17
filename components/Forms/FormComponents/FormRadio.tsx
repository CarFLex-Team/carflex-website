export default function FormRadio({
  options,
  value,
  onChange,
  label,
  error,
}: {
  options: { label: string; value: string }[];
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
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center border rounded-md p-4  cursor-pointer transition-colors text-secondary-800 dark:text-blue-100  ${
              value === option.value
                ? "border-secondary-800 dark:border-blue-100"
                : " hover:bg-gray-100  border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700/50"
            }`}
          >
            <input
              type="radio"
              name={label}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="mr-2 accent-secondary-800 dark:accent-primary-600"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
