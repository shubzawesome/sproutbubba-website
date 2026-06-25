import type { ReactNode } from "react";

/* Shared chrome used by every in-app mockup screen. */

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "bg-white" : "bg-sprout-900";
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold">
      <span className={dark ? "text-white" : "text-sprout-900"}>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className={`h-2.5 w-2.5 rounded-[2px] ${c} opacity-70`} />
        <span className={`h-2.5 w-3.5 rounded-[2px] ${c} opacity-85`} />
        <span className={`h-2.5 w-5 rounded-[3px] ${c}`} />
      </div>
    </div>
  );
}

export function ScreenScroll({ children }: { children: ReactNode }) {
  return <div className="h-full overflow-hidden px-5 pt-7">{children}</div>;
}

export function AppHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4 mt-1">
      {subtitle && (
        <p className="text-[11px] font-semibold uppercase tracking-wider text-sprout-500">
          {subtitle}
        </p>
      )}
      <h3 className="text-[22px] font-bold tracking-tight text-sprout-900">
        {title}
      </h3>
    </div>
  );
}

export function Pill({
  children,
  tone = "mint",
}: {
  children: ReactNode;
  tone?: "mint" | "amber" | "sky";
}) {
  const tones = {
    mint: "bg-mint text-sprout-700",
    amber: "bg-amber-50 text-amber-700",
    sky: "bg-sky-50 text-sky-700",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
