import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function VinForm() {
  const [vin, setVin] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (vin.length === 17 && postalCode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [vin, postalCode]);

  return (
    <form className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Enter VIN"
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Postal Code"
        className="p-4 rounded-full w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button
        type="button"
        className="p-4 w-full rounded-full bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90 text-xl font-medium transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 "
        disabled={disabled}
        onClick={() => {
          router.push("/sell-car?vin=" + vin + "&postalCode=" + postalCode);
        }}
      >
        Get Offer
      </button>
    </form>
  );
}
