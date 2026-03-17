import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function VehicleDetailsForm() {
  const [disabled, setDisabled] = useState(true);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();
  const years = Array.from({ length: 17 }, (_, i) => 2026 - i);
  useEffect(() => {
    if (year && make && model && postalCode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [year, make, model, postalCode]);

  return (
    <form className="flex flex-col md:flex-row items-center gap-4">
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="" disabled>
          Select Year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      >
        <option value="" disabled>
          Select Make
        </option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
      </select>
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option value="" disabled>
          Select Model
        </option>
        <option value="Camry">Camry</option>
        <option value="Civic">Civic</option>
        <option value="F-150">F-150</option>
      </select>
      <input
        type="text"
        placeholder="Postal Code"
        className="p-4 rounded-full w-full text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button
        type="button"
        className="p-4 w-full rounded-full bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90 text-xl font-medium transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 "
        disabled={disabled}
        onClick={() => {
          router.push("/sell-car");
        }}
      >
        Get Offer
      </button>
    </form>
  );
}
