import FormRadio from "./FormComponents/FormRadio";

import { AnimatePresence, motion } from "framer-motion";
import ThreeChoiceToggle from "../Buttons/ThreeToggleButton";
import formatNumber from "../../lib/formatNumber";
import FormInput from "./FormComponents/FormInput";
export default function FirstSellForm({
  mileage,
  setMileage,
  transmission,
  setTransmission,
  soleOwner,
  setSoleOwner,
  colour,
  setColour,
  isLoan,
  setIsLoan,
  loanCompany,
  setLoanCompany,
  loanBalance,
  setLoanBalance,
  errors,
}: {
  mileage: string;
  setMileage: (value: string) => void;
  transmission: string;
  setTransmission: (value: string) => void;
  soleOwner: string;
  setSoleOwner: (value: string) => void;
  colour: string;
  setColour: (value: string) => void;
  isLoan: string;
  setIsLoan: (value: string) => void;
  loanCompany: string;
  setLoanCompany: (value: string) => void;
  loanBalance: string;
  setLoanBalance: (value: string) => void;
  errors: { [key: string]: boolean };
}) {
  return (
    <>
      <h2 className="text-4xl font-bold text-secondary-800 dark:text-blue-100 ">
        Basic Info
      </h2>
      <FormInput
        value={mileage}
        onChange={setMileage}
        label="What's the approximate mileage on your car?"
        placeholder="120,000"
        isFormatNumber={true}
        error={errors.mileage}
        icon="km"
      />

      <FormRadio
        options={[
          { label: "Automatic", value: "automatic" },
          { label: "Manual", value: "manual" },
        ]}
        value={transmission}
        onChange={setTransmission}
        label="Select your transmission type"
        error={errors.transmission}
      />
      <FormRadio
        options={[
          { label: "Yes, I am the sole owner", value: "yes" },
          { label: "No, I have a co-owner", value: "no" },
        ]}
        value={soleOwner}
        onChange={(value) => setSoleOwner(value)}
        label="Are you the sole owner of this vehicle?"
        error={errors.soleOwner}
      />
      <div className="space-y-2">
        <label className="block text-secondary-800 dark:text-blue-100">
          Do you have a loan or lease on the car?
        </label>
        <ThreeChoiceToggle
          tabs={[
            { id: "no", label: "No" },
            { id: "loan", label: "Loan" },
          ]}
          selectedTab={isLoan}
          onChange={(id) => {
            setIsLoan(id);
            setLoanCompany("");
            setLoanBalance("");
          }}
        />
      </div>
      <AnimatePresence>
        {isLoan === "loan" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormInput
              value={loanCompany}
              onChange={setLoanCompany}
              label="What is the name of your loan company?"
              error={errors.loanCompany}
            />
            <FormInput
              value={loanBalance}
              onChange={setLoanBalance}
              label="What is your current loan balance?"
              isFormatNumber={true}
              error={errors.loanBalance}
              icon="$"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <FormInput
        value={colour}
        onChange={setColour}
        label="What colour is your vehicle?"
        placeholder="e.g. Red, Blue, Black"
        error={errors.colour}
      />
    </>
  );
}
