export default function VinForm() {
  return (
    <form action="" className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Enter VIN"
        className="p-4 rounded-full  w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
      />
      <input
        type="text"
        placeholder="Postal Code"
        className="p-4 rounded-full w-full  text-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-secondary-800/40"
      />
      <button className="md:p-4 p-3 w-full rounded-full bg-primary-500 text-white hover:bg-primary-500/90 text-xl font-medium transition-colors duration-300 cursor-pointer">
        Get Offer
      </button>
    </form>
  );
}
