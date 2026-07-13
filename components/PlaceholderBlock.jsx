const BG_CLASSES = {
  coral: "bg-coral",
  blush: "bg-blush",
  cream: "bg-cream border border-moss/15",
};

export default function PlaceholderBlock({
  label,
  tone = "blush",
  compact = false,
  className = "",
}) {
  const sizing = compact ? "aspect-square" : "min-h-[10rem]";
  return (
    <div
      className={`flex ${sizing} items-center justify-center rounded-lg ${BG_CLASSES[tone]} p-4 text-center ${className}`}
    >
      <p className="font-body text-sm font-semibold text-moss">{label}</p>
    </div>
  );
}
