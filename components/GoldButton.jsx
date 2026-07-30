"use client";

export default function GoldButton({
  children, onClick, variant = "solid", full = false, icon: Icon, type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[14px] font-semibold tracking-wide transition-all duration-250";

  if (variant === "solid") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${full ? "w-full" : ""} hover:-translate-y-0.5`}
        style={{
          background: "linear-gradient(135deg,#D4AF37,#F4C430)",
          color: "#0A0C10",
          boxShadow: "0 8px 24px rgba(212,175,55,0.28)",
        }}
      >
        {children}
        {Icon && <Icon size={16} strokeWidth={2.5} />}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${full ? "w-full" : ""}`}
      style={{
        background: "transparent",
        color: "#F2F1EC",
        border: "1px solid rgba(212,175,55,0.35)",
      }}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2.5} />}
    </button>
  );
}
