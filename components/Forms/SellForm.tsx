"use client";
import { useRef, useState } from "react";
import FirstSellForm from "./FirstSellForm";
import SecondSellForm from "./SecondSellForm";
import ThirdSellForm from "./ThirdSellForm";
import Modal from "../ClientRender/Modal";
import CustomerDetailsForm from "./CustomerDetailsForm";
import CarDetails from "@/lib/types/carDetails";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CarInfoForm({
  carId,
  postalCode,
}: {
  carId: string;
  postalCode: string;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [soleOwner, setSoleOwner] = useState<string>("" as "yes" | "no");
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
  const [isLoan, setIsLoan] = useState<string>("no" as "yes" | "no");
  const [loanCompany, setLoanCompany] = useState("");
  const [loanBalance, setLoanBalance] = useState("");
  const [mechanicalIssuesFound, setMechanicalIssuesFound] = useState<string>(
    "" as "yes" | "no",
  );
  const [mechanicalIssues, setMechanicalIssues] = useState<string[]>([]);
  const [isDrivable, setIsDrivable] = useState<string>("" as "yes" | "no");
  const [hasAccident, setHasAccident] = useState<string>("" as "yes" | "no");
  const [totalClaims, setTotalClaims] = useState("");
  const [condition, setCondition] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const nextStep = () => {
    if (!validateStep()) return; // blocks if invalid
    setStep((prev) => Math.min(prev + 1, 4));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const validateStep = () => {
    const newErrors: { [key: string]: boolean } = {};

    if (step === 1) {
      if (!mileage) newErrors.mileage = true;
      if (!transmission) newErrors.transmission = true;
      if (!soleOwner) newErrors.soleOwner = true;
      if (!colour) newErrors.colour = true;
      if (isLoan === "loan") {
        if (!loanCompany) newErrors.loanCompany = true;
        if (!loanBalance) newErrors.loanBalance = true;
      }
    }

    if (step === 3) {
      if (exteriorDamage.length === 0) newErrors.exteriorDamage = true;
      if (interiorDamage.length === 0) newErrors.interiorDamage = true;
      if (disclosures.length === 0) newErrors.disclosures = true;
      if (numberOfTires.trim() === "") newErrors.numberOfTires = true;
      if (keys.trim() === "") newErrors.keys = true;
      if (tiresReplaced.trim() === "") newErrors.tiresReplaced = true;
      if (tiresKind.trim() === "") newErrors.tiresKind = true;
      if (mechanicalIssuesFound === "") newErrors.mechanicalIssuesFound = true;
      if (mechanicalIssuesFound === "yes" && mechanicalIssues.length === 0)
        newErrors.mechanicalIssues = true;
      if (!isDrivable) newErrors.isDrivable = true;
      if (!hasAccident) newErrors.hasAccident = true;
      if (!condition) newErrors.condition = true;
      if (hasAccident === "yes" && totalClaims.trim() === "")
        newErrors.totalClaims = true;
    }
    if (step === 4) {
      if (!name.trim()) newErrors.name = true;
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = true;
      if (!phone.trim() || !/^\d{10}$/.test(phone)) newErrors.phone = true;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    const formData: CarDetails = {
      name,
      email,
      phone,
      carId,
      mileage,
      transmission,
      soleOwner: soleOwner === "yes",
      colour,
      exteriorDamage,
      features,
      extraFeatures,
      isLoan: isLoan === "yes",
      loanCompany,
      loanBalance,
      interiorDamage,
      disclosures,
      numberOfTires,
      keys,
      tiresReplaced,
      tiresKind,
      mechanicalIssuesFound: mechanicalIssuesFound === "yes",
      mechanicalIssues,
      isDrivable: isDrivable === "yes",
      hasAccident: hasAccident === "yes",
      totalClaims,
      condition,
      postalCode,
    };
    try {
      const res = await fetch("/api/add-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setErrors({ submit: true });
        setSuccess(false);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Success:", data);
      setSuccess(true);
      return data;
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log(success);
  return (
    <>
      {open && (
        <Modal
          isOpen={open}
          title={success ? "" : "Almost there!"}
          description={
            success ? "" : "Just need a contact detail to finalize your offer"
          }
        >
          {success ? (
            <>
              <div className="flex flex-col items-center justify-center space-y-4 py-10">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-blue-100 ">
                  Thank you for submitting your car details!
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We will review the information you provided and get back to
                  you with an offer shortly.
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
                >
                  Back to Home
                </button>
              </div>
            </>
          ) : (
            <CustomerDetailsForm
              onClose={() => {
                setOpen(false);
                prevStep();
              }}
              onSuccess={handleSubmit}
              name={name}
              email={email}
              phone={phone}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              errors={errors}
              loading={loading}
            />
          )}
        </Modal>
      )}
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
            isLoan={isLoan}
            setIsLoan={setIsLoan}
            loanCompany={loanCompany}
            setLoanCompany={setLoanCompany}
            loanBalance={loanBalance}
            setLoanBalance={setLoanBalance}
            errors={errors}
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
        {(step === 3 || step === 4) && (
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
            isDrivable={isDrivable}
            setIsDrivable={setIsDrivable}
            hasAccident={hasAccident}
            setHasAccident={setHasAccident}
            totalClaims={totalClaims}
            setTotalClaims={setTotalClaims}
            condition={condition}
            setCondition={setCondition}
            errors={errors}
          />
        )}
        <div className="flex justify-between flex-wrap gap-5">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className=" p-3 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors cursor-pointer"
            >
              <ChevronLeftIcon size={20} />
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
              onClick={() => {
                if (validateStep()) {
                  nextStep();
                  setOpen(true);
                }
              }}
              className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
