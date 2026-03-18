"use client";
import { Suspense, useEffect } from "react";
import SellForm from "@/components/Forms/SellForm";
import { useSearchParams, useRouter } from "next/navigation";

export default function SellCar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const year = searchParams.get("year");
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const postalCode = searchParams.get("postalCode");

  useEffect(() => {
    if (!year || !make || !model || !postalCode) {
      router.push("/");
    }
  }, [year, make, model, postalCode, router]);

  // Prevent rendering form until we know params exist
  if (!year || !make || !model || !postalCode) {
    return null; // or a loading skeleton/spinner
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <SellForm year={year} make={make} model={model} postalCode={postalCode} />
    </div>
  );
}
