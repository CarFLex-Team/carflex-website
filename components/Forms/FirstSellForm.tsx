import FormRadio from "./FormComponents/FormRadio";

import { AnimatePresence, motion } from "framer-motion";
import ThreeChoiceToggle from "../Buttons/ThreeToggleButton";
import formatNumber from "../../lib/formatNumber";
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
      <div className="space-y-2">
        <label className="block text-secondary-800 dark:text-blue-100">
          What's the approximate mileage on your car?
        </label>
        <div className="relative">
          <input
            type="text"
            value={mileage}
            onChange={(e) => {
              setMileage(formatNumber(e.target.value));
            }}
            inputMode="numeric"
            pattern="\d*"
            placeholder="120,000"
            className="p-4 rounded-md  w-full   focus:outline-none focus:ring-2
             focus:ring-secondary-800 dark:focus:ring-blue-100 bg-background dark:bg-zinc-900 border
             border-gray-300 dark:border-gray-700 text-secondary-800 dark:text-blue-100"
          />
          <span className="absolute right-4 top-4 text-gray-500">km</span>
        </div>
        {errors.mileage && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            Mileage is required
          </p>
        )}
      </div>
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
          setSelectedTab={setIsLoan}
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
            <div className="space-y-2">
              <label className="block text-secondary-800 dark:text-blue-100 font-medium">
                Loan company
              </label>
              <div>
                <input
                  type="text"
                  value={loanCompany}
                  onChange={(e) => setLoanCompany(e.target.value)}
                  className="p-4 rounded-md w-full border border-gray-300 dark:border-gray-700 bg-background dark:bg-zinc-900 text-secondary-800 dark:text-blue-100
                focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
                />
              </div>
              {errors.loanCompany && (
                <p className="text-red-500 dark:text-red-400 text-sm">
                  Loan company is required
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-secondary-800 dark:text-blue-100 font-medium">
                Loan balance
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(formatNumber(e.target.value))}
                  className="p-4 rounded-md w-full border border-gray-300 dark:border-gray-700 bg-background dark:bg-zinc-900
                   text-secondary-800 dark:text-blue-100
                focus:outline-none focus:ring-2 focus:ring-secondary-800 dark:focus:ring-blue-100"
                />
                <span className="absolute right-4 top-4 text-gray-500">$</span>
              </div>
              {errors.loanBalance && (
                <p className="text-red-500 dark:text-red-400 text-sm">
                  Loan balance is required
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="space-y-2">
        <label className="block text-secondary-800 dark:text-blue-100">
          What colour is your vehicle?
        </label>
        <div>
          <input
            type="text"
            value={colour}
            name="Colour"
            onChange={(e) => setColour(e.target.value)}
            placeholder="e.g., Red, Blue, Black"
            className="p-4 rounded-md  w-full   focus:outline-none focus:ring-2
            focus:ring-secondary-800 dark:focus:ring-blue-100 bg-background dark:bg-zinc-900 border
            border-gray-300 dark:border-gray-700 text-secondary-800 dark:text-blue-100"
          />
        </div>
        {errors.colour && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            Colour is required
          </p>
        )}
      </div>
    </>
  );
}
