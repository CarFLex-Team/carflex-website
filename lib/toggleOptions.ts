const toggleOption = (
  option: string,
  setter: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  setter((prev) =>
    prev.includes(option)
      ? prev.filter((o) => o !== option)
      : [...prev, option],
  );
};
export default toggleOption;
