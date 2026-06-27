import { Sprig, LeafBranch } from "./Botanicals";

/**
 * Faint, decorative botanical accents to carry the hero's illustrated warmth
 * across sections. Desktop-only, low opacity, non-interactive. Place inside a
 * `relative overflow-hidden` section.
 */
export default function SectionLeaves({
  variant = "right",
}: {
  variant?: "right" | "left" | "both" | "branch-bl" | "branch-br";
}) {
  if (variant === "both") {
    return (
      <>
        <Sprig
          aria-hidden
          className="animate-sway-slow pointer-events-none absolute -left-4 top-10 hidden h-40 w-20 opacity-35 lg:block"
        />
        <Sprig
          aria-hidden
          className="animate-sway pointer-events-none absolute -right-4 bottom-10 hidden h-40 w-20 -scale-x-100 opacity-35 lg:block"
        />
      </>
    );
  }
  if (variant === "left") {
    return (
      <Sprig
        aria-hidden
        className="animate-sway-slow pointer-events-none absolute -left-5 top-16 hidden h-44 w-24 opacity-35 lg:block"
      />
    );
  }
  if (variant === "branch-bl") {
    return (
      <LeafBranch
        aria-hidden
        className="animate-sway pointer-events-none absolute -left-6 bottom-8 hidden h-24 w-44 opacity-40 lg:block"
      />
    );
  }
  if (variant === "branch-br") {
    return (
      <LeafBranch
        aria-hidden
        className="animate-sway-slow pointer-events-none absolute -right-6 bottom-8 hidden h-24 w-44 -scale-x-100 opacity-40 lg:block"
      />
    );
  }
  // right (default)
  return (
    <Sprig
      aria-hidden
      className="animate-sway pointer-events-none absolute -right-5 top-14 hidden h-44 w-24 -scale-x-100 opacity-35 lg:block"
    />
  );
}
