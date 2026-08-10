type PlaceholderArtProps = {
  label: string;
  ratio?: string;
  className?: string;
};

/**
 * Stands in for approved brand artwork/photography that has not yet been
 * supplied as a file. Swap the parent usage for a real <Image> once the
 * asset is provided — do not regenerate the artwork with AI.
 */
export default function PlaceholderArt({
  label,
  ratio = "4 / 3",
  className,
}: PlaceholderArtProps) {
  return (
    <div
      className={`placeholder-art ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="placeholder-art__label">{label}</span>
    </div>
  );
}
