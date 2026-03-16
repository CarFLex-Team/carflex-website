import toggleOption from "@/lib/toggleOptions";
import FormSelect from "./FormComponents/FormSelect";
import FormCheckBox from "./FormComponents/FormCheckBox";
import FormRadio from "./FormComponents/FormRadio";
import { AnimatePresence, motion } from "framer-motion";
import formatNumber from "@/lib/formatNumber";
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
  mechanicalIssuesFound,
  setMechanicalIssuesFound,
  mechanicalIssues,
  setMechanicalIssues,
  isDrivable,
  setIsDrivable,
  hasAccident,
  setHasAccident,
  totalClaims,
  setTotalClaims,
  condition,
  setCondition,
}: {
  exteriorDamage: string[];
  setExteriorDamage: React.Dispatch<React.SetStateAction<string[]>>;
  interiorDamage: string[];
  setInteriorDamage: React.Dispatch<React.SetStateAction<string[]>>;
  disclosures: string[];
  setDisclosures: React.Dispatch<React.SetStateAction<string[]>>;
  numberOfTires: string;
  setNumberOfTires: (value: string) => void;
  keys: string;
  setKeys: (value: string) => void;
  tiresReplaced: string;
  setTiresReplaced: (value: string) => void;
  tiresKind: string;
  setTiresKind: (value: string) => void;
  mechanicalIssuesFound: string;
  setMechanicalIssuesFound: (value: string) => void;
  mechanicalIssues: string[];
  setMechanicalIssues: React.Dispatch<React.SetStateAction<string[]>>;
  isDrivable: string;
  setIsDrivable: (value: string) => void;
  hasAccident: string;
  setHasAccident: (value: string) => void;
  totalClaims: string;
  setTotalClaims: (value: string) => void;
  condition: string;
  setCondition: (value: string) => void;
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
      <FormRadio
        options={[
          { label: "Yes", value: "yes" },
          {
            label: "No mechanical issues or warning lights",
            value: "no",
          },
        ]}
        value={mechanicalIssuesFound}
        onChange={setMechanicalIssuesFound}
        label="Do you have any mechanical issues with your vehicle?"
      />
      <AnimatePresence>
        {mechanicalIssuesFound === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormCheckBox
              options={[
                "Engine",
                "Transmission",
                "Brakes",
                "Exhaust",
                "Suspension",
                "Airbag",
                "Battery",
                "Tire Pressure System",
              ]}
              value={mechanicalIssues}
              onChange={setMechanicalIssues}
              label="Please select any mechanical issues you are experiencing"
              isFlex={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <FormRadio
        options={[
          { label: "It's drivable", value: "yes" },
          {
            label: "It's not drivable",
            value: "no",
          },
        ]}
        value={isDrivable}
        onChange={setIsDrivable}
        label="Is your vehicle drivable?"
      />
      <FormRadio
        options={[
          { label: "None", value: "no" },
          {
            label: "Yes, I have had accidents or insurance claims",
            value: "yes",
          },
        ]}
        value={hasAccident}
        onChange={setHasAccident}
        label="Have you had any accidents or insurance claims?"
      />
      <AnimatePresence>
        {hasAccident === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="block text-secondary-800 dark:text-blue-100 font-medium">
                What was the total cost of repairs for all accidents?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={totalClaims}
                  onChange={(e) => setTotalClaims(formatNumber(e.target.value))}
                  className="p-4 rounded-md w-full border border-gray-300 dark:border-gray-700 bg-background dark:bg-zinc-900 text-secondary-800 dark:text-blue-100
                focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
                />
                <span className="absolute right-4 top-4 text-gray-500">$</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <FormRadio
        options={[
          { label: "Poor", value: "poor" },
          {
            label: "Good",
            value: "good",
          },
          { label: "Excellent", value: "excellent" },
        ]}
        value={condition}
        onChange={setCondition}
        label="What is the overall condition of your vehicle?"
      />
    </>
  );
}
