const BG_CLASSES = {
  coral: "bg-coral",
  blush: "bg-blush",
  cream: "bg-cream border border-moss/15",
};

// Coral/Blush are light pastels — text on top must be Charcoal (Moss/Forest
// text on pink backgrounds is the specific combination the brand rules forbid).
const TEXT_CLASSES = {
  coral: "text-charcoal",
  blush: "text-charcoal",
  cream: "text-moss",
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
      <p className={`font-body text-sm font-semibold ${TEXT_CLASSES[tone]}`}>{label}</p>
    </div>
  );
}
