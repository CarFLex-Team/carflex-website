import FormCheckBox from "./FormComponents/FormCheckBox";
import FormInput from "./FormComponents/FormInput";

export default function SecondSellForm({
  features,
  setFeatures,
  extraFeatures,
  setExtraFeatures,
}: {
  features: string[];
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  extraFeatures: string;
  setExtraFeatures: (value: string) => void;
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
      <FormInput
        value={extraFeatures}
        onChange={setExtraFeatures}
        label="Any other features or modifications not listed above?"
        placeholder="Write any additional features or modifications here"
      />
    </>
  );
}
