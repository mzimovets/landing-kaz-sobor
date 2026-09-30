type Props = {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  align = "center",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="uppercase tracking-[0.2em] text-xs text-accent-dark mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl text-secondary">{title}</h2>
      <div className="ornament mt-3 w-28" aria-hidden="true" />
    </div>
  );
}
