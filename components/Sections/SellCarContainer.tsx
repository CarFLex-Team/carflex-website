"use client";
import { useState } from "react";
import ToggleButton from "../Buttons/ToggleButton";
import VehicleDetailsForm from "../Forms/VehicleDetailsForm";
import VinForm from "../Forms/VinForm";
export default function SellCarContainer() {
  const [selectedTab, setSelectedTab] = useState("vehicle-details");
  return (
    <div className="bg-secondary-800/90  w-full flex flex-col items-center justify-center rounded-lg px-5 py-9 text-center">
      <div className="relative flex items-center justify-between w-full sm:w-1/2 md:w-2/3 lg:w-1/3 bg-gray-100/90 dark:bg-zinc-700 rounded-full p-2 ">
        <ToggleButton
          selected={selectedTab === "vehicle-details"}
          onClick={() => setSelectedTab("vehicle-details")}
        >
          Vehicle Details
        </ToggleButton>
        <ToggleButton
          selected={selectedTab === "vin"}
          onClick={() => setSelectedTab("vin")}
        >
          VIN
        </ToggleButton>

        <span
          className={`absolute bottom-0 left-0 h-full bg-primary-500 rounded-full transition-all duration-300 w-1/2 ${selectedTab === "vehicle-details" ? "rounded-r-none " : "rounded-l-none "}`}
          style={{
            transform:
              selectedTab === "vehicle-details"
                ? "translateX(0%)"
                : "translateX(100%)",
          }}
        />
      </div>
      <div className="w-full  mt-6">
        {selectedTab === "vehicle-details" ? (
          <VehicleDetailsForm />
        ) : (
          <VinForm />
        )}
      </div>
    </div>
  );
}
