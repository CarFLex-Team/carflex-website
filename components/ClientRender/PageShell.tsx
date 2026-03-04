"use client";
import { useEffect, useState } from "react";
import Sidebar from "../Nav/Sidebar";
import TopNav from "../Nav/TopNav";
import { usePathname } from "next/navigation";
export default function PageShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);
  return (
    <>
      <TopNav onMenuClick={() => setSidebarOpen(true)} />

      <main className="min-h-screen  ">{children}</main>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
}
