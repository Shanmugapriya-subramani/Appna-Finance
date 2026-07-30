export default function IconTile({ icon: Icon, size = 16, boxed = true, label = null, className = "", labelClass = "", ...props }) {
  // Icon: a lucide-react component
  const iconColor = props.color || "#D4AF37";
  return (
    <div className={`flex items-center ${className}`}>
      {boxed ? (
        <div className="w-9 h-9 rounded-md bg-[#0F1116] border border-white/5 flex items-center justify-center">
          <Icon size={size} color={iconColor} strokeWidth={1.6} {...props} />
        </div>
      ) : (
        <Icon size={size} color={iconColor} {...props} />
      )}
      {label ? <span className={`ml-2 text-[11.5px] font-semibold text-[#D4AF37] ${labelClass}`}>{label}</span> : null}
    </div>
  );
}
