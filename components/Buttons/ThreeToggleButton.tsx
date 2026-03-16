import { useState } from "react";

function ToggleButton({ selected, children, onClick }: any) {
  return (
    <button
      type="button"
      className={`flex-1 text-center relative z-10 font-medium transition-colors text-sm md:text-base ${
        selected
          ? "text-white dark:text-white"
          : "text-secondary-800 dark:text-blue-100"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function ChoiceToggle({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: { id: string; label: string }[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
}) {
  const tabIndex = tabs.findIndex((tab) => tab.id === selectedTab);
  const transformPercent = (tabIndex / tabs.length) * 200;

  return (
    <div className="relative flex items-center justify-between w-full sm:w-2/3 lg:w-1/2 border border-gray-300 dark:border-gray-700 dark:bg-zinc-900 rounded-md p-2">
      {tabs.map((tab) => (
        <ToggleButton
          key={tab.id}
          selected={selectedTab === tab.id}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.label}
        </ToggleButton>
      ))}

      <span
        className={`absolute bottom-0 left-0 h-full bg-primary-500 dark:bg-primary-600 rounded-md transition-all duration-300`}
        style={{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${transformPercent}%)`,
        }}
      />
    </div>
  );
}
