import capitalize from "@/lib/capitalize";
import formatDate from "@/lib/formatDate";
import { CircleGauge } from "lucide-react";
import Link from "next/link";

export default function CarList({ carDetails }: { carDetails: any }) {
  return (
    <Link
      href={`/dashboard/details/${carDetails.id}`}
      className={` h-full  flex bg-white dark:bg-zinc-800 border border-secondary-800 rounded-lg shadow-md cursor-pointer hover:scale-101 transition-scale duration-300 ease-in-out    `}
    >
      <div className="w-full h-full p-5  flex flex-col justify-between gap-3">
        <div className="flex justify-between flex-wrap items-center  ">
          <div>
            <p
              className={`text-secondary-800 dark:text-gray-300  overflow-ellipsis line-clamp-1 font-bold text-sm sm:text-base md:text-lg pr-2.5 `}
            >
              {carDetails.year || "-"} {carDetails.make_name || "-"}{" "}
              {carDetails.model_name || "-"} {carDetails.trim_name || "-"}
            </p>
          </div>
          <p className="text-gray-500 sm:text-sm text-xs">
            {formatDate(carDetails.created_at)}
          </p>
        </div>
        <div className="max-w-3xl">
          <p className="text-gray-700 dark:text-gray-300 max-w-full overflow-ellipsis max-sm:hidden line-clamp-1 lg:line-clamp-2 text-sm">
            Transmission: {capitalize(carDetails.transmission)}
          </p>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Condition:{" "}
          <span
            className={`font-semibold ${
              carDetails.condition === "poor"
                ? "text-red-500"
                : carDetails.condition === "good"
                  ? "text-green-500"
                  : "text-blue-500"
            }`}
          >
            {capitalize(carDetails.condition)}
          </span>
        </p>
        <div className="w-full flex justify-between items-center mt-1">
          <p className="text-gray-500 flex items-center text-xs sm:text-base gap-2">
            <CircleGauge className="w-4 h-4" />
            {carDetails.mileage?.toLocaleString() || "-"} Km
          </p>
        </div>
      </div>
    </Link>
  );
}
