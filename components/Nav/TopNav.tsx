"use client";
import { useEffect, useState } from "react";
import { Menu, PhoneIcon } from "lucide-react";
import Logo from "../ClientRender/Logo";

export default function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Reviews", href: "reviews" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          const offset = 120; // adjust for sticky nav height
          if (top - offset <= 0) {
            current = item.href;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // sticky nav offset
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <nav className="flex justify-between items-center min-h-17 px-6 sm:px-9 bg-gray-100 dark:bg-zinc-800 fixed w-full top-0 z-30 border-b-2 border-gray-200 dark:border-zinc-700">
      <Logo />

      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => {
          return (
            <a
              key={item.label}
              href={item.href} // can keep href for SEO/fallback
              onClick={handleScrollTo(item.href)} // smooth scroll without # in URL
              className={`relative px-3 py-2 text-md font-medium  transition-colors duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary-500 dark:after:bg-primary-600 after:transition-all after:duration-300
        ${activeSection === item.href ? "after:w-full text-secondary-800 dark:text-blue-100" : "after:w-0 hover:after:w-full text-gray-700 dark:text-gray-400 hover:text-secondary-800 dark:hover:text-blue-100 "}`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden block"
        aria-controls="mobile-listings-aside"
      >
        <Menu size={28} className="text-secondary-800 dark:text-blue-100" />
      </button>
      <div className="flex items-center gap-2 text-secondary-800 dark:text-blue-100 max-md:hidden hover:text-primary-500 dark:hover:text-primary-600 transition-colors duration-300">
        <PhoneIcon size={20} />
        <a className=" text-sm font-semibold " href="tel:(437) 505-2388">
          (437) 505-2388
        </a>
      </div>
    </nav>
  );
}
