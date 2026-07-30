"use client";

export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 ${hover ? "hover:-translate-y-1" : ""} ${className}`}
      style={{
        background: "linear-gradient(160deg, rgba(23,27,34,0.9), rgba(15,17,22,0.9))",
        border: "1px solid rgba(212,175,55,0.12)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={(e) => { if (hover) e.currentTarget.style.borderColor = "rgba(244,196,48,0.4)"; }}
      onMouseLeave={(e) => { if (hover) e.currentTarget.style.borderColor = "rgba(212,175,55,0.12)"; }}
    >
      {children}
    </div>
  );
}
