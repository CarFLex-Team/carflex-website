"use client";
import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Customers", href: "/customers" },
    { label: "Inventory", href: "/inventory" },
    { label: "Services", href: "/services" },
  ];

  return (
    <>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 z-20 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`h-screen flex flex-col bg-white border-l-2 border-gray-200 px-4 py-6 z-50 fixed right-0 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "w-64 translate-x-0" : "w-16 translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <img
            src="/Logo.png"
            alt="Logo"
            className={`w-16 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Sidebar"
            className="p-1 rounded-sm hover:bg-gray-100 cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="mt-10 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
