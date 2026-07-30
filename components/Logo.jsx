export default function Logo({ size = 40 }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 30% 30%, #1a1d24, #0A0C10)",
        border: "1.5px solid #D4AF37",
      }}
    >
      <img
        src="/logo_new.jpeg"
        alt="APPNA FINANCE logo"
        className="rounded-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
