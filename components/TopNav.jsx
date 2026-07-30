"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NAV } from "@/lib/nav";
import Logo from "./Logo";
import GoldButton from "./GoldButton";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));


  return (
    <header
      className="sticky top-0 z-40 relative"
      style={{
        background: "rgba(10,12,16,0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          scroll={pathname === "/" ? false : undefined}
          className="flex items-center gap-3 group"
          onClick={(e) => {
            // Prevent clicking logo from reloading/scrolling when already on home
            if (pathname === "/") {
              e.preventDefault();
              setMenuOpen(false);
              return;
            }
            setMenuOpen(false);
            if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app:nav-start"));
          }}
        >
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Logo size={38} />
          </motion.div>
          <div className="text-left leading-tight hidden sm:block">
            <div
              style={{
                fontFamily:
                  "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                fontWeight: 600,
                fontSize: "1.08rem",
                color: "#F2F1EC",
              }}
            >
              APPNA FINANCE
            </div>
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#D4AF37" }}
            >
              Learn · Grow · Prosper
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = isActive(n.href);
            // Prevent navigation for already-active desktop tab to avoid page jump when user is scrolled
            if (active) {
              return (
                <div
                  key={n.href}
                  className="relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors"
                  style={{ color: "#0A0C10" }}
                  role="button"
                  aria-current="page"
                >
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #F4C430 100%)",
                      boxShadow: "0 2px 10px rgba(212,175,55,0.3)",
                    }}
                  />
                  <span className="relative z-10">{n.label}</span>
                </div>
              );
            }

            return (
              <Link
                key={n.href}
                href={n.href}
                scroll={active ? false : undefined}
                className="relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors"
                style={{ color: "#A9AEB6" }}
                onClick={(e) => {
                  // Prevent navigation behavior when clicking the same route (avoid jump)
                  if (active) {
                    e.preventDefault();
                    return;
                  }
                  // Dispatch global navigation start event for the layout to show overlay
                  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app:nav-start"));
                }}
              >
                <span className="relative z-10">{n.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/hub" onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("app:nav-start"))}>
            <GoldButton icon={ArrowRight}>Start Learning</GoldButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#F2F1EC]"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X color="#F2F1EC" size={24} />
          ) : (
            <Menu color="#F2F1EC" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}


      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden px-5 pb-5 flex flex-col gap-2 bg-[#0A0C10]/95"
          style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}
        >
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                scroll={active ? false : undefined}
                onClick={(e) => {
                  // If this nav item is already active, prevent navigation to avoid jumping when page is scrolled
                  if (active) {
                    e.preventDefault();
                    setMenuOpen(false);
                    return;
                  }
                  setMenuOpen(false);
                  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app:nav-start"));
                }}
                className="px-4 py-2.5 rounded-xl text-[14.5px] font-medium transition-all"
                style={{
                  color: active ? "#0A0C10" : "#F2F1EC",
                  background: active
                    ? "linear-gradient(135deg,#D4AF37,#F4C430)"
                    : "rgba(255,255,255,0.03)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link href="/assistant" onClick={() => setMenuOpen(false)}>
              <GoldButton icon={ArrowRight} className="w-full justify-center">
                Start Learning
              </GoldButton>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
