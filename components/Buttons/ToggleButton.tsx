export default function ToggleButton({
  selected,
  onClick,
  children,
  disabled = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      className={`p-2 text-center w-full rounded-full cursor-pointer z-10 disabled:cursor-not-allowed ${selected ? " text-white font-medium" : "text-secondary-400 dark:text-gray-400"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
