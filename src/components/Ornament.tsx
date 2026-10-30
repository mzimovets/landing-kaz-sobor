export default function Ornament({ className = "" }: { className?: string }) {
  return <div className={`ornament mx-auto my-4 ${className}`} aria-hidden="true" />;
}
