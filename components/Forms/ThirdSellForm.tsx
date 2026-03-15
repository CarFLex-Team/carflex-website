import toggleOption from "@/lib/toggleOptions";
import FormSelect from "./FormComponents/FormSelect";
import FormCheckBox from "./FormComponents/FormCheckBox";
import FormRadio from "./FormComponents/FormRadio";
export default function ThirdSellForm({
  exteriorDamage,
  setExteriorDamage,
  interiorDamage,
  setInteriorDamage,
  disclosures,
  setDisclosures,
  numberOfTires,
  setNumberOfTires,
  keys,
  setKeys,
  tiresReplaced,
  setTiresReplaced,
  tiresKind,
  setTiresKind,
}: {
  exteriorDamage: string[];
  setExteriorDamage: React.Dispatch<React.SetStateAction<string[]>>;
  interiorDamage: string[];
  setInteriorDamage: React.Dispatch<React.SetStateAction<string[]>>;
  disclosures: string[];
  setDisclosures: React.Dispatch<React.SetStateAction<string[]>>;
  numberOfTires: string;
  setNumberOfTires: React.Dispatch<React.SetStateAction<string>>;
  keys: string;
  setKeys: React.Dispatch<React.SetStateAction<string>>;
  tiresReplaced: string;
  setTiresReplaced: React.Dispatch<React.SetStateAction<string>>;
  tiresKind: string;
  setTiresKind: React.Dispatch<React.SetStateAction<string>>;
}) {
  const exteriorDamageOptions = [
    "Minor cosmetic damage",
    "Moderate cosmetic damages",
    "Cracked Bodywork",
    "Rust",
    "Chipped or cracked glass",
    "No exterior damage",
  ];
  const interiorDamageOptions = [
    "Noticeable stains",
    "persistent odors",
    "Rips or tears in seats",
    "Damaged dashboard or controls",
    "No interior damage",
  ];
  const disclosureOptions = [
    "Salvage title",
    "Fire or flood damage",
    "Previously stolen",
    "No, none of the above",
  ];
  const tiresReplacedOptions = [
    { label: "Within the last year", value: "within_year" },
    { label: "Over a year ago", value: "over_year" },
  ];
  const tiresKindOptions = [
    { label: "All Season", value: "all_season" },
    { label: "Winter Tires", value: "winter" },
  ];
  return (
    <>
      <h2 className="text-4xl font-bold text-secondary-800 dark:text-blue-100 ">
        Condition and History
      </h2>
      <FormCheckBox
        options={exteriorDamageOptions}
        value={exteriorDamage}
        onChange={setExteriorDamage}
        label="Does your vehicle have any exterior damage?"
      />
      <FormCheckBox
        options={interiorDamageOptions}
        value={interiorDamage}
        onChange={setInteriorDamage}
        label="Does your vehicle have any interior damage?"
      />
      <FormCheckBox
        options={disclosureOptions}
        value={disclosures}
        onChange={setDisclosures}
        label="Any additional disclosures?"
      />
      <FormSelect
        options={["1", "2 or more"]}
        value={keys}
        onChange={setKeys}
        label="Number of Keys"
      />
      <FormSelect
        options={["1", "2 or more"]}
        value={numberOfTires}
        onChange={setNumberOfTires}
        label="Number of Tires"
      />
      <FormRadio
        options={tiresReplacedOptions}
        value={tiresReplaced}
        onChange={setTiresReplaced}
        label="When did you replace your all-season tires?"
      />
      <FormRadio
        options={tiresKindOptions}
        value={tiresKind}
        onChange={setTiresKind}
        label="What kind of tires are currently on your car?"
      />
    </>
  );
}
