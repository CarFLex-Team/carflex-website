import toggleOption from "@/lib/toggleOptions";
export default function FormCheckBox({
  options,
  value,
  onChange,
  label,
  isFlex = false,
}: {
  options: string[];
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  label: string;
  isFlex?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-secondary-800 dark:text-blue-100 font-medium">
        {label}
      </label>
      <div className={`${isFlex ? "flex flex-wrap gap-2" : "space-y-2 "} `}>
        {options.map((option) => (
          <label
            key={option}
            className={`flex flex-1 items-center p-4 rounded-md border  bg-background
                    dark:bg-zinc-900 text-secondary-800 dark:text-blue-100 cursor-pointer
                    hover:border-secondary-800 dark:hover:border-blue-100 transition-colors ${value.includes(option) ? "border-secondary-800 dark:border-blue-100" : "border-gray-300 dark:border-gray-700"}`}
          >
            <input
              type="checkbox"
              checked={value.includes(option)}
              name={option}
              onChange={() => toggleOption(option, onChange)}
              className="mr-4 w-5 h-5 accent-secondary-800 dark:accent-primary-600 rounded focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
