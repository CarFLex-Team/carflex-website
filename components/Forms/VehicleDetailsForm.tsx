import Link from "next/link";
export default function VehicleDetailsForm() {
  return (
    <form action="" className="flex flex-col md:flex-row items-center gap-4">
      <select
        defaultValue={""}
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
      >
        <option value="" disabled>
          Select Year
        </option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      <select
        defaultValue={""}
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
      >
        <option value="" disabled>
          Select Make
        </option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
      </select>
      <select
        defaultValue={""}
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
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
      />
      <Link
        href="/sell-car"
        className="p-4 w-full rounded-full bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90 text-xl font-medium transition-colors duration-300 cursor-pointer"
      >
        Get Offer
      </Link>
    </form>
  );
}
