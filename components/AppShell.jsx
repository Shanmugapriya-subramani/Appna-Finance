"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TopNav from "./TopNav";
import Footer from "./Footer";
import LoadingOverlay from "./LoadingOverlay";

export default function AppShell({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onStart() {
      setLoading(true);
    }
    window.addEventListener("app:nav-start", onStart);
    return () => window.removeEventListener("app:nav-start", onStart);
  }, []);

  useEffect(() => {
    // Hide overlay when route changes
    if (loading) setLoading(false);
  }, [pathname]);

  // Fallback to hide after 10s
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <>
      <TopNav />
      <LoadingOverlay visible={loading} />
      <main className="max-w-6xl mx-auto px-5 md:px-8">{children}</main>
      <Footer />
    </>
  );
}
