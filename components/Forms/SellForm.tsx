"use client";
import { useRef, useState } from "react";
import FirstSellForm from "./FirstSellForm";
import SecondSellForm from "./SecondSellForm";
import ThirdSellForm from "./ThirdSellForm";

export default function CarInfoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [soleOwner, setSoleOwner] = useState("");
  const [colour, setColour] = useState("");
  const [exteriorDamage, setExteriorDamage] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [extraFeatures, setExtraFeatures] = useState<string>("");
  const [interiorDamage, setInteriorDamage] = useState<string[]>([]);
  const [disclosures, setDisclosures] = useState<string[]>([]);
  const [numberOfTires, setNumberOfTires] = useState("");
  const [keys, setKeys] = useState("");
  const [tiresReplaced, setTiresReplaced] = useState("");
  const [tiresKind, setTiresKind] = useState("");
  const [loanOrLease, setLoanOrLease] = useState("no");
  const [loanCompany, setLoanCompany] = useState("");
  const [loanBalance, setLoanBalance] = useState("");
  const [mechanicalIssuesFound, setMechanicalIssuesFound] =
    useState<string>("");
  const [mechanicalIssues, setMechanicalIssues] = useState<string[]>([]);
  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = () => {
    const formData = {
      year,
      make,
      model,
      mileage,
      transmission,
      soleOwner,
      colour,
      exteriorDamage,
      features,
      extraFeatures,
      loanOrLease,
      loanCompany,
      loanBalance,
      interiorDamage,
      disclosures,
      numberOfTires,
      keys,
      tiresReplaced,
      tiresKind,
    };
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className="flex justify-between w-full  fixed top-15 left-0 right-0 bg-background dark:bg-zinc-900 px-1  py-2 z-10">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-1/3 h-1   ${
              step >= s ? "bg-primary-500 dark:bg-primary-600" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
      <form ref={formRef} className="pt-20 w-3/5 space-y-6">
        {/* Basic Info */}
        {step === 1 && (
          <FirstSellForm
            mileage={mileage}
            setMileage={setMileage}
            transmission={transmission}
            setTransmission={setTransmission}
            soleOwner={soleOwner}
            setSoleOwner={setSoleOwner}
            colour={colour}
            setColour={setColour}
            loanOrLease={loanOrLease}
            setLoanOrLease={setLoanOrLease}
            loanCompany={loanCompany}
            setLoanCompany={setLoanCompany}
            loanBalance={loanBalance}
            setLoanBalance={setLoanBalance}
          />
        )}
        {step === 2 && (
          <SecondSellForm
            features={features}
            setFeatures={setFeatures}
            extraFeatures={extraFeatures}
            setExtraFeatures={setExtraFeatures}
          />
        )}
        {step === 3 && (
          <ThirdSellForm
            exteriorDamage={exteriorDamage}
            setExteriorDamage={setExteriorDamage}
            interiorDamage={interiorDamage}
            setInteriorDamage={setInteriorDamage}
            disclosures={disclosures}
            setDisclosures={setDisclosures}
            numberOfTires={numberOfTires}
            setNumberOfTires={setNumberOfTires}
            keys={keys}
            setKeys={setKeys}
            tiresReplaced={tiresReplaced}
            setTiresReplaced={setTiresReplaced}
            tiresKind={tiresKind}
            setTiresKind={setTiresKind}
            mechanicalIssuesFound={mechanicalIssuesFound}
            setMechanicalIssuesFound={setMechanicalIssuesFound}
            mechanicalIssues={mechanicalIssues}
            setMechanicalIssues={setMechanicalIssues}
          />
        )}
        <div className="flex justify-between flex-wrap gap-5">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors cursor-pointer"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
            >
              Get an Offer
            </button>
          )}
        </div>
      </form>
    </>
  );
}
