"use client";
import capitalize from "@/lib/capitalize";
import formatDate from "@/lib/formatDate";
import { ArrowLeft } from "lucide-react";
import useSWR from "swr";

export default function CarDetails({ vehicleId }: { vehicleId: string }) {
  const { data, error } = useSWR(`/api/offers/${vehicleId}`, (url) =>
    fetch(url).then((res) => res.json()),
  );
  console.log("Fetched vehicle data:", data, "Error:", error);
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load vehicle data.</p>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-500 dark:border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    );

  // Find the vehicle by id
  const vehicle = data[0];

  if (!vehicle)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Vehicle not found.</p>
      </div>
    );

  // Capitalize first letter utility

  return (
    <div className="min-h-screen pt-20 pb-5 px-7 text-secondary-800 dark:text-blue-100  ">
      <div className=" bg-white dark:bg-zinc-800 border border-secondary-800 rounded-2xl shadow-md p-15 ">
        <a
          href="/dashboard"
          className="p-2 block w-fit rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
        </a>
        <p
          className={`text-secondary-800 dark:text-blue-100  overflow-ellipsis font-bold text-2xl sm:text-3xl md:text-4xl pr-1 mt-2 `}
        >
          {vehicle.year || "-"} {vehicle.make_name || "-"}{" "}
          {vehicle.model_name || "-"} {vehicle.trim_name || "-"}
        </p>
        {/* <div className="flex sm:w-2/3  md:w-2/5 gap-3 justify-between my-1 flex-wrap">
          <div>
            <strong>Colour:</strong> {capitalize(vehicle.colour)}
          </div>
          <div>
            <strong>Transmission:</strong> {capitalize(vehicle.transmission)}
          </div>
        </div> */}
        <p className="text-gray-500 sm:text-sm text-xs">
          {formatDate(vehicle.created_at)}
        </p>

        <section className="grid grid-cols-1  md:grid-cols-3  mt-6 gap-4 border-b border-gray-300 dark:border-zinc-700 pb-6 ">
          {/* <h3 className="col-span-1 md:col-span-3 font-semibold text-3xl">
            Basic Info
          </h3> */}
          <div>
            <strong>Mileage:</strong> {vehicle.mileage?.toLocaleString() || "-"}{" "}
            km
          </div>
          <div>
            <strong>Colour:</strong> {capitalize(vehicle.colour)}
          </div>
          <div>
            <strong>Transmission:</strong> {capitalize(vehicle.transmission)}
          </div>
        </section>
        <section className="grid grid-cols-1  md:grid-cols-2 mt-6  gap-4 border-b border-gray-300 dark:border-zinc-700 pb-6 ">
          <h3 className="col-span-1  md:col-span-2 font-semibold text-3xl">
            Owner Info
          </h3>
          <div>
            <strong>Name:</strong> {capitalize(vehicle.full_name) || "-"}
          </div>
          <div>
            <strong>Email:</strong> {vehicle.email || "-"}
          </div>
          <div>
            <strong>Phone:</strong> {vehicle.phone || "-"}
          </div>
          <div>
            <strong>Postal Code:</strong> {vehicle.postal_code || "-"}
          </div>
        </section>
        {/* Ownership & Legal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-b border-gray-300 dark:border-zinc-700 pb-6">
          <h3 className="md:col-span-2 font-semibold text-3xl">
            Ownership & Legal
          </h3>
          <div>
            <strong>Sole Owner:</strong> {vehicle.sole_owner ? "Yes" : "No"}
          </div>
          <div>
            <strong>Has Accident:</strong> {vehicle.has_accident ? "Yes" : "No"}
          </div>
          <div>
            <strong>Keys:</strong> {vehicle.keys || "-"}
          </div>
          <div>
            <strong>Loan:</strong> {vehicle.is_loan ? "Yes" : "No"}
          </div>
          <div>
            <strong>Loan Company:</strong> {vehicle.loan_company || "-"}
          </div>
          <div>
            <strong>Loan Balance:</strong>{" "}
            {vehicle.loan_balance !== "0.00" ? vehicle.loan_balance : "-"}
          </div>
        </section>
        {/* Condition & Damage */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border-b border-gray-300 dark:border-zinc-700 pb-6">
          <h3 className="md:col-span-2 font-semibold text-3xl">
            Condition & Damage
          </h3>
          <div>
            <strong>Condition:</strong> {capitalize(vehicle.condition)}
          </div>

          <div>
            <strong>Drivable:</strong> {vehicle.is_drivable ? "Yes" : "No"}
          </div>
          <div>
            <strong>Exterior Damage:</strong>{" "}
            {vehicle.exterior_damage?.join(", ") || "-"}
          </div>
          <div>
            <strong>Interior Damage:</strong>{" "}
            {vehicle.interior_damage?.join(", ") || "-"}
          </div>
          <div>
            <strong>Mechanical Issues Found:</strong>{" "}
            {vehicle.mechanical_issues_found ? "Yes" : "No"}
          </div>
          <div>
            <strong>Mechanical Issues:</strong>{" "}
            {vehicle.mechanical_issues?.join(", ") || "-"}
          </div>
          <div>
            <strong>Disclosures:</strong>{" "}
            {vehicle.disclosures?.join(", ") || "-"}
          </div>
          <div>
            <strong>Claims:</strong> ${vehicle.total_claims}
          </div>
        </section>
        {/* Tires */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 border-b border-gray-300 dark:border-zinc-700 pb-6">
          <h3 className="md:col-span-3 font-semibold text-3xl">Tires</h3>
          <div>
            <strong>Number of Tires:</strong> {vehicle.number_of_tires || "-"}
          </div>
          <div>
            <strong>Tires Kind:</strong> {vehicle.tires_kind || "-"}
          </div>
          <div>
            <strong>Tires Replaced:</strong> {vehicle.tires_replaced || "-"}
          </div>
        </section>
        {/* Features & Extras */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
          <h3 className="md:col-span-2 font-semibold text-3xl">
            Features & Extras
          </h3>
          <div>
            <strong>Features:</strong> {vehicle.features?.join(", ") || "-"}
          </div>
          <div>
            <strong>Extra Features:</strong> {vehicle.extra_features || "-"}
          </div>
        </section>
      </div>
    </div>
  );
}
