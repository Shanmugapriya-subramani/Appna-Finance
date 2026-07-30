export default function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-colors"
      style={{
        color: "#F2F1EC",
        background: "rgba(212,175,55,0.07)",
        border: "1px solid rgba(212,175,55,0.22)",
      }}
    >
      {children}
    </span>
  );
}
