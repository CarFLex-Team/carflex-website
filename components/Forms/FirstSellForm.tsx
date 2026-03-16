import { Form } from "lucide-react";
import FormRadio from "./FormComponents/FormRadio";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import ThreeChoiceToggle from "../Buttons/ThreeToggleButton";
export default function FirstSellForm({
  mileage,
  setMileage,
  transmission,
  setTransmission,
  soleOwner,
  setSoleOwner,
  colour,
  setColour,
  loanOrLease,
  setLoanOrLease,
  loanCompany,
  setLoanCompany,
  loanBalance,
  setLoanBalance,
}: {
  mileage: string;
  setMileage: (value: string) => void;
  transmission: string;
  setTransmission: (value: string) => void;
  soleOwner: string;
  setSoleOwner: (value: string) => void;
  colour: string;
  setColour: (value: string) => void;
  loanOrLease: string;
  setLoanOrLease: (value: string) => void;
  loanCompany: string;
  setLoanCompany: (value: string) => void;
  loanBalance: string;
  setLoanBalance: (value: string) => void;
}) {
  const formatNumber = (value: string) => {
    // Remove non-digits
    const numericValue = value.replace(/\D/g, "");
    if (!numericValue) return "";
    // Add commas
    return parseInt(numericValue).toLocaleString();
  };
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
            onChange={(e) => setMileage(formatNumber(e.target.value))}
            inputMode="numeric"
            pattern="\d*"
            placeholder="120,000"
            className="p-4 rounded-md  w-full   focus:outline-none focus:ring-2
             focus:ring-secondary-800 dark:focus:ring-blue-100 bg-background dark:bg-zinc-900 border
             border-gray-300 dark:border-gray-700 text-secondary-800 dark:text-blue-100"
          />
          <span className="absolute right-4 top-4 text-gray-500">km</span>
        </div>
      </div>
      <FormRadio
        options={[
          { label: "Automatic", value: "automatic" },
          { label: "Manual", value: "manual" },
        ]}
        value={transmission}
        onChange={setTransmission}
        label="Select your transmission type"
      />
      <FormRadio
        options={[
          { label: "Yes, I am the sole owner", value: "yes" },
          { label: "No, I have a co-owner", value: "no" },
        ]}
        value={soleOwner}
        onChange={(value) => setSoleOwner(value)}
        label="Are you the sole owner of this vehicle?"
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
          selectedTab={loanOrLease}
          setSelectedTab={setLoanOrLease}
        />
      </div>
      <AnimatePresence>
        {loanOrLease === "loan" && (
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
      </div>
    </>
  );
}
