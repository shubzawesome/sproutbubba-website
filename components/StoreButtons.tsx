import type { ReactNode } from "react";

function Badge({
  href,
  glyph,
  top,
  bottom,
  variant = "dark",
}: {
  href: string;
  glyph: ReactNode;
  top: string;
  bottom: string;
  variant?: "dark" | "light";
}) {
  const dark = variant === "dark";
  return (
    <a
      href={href}
      aria-label={`${top} ${bottom}`}
      className={[
        "group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300",
        "active:scale-[0.98]",
        dark
          ? "bg-sprout-900 text-white hover:bg-[#0a2c1c] shadow-[0_10px_30px_-12px_rgba(15,61,39,0.55)]"
          : "bg-white text-sprout-900 border border-line hover:border-sprout-300 shadow-[0_10px_30px_-16px_rgba(15,61,39,0.4)]",
      ].join(" ")}
    >
      <span className="shrink-0">{glyph}</span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider opacity-70">
          {top}
        </span>
        <span className="text-[17px] font-semibold -mt-0.5">{bottom}</span>
      </span>
    </a>
  );
}

const AppleGlyph = ({ className = "" }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.7 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.9-3.6.9-.7 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 3 2.4 1.2-.05 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.75 1.3-.02 2.1-1.2 2.9-2.4.9-1.3 1.3-2.6 1.3-2.7-.03-.01-2.5-1-2.6-3.8ZM14.3 5.7c.66-.8 1.1-1.9 1-3-.95.04-2.1.63-2.8 1.43-.6.7-1.13 1.83-1 2.9 1.05.08 2.13-.53 2.8-1.33Z" />
  </svg>
);

const PlayGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path d="M4 3.2c-.4.25-.6.7-.6 1.3v15c0 .6.2 1.05.6 1.3l8.4-8.6L4 3.2Z" fill="#34d27f" />
    <path d="M16.6 9.1 13 12.5l3.6 3.4 4.2-2.4c.9-.5.9-1.6 0-2.1l-4.2-2.3Z" fill="#ffc940" />
    <path d="M4 3.2 12.4 12 16 8.5 5.6 2.6c-.6-.35-1.2-.3-1.6.6Z" fill="#34d2d2" />
    <path d="M4 20.8c.4.9 1 .95 1.6.6L16 15.5l-3.6-3.4L4 20.8Z" fill="#ff5763" />
  </svg>
);

export function AppStoreButton() {
  return (
    <Badge
      href="#download"
      variant="dark"
      glyph={<AppleGlyph />}
      top="Download on the"
      bottom="App Store"
    />
  );
}

export function GooglePlayButton() {
  return (
    <Badge
      href="#download"
      variant="light"
      glyph={<PlayGlyph />}
      top="Get it on"
      bottom="Google Play"
    />
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AppStoreButton />
      <GooglePlayButton />
    </div>
  );
}
