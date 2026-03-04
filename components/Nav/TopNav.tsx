"use client";
import { Menu } from "lucide-react";
export default function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  const navItems = [
    { label: "Sell My car", href: "/sell-car" },
    { label: "Reviews", href: "#reviews" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className="flex justify-between items-center min-h-17  px-6 sm:px-9 bg-gray-100 fixed  w-full top-0 z-30 border-b-2 border-gray-200 "
      aria-label="Listings navigation"
    >
      <img src="logo.png" alt="Carflex Logo" className="w-24" />
      <div className="w-fit max-md:hidden flex items-center gap-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-secondary-800 hover:bg-gray-200 px-3 py-2 text-md font-medium rounded-lg transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
      <button
        onClick={onMenuClick}
        className="md:hidden md:w-25 max-md:block"
        aria-controls="mobile-listings-aside"
      >
        <Menu size={28} />
      </button>
    </nav>
  );
}
