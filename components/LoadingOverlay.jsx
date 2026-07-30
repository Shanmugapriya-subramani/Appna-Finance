"use client";

import { motion } from "framer-motion";

export default function LoadingOverlay({ visible = false, label = "Loading page…" }) {
  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm pointer-events-auto" />
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-14 h-14 rounded-full border-4 border-t-[#D4AF37] border-r-transparent border-b-transparent border-l-transparent"
          />
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.9, repeatType: "reverse" }}
            className="text-[#F2F1EC] text-sm font-medium"
          >
            {label}
          </motion.div>
        </div>
      </div>
    </>
  );
}
