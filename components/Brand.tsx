import Image from "next/image";

export default function Brand({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="Sprout Bubba"
        width={36}
        height={36}
        priority
        className="rounded-[10px] shadow-sm"
      />
      {showWordmark && (
        <span className="text-[19px] font-semibold tracking-tight text-sprout-900">
          Sprout&nbsp;Bubba
        </span>
      )}
    </span>
  );
}
