import { CrossIcon } from "./Icons";

export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament my-4 ${className}`} aria-hidden="true">
      <CrossIcon className="h-4 w-4 shrink-0" />
    </div>
  );
}
