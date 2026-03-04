export default function ToggleButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`p-2 text-center w-full rounded-full cursor-pointer z-10  ${selected ? " text-white font-medium" : "text-secondary-400"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
