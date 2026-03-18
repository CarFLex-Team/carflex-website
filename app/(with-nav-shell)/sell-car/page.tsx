"use client";
import { Suspense, useEffect } from "react";
import SellForm from "@/components/Forms/SellForm";
import { useSearchParams, useRouter } from "next/navigation";

export default function SellCar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const carId = searchParams.get("carId");
  const postalCode = searchParams.get("postalCode");

  useEffect(() => {
    if (!carId || !postalCode) {
      router.push("/");
    }
  }, [carId, postalCode, router]);

  // Prevent rendering form until we know params exist
  if (!carId || !postalCode) {
    return null; // or a loading skeleton/spinner
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <SellForm carId={carId} postalCode={postalCode} />
    </div>
  );
}
