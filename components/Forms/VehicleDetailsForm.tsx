import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export default function VehicleDetailsForm() {
  const [models, setModels] = useState<{ model_id: string; name: string }[]>(
    [],
  );
  const [makes, setMakes] = useState<{ make_id: string; name: string }[]>([]);
  const [trims, setTrims] = useState<
    { id: string; trim_id: string; name: string }[]
  >([]);
  const [carId, setCarId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();
  const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
  useEffect(() => {
    if (year && make && model && postalCode) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [year, make, model, postalCode]);
  const { data: makesData } = useSWR(
    year ? `/api/makes?year=${year}` : null,
    fetcher,
  );
  useEffect(() => {
    if (makesData) setMakes(makesData);
  }, [makesData]);

  const { data: modelsData } = useSWR(
    year && make ? `/api/models?year=${year}&make=${make}` : null,
    fetcher,
  );
  useEffect(() => {
    if (modelsData) setModels(modelsData);
  }, [modelsData]);

  const { data: trimsData } = useSWR(
    year && make && model ? `/api/trims?year=${year}&make=${make}&model=${model}` : null,
    fetcher,
  );
  useEffect(() => {
    if (trimsData) setTrims(trimsData);
  }, [trimsData]);


  return (
    <form className="flex flex-col md:flex-row items-center gap-4">
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          setMake("");
          setModel("");
          setTrim("");
        }}
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
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40 disabled:cursor-not-allowed disabled:opacity-50"
        value={make}
        onChange={(e) => {
          setMake(e.target.value);
          setModel("");
          setTrim("");
        }}
        disabled={!year || makes.length === 0}
      >
        <option value="" disabled>
          Select Make
        </option>
        {makes.map((make) => (
          <option key={make.make_id} value={make.make_id}>
            {make.name}
          </option>
        ))}
      </select>
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40 disabled:cursor-not-allowed disabled:opacity-50"
        value={model}
        onChange={(e) => {
          setModel(e.target.value);
          setTrim("");
        }}
        disabled={!year || !make || models.length === 0}
      >
        <option value="" disabled>
          Select Model
        </option>
        {models.length === 0 ? (
          <option disabled> No models available </option>
        ) : (
          models?.map((model) => (
            <option key={model.model_id} value={model.model_id}>
              {model.name}
            </option>
          ))
        )}
      </select>
      <select
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40 disabled:cursor-not-allowed disabled:opacity-50"
        value={trim}
        onChange={(e) => {
          setTrim(e.target.value);
          setCarId(trims.find((t) => t.trim_id === e.target.value)?.id || "");
        }}
        disabled={!year || !make || !model || trims.length === 0}
      >
        <option value="" disabled>
          Select Trim
        </option>
        {trims.length === 0 ? (
          <option disabled> No trims available </option>
        ) : (
          trims?.map((trim) => (
            <option key={trim.trim_id} value={trim.trim_id}>
              {trim.name}
            </option>
          ))
        )}
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
          router.push("/sell-car?carId=" + carId + "&postalCode=" + postalCode);
        }}
      >
        Get Offer
      </button>
    </form>
  );
}
