export default function StatTicker({ value, label }) {
  return (
    <div
      className="rounded-2xl px-5 py-6 text-center"
      style={{
        background: "linear-gradient(160deg, rgba(23,27,34,0.85), rgba(12,14,18,0.85))",
        border: "1px solid rgba(212,175,55,0.14)",
      }}
    >
      <div
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
          fontWeight: 600,
          fontSize: "2.1rem",
          background: "linear-gradient(135deg,#F4C430,#D4AF37)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </div>
      <div className="text-[11px] tracking-[0.14em] uppercase mt-1" style={{ color: "#8A8F98" }}>
        {label}
      </div>
    </div>
  );
}
