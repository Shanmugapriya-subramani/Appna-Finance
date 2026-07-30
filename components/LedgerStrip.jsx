export default function LedgerStrip() {
  const bars = [38, 52, 46, 64, 58, 74, 68, 86, 80, 96];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-3 rounded-t-sm ledger-bar"
          style={{
            height: `${h}%`,
            background:
              i === bars.length - 1
                ? "linear-gradient(180deg,#F4C430,#D4AF37)"
                : "rgba(212,175,55,0.18)",
            animationDelay: `${i * 90}ms`,
          }}
        />
      ))}
    </div>
  );
}
