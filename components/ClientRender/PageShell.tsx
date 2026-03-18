"use client";
import { Suspense, useEffect, useState } from "react";
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
    <Suspense fallback={null}>
      <TopNav
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="min-h-screen bg-background dark:bg-zinc-900  ">
        {children}
      </main>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </Suspense>
  );
}
