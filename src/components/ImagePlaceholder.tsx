type Props = {
  label: string;
  className?: string;
  ratio?: string;
  src?: string;
};

export default function ImagePlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
  src = "",
}: Props) {
  return (
    <div
      className={`img-placeholder overflow-hidden rounded-sm ${ratio} ${className}`}
      role="img"
      aria-label={label}
    >
      {src !== "" ? (
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5-9 9" />
        </svg>
      )}
    </div>
  );
}
