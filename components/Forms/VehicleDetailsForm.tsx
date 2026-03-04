export default function VehicleDetailsForm() {
  return (
    <form action="" className="flex  gap-4">
      <input
        type="text"
        placeholder="Year"
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
      />
      <input
        type="text"
        placeholder="Make"
        className="p-4 rounded-full w-full text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
      />
      <input
        type="text"
        placeholder="Model"
        className="p-4 rounded-full w-full text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
      />
      <input
        type="text"
        placeholder="Postal Code"
        className="p-4 rounded-full w-full text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
      />
      <button className="p-4 w-full rounded-full bg-primary-500 text-white hover:bg-primary-500/90 text-xl font-medium transition-colors duration-300 cursor-pointer">
        Get Offer
      </button>
    </form>
  );
}
