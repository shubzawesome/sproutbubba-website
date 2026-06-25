import type { SVGProps } from "react";

/**
 * Wide, soft meadow scene with a mother holding her baby — used behind the
 * closing CTA. Swap-ready: replace with <Image src="/art/meadow.png" .../>.
 */
export default function MeadowMother({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 520 280"
      fill="none"
      role="img"
      aria-label="An illustration of a mother holding her baby in a sunlit meadow"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="md-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0c4" />
          <stop offset="100%" stopColor="#b6cda8" />
        </linearGradient>
        <linearGradient id="md-robe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4ece0" />
          <stop offset="100%" stopColor="#e7dcc8" />
        </linearGradient>
        <linearGradient id="md-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1d3ba" />
          <stop offset="100%" stopColor="#e7bd9d" />
        </linearGradient>
      </defs>

      {/* rolling hills */}
      <path d="M0 210C120 178 230 196 340 184C430 174 480 188 520 180V280H0Z" fill="url(#md-hill)" opacity="0.85" />
      <path d="M0 234C140 212 260 226 380 216C450 210 500 218 520 214V280H0Z" fill="#a7c298" opacity="0.8" />

      {/* grasses + flowers */}
      {Array.from({ length: 22 }).map((_, i) => {
        const x = 16 + i * 23;
        const tall = i % 3 === 0;
        return (
          <g key={i} className={i % 2 ? "animate-sway-slow" : "animate-sway"} style={{ transformOrigin: `${x}px 240px` }}>
            <path d={`M${x} 248C${x - 4} ${tall ? 214 : 226} ${x + 3} ${tall ? 210 : 224} ${x} ${tall ? 202 : 218}`} stroke="#7fa06e" strokeWidth="2.5" strokeLinecap="round" />
            {i % 4 === 0 && (
              <circle cx={x} cy={tall ? 200 : 216} r="4.5" fill={i % 8 === 0 ? "#e0a085" : "#f3e7c8"} />
            )}
          </g>
        );
      })}

      {/* mother + baby, seated centre-left */}
      <g transform="translate(196 96)">
        {/* robe */}
        <path d="M-26 150C-26 86 0 56 40 56C80 56 106 86 106 150Z" fill="url(#md-robe)" />
        {/* far arm */}
        <path d="M-10 96C-14 130 8 150 40 150C70 150 78 122 70 104C62 90 44 100 30 102C12 104 -4 100 -10 96Z" fill="url(#md-robe)" opacity="0.95" />
        {/* head */}
        <g transform="rotate(-10 36 30)">
          <circle cx="36" cy="-8" r="22" fill="#6f4b34" />
          <path d="M14 26C14 -2 26 -16 42 -16C58 -16 70 -2 70 26C70 34 66 40 60 44C62 22 50 8 36 8C20 8 14 24 16 46C8 40 14 34 14 26Z" fill="#6f4b34" />
          <path d="M20 26C20 6 30 -6 44 -6C58 -6 66 8 66 28C66 50 52 64 40 64C26 64 20 46 20 26Z" fill="url(#md-skin)" />
          <path d="M28 26C32 30 40 30 44 26" stroke="#5a4032" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M30 44C36 50 46 50 52 44" stroke="#b97f63" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <ellipse cx="30" cy="34" rx="7" ry="5" fill="#e8a98c" opacity="0.4" />
        </g>
        {/* baby bundle */}
        <path d="M22 118C22 92 40 78 60 82C84 86 94 110 86 132C78 152 54 158 38 150C26 144 22 132 22 118Z" fill="#f0c8b4" />
        <circle cx="56" cy="104" r="20" fill="#f7ddc6" />
        <path d="M48 90C52 84 64 84 68 92" stroke="#7c5740" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M48 104C50 107 55 107 57 104" stroke="#7c5740" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M61 104C63 107 68 107 70 104" stroke="#7c5740" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* near arm cradling */}
        <path d="M2 118C-4 146 14 168 48 170C78 172 90 150 84 134C78 120 60 128 44 130C24 132 8 126 2 118Z" fill="url(#md-robe)" />
      </g>

      {/* little floating hearts */}
      {[
        { x: 330, y: 70 },
        { x: 372, y: 110 },
      ].map((h, i) => (
        <path
          key={i}
          d={`M${h.x} ${h.y + 12}C${h.x} ${h.y + 12} ${h.x - 11} ${h.y + 5} ${h.x - 11} ${h.y - 4}C${h.x - 11} ${h.y - 9} ${h.x - 7} ${h.y - 12} ${h.x - 3} ${h.y - 12}C${h.x - 1} ${h.y - 12} ${h.x} ${h.y - 10} ${h.x} ${h.y - 9}C${h.x} ${h.y - 10} ${h.x + 2} ${h.y - 12} ${h.x + 4} ${h.y - 12}C${h.x + 8} ${h.y - 12} ${h.x + 12} ${h.y - 9} ${h.x + 12} ${h.y - 4}C${h.x + 12} ${h.y + 5} ${h.x} ${h.y + 12} ${h.x} ${h.y + 12}Z`}
          fill="#e0a085"
          opacity={0.8}
          className="animate-breathe"
          style={{ transformOrigin: `${h.x}px ${h.y}px`, animationDelay: `${i * 1.2}s` }}
        />
      ))}
    </svg>
  );
}
