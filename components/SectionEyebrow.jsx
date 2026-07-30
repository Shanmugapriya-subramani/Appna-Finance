import IconTile from "@/components/IconTile";

export default function SectionEyebrow({ children, icon = null }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className="h-[1px] w-8"
        style={{ background: "linear-gradient(90deg,#D4AF37,transparent)" }}
      />
      <div className="flex items-center gap-3">
        {icon ? <IconTile icon={icon} boxed={false} size={14} /> : null}
        <span
          className="text-[12px] lg:text-[14px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: "#D4AF37", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
