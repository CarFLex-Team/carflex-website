import FormCheckBox from "./FormComponents/FormCheckBox";

export default function SecondSellForm({
  features,
  setFeatures,
  extraFeatures,
  setExtraFeatures,
}: {
  features: string[];
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  extraFeatures: string;
  setExtraFeatures: React.Dispatch<React.SetStateAction<string>>;
}) {
  const featuresOptions = [
    "Aftermarket rims",
    "Cosmetic modifications",
    "Aftermarket coloured wrap",
    "Aftermarket suspension",
    "Aftermarket exhaust",
    "Aftermarket Stereo",
    "Aftermarket performance modifications",
    "manufacturer software upgrades",
  ];
  return (
    <>
      <h2 className="text-4xl font-bold text-secondary-800 dark:text-blue-100 ">
        Features
      </h2>
      <FormCheckBox
        options={featuresOptions}
        value={features}
        onChange={setFeatures}
        label="Select any additional features your vehicle has"
      />

      <div className="space-y-2">
        <label className="block text-secondary-800 dark:text-blue-100">
          Any other features or modifications not listed above?
        </label>
        <div>
          <input
            type="text"
            value={extraFeatures}
            name="extraFeatures"
            onChange={(e) => setExtraFeatures(e.target.value)}
            placeholder="Write any additional features or modifications here"
            className="p-4 rounded-md  w-full   focus:outline-none focus:ring-2
             focus:ring-secondary-800 dark:focus:ring-blue-100 bg-background dark:bg-zinc-900 border
             border-gray-300 dark:border-gray-700 text-secondary-800 dark:text-blue-100"
          />
        </div>
      </div>
    </>
  );
}
