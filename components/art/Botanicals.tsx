import type { SVGProps } from "react";

/* Soft botanical accents + hand-drawn marks. Decorative only (aria-hidden). */

/** A single eucalyptus-style leafy sprig. */
export function Sprig({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M60 215C60 215 58 150 62 110C66 70 80 30 96 8"
        stroke="var(--color-sage)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        { cx: 64, cy: 110, rx: 22, ry: 12, rot: -28 },
        { cx: 56, cy: 130, rx: 22, ry: 12, rot: 24 },
        { cx: 70, cy: 86, rx: 20, ry: 11, rot: -34 },
        { cx: 62, cy: 66, rx: 19, ry: 10, rot: 22 },
        { cx: 80, cy: 48, rx: 17, ry: 9, rot: -40 },
        { cx: 74, cy: 30, rx: 15, ry: 8, rot: 18 },
      ].map((l, i) => (
        <ellipse
          key={i}
          cx={l.cx}
          cy={l.cy}
          rx={l.rx}
          ry={l.ry}
          transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
          fill={i % 2 ? "var(--color-mint-deep)" : "var(--color-sage)"}
          opacity={i % 2 ? 0.85 : 0.55}
        />
      ))}
    </svg>
  );
}

/** A small leafy branch, good flanking sections. */
export function LeafBranch({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M6 60C50 56 120 52 196 40"
        stroke="var(--color-sage)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[
        { x: 40, y: 57, r: -20 },
        { x: 70, y: 53, r: 20 },
        { x: 100, y: 50, r: -22 },
        { x: 130, y: 47, r: 22 },
        { x: 160, y: 44, r: -24 },
      ].map((l, i) => (
        <ellipse
          key={i}
          cx={l.x}
          cy={l.y}
          rx={20}
          ry={9}
          transform={`rotate(${l.r} ${l.x} ${l.y})`}
          fill={i % 2 ? "var(--color-mint-deep)" : "var(--color-sage)"}
          opacity={0.7}
        />
      ))}
    </svg>
  );
}

/** Hand-drawn underline squiggle that draws itself when revealed. */
export function HandUnderline({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 260 24"
      fill="none"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M6 14C46 6 92 4 132 9C168 13 214 18 254 8"
        stroke="var(--color-blush)"
        strokeWidth="4"
        strokeLinecap="round"
        data-draw
        style={{ ["--draw-len" as string]: 270, ["--draw-delay" as string]: "0.3s" }}
      />
      <path
        d="M30 19C70 13 150 12 210 17"
        stroke="var(--color-blush-soft)"
        strokeWidth="3"
        strokeLinecap="round"
        data-draw
        style={{ ["--draw-len" as string]: 200, ["--draw-delay" as string]: "0.55s" }}
      />
    </svg>
  );
}

/** Little hand-drawn heart accent. */
export function LittleHeart({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 30" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M16 27C16 27 3 19 3 10.5C3 6 6.5 3 10.5 3C13 3 15 4.5 16 6.5C17 4.5 19 3 21.5 3C25.5 3 29 6 29 10.5C29 19 16 27 16 27Z"
        stroke="var(--color-blush)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
