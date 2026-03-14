"use client";
import { useEffect, useState } from "react";
import TrackedImage from "./TrackedImage";

export default function Logo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDark(prefersDark);

    // Optional: listen to system changes
    const listener = (e: MediaQueryListEvent) => setDark(e.matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  }, []);

  return (
    <img
      src={dark ? "/Logo-dark.png" : "/Logo-light.png"}
      alt="Carflex Logo"
      className="w-24"
    />
  );
}
