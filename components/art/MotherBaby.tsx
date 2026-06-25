import type { SVGProps } from "react";

/**
 * Hand-built, warm "mother cradling baby" illustration (Calm/Headspace style).
 * Swap-ready: to use real watercolour art, drop a file in /public/art and
 * replace <MotherBaby/> with <Image src="/art/hero.png" .../> at the same size.
 */
export default function MotherBaby({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      role="img"
      aria-label="An illustration of a mother tenderly cradling her sleeping baby"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="mb-bg" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#f7ede1" />
          <stop offset="60%" stopColor="#f1ddcf" />
          <stop offset="100%" stopColor="#e7d2c2" />
        </radialGradient>
        <linearGradient id="mb-robe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b3c4ac" />
          <stop offset="100%" stopColor="#93a890" />
        </linearGradient>
        <linearGradient id="mb-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1d3ba" />
          <stop offset="100%" stopColor="#e7bd9d" />
        </linearGradient>
        <linearGradient id="mb-skin2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7ddc6" />
          <stop offset="100%" stopColor="#efcaac" />
        </linearGradient>
        <linearGradient id="mb-blanket" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d2bf" />
          <stop offset="100%" stopColor="#e9b59c" />
        </linearGradient>
      </defs>

      {/* backdrop circle */}
      <circle cx="240" cy="220" r="206" fill="url(#mb-bg)" />

      {/* botanical sprigs behind */}
      {[
        { x: 70, y: 360, r: -18, s: 1 },
        { x: 410, y: 350, r: 22, s: -1 },
      ].map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.r}) scale(${b.s} 1)`} opacity="0.7">
          <path d="M0 0C20 -10 44 -34 56 -78" stroke="#9aab95" strokeWidth="3" strokeLinecap="round" />
          {[10, 26, 42, 56].map((d, j) => (
            <ellipse
              key={j}
              cx={d * 0.42}
              cy={-d}
              rx="15"
              ry="7"
              transform={`rotate(${j % 2 ? 28 : -28} ${d * 0.42} ${-d})`}
              fill={j % 2 ? "#bcd0b6" : "#9aab95"}
              opacity="0.85"
            />
          ))}
        </g>
      ))}

      {/* mother's body / robe */}
      <path
        d="M120 460C120 360 150 300 240 300C330 300 360 360 360 460Z"
        fill="url(#mb-robe)"
      />
      {/* robe fold highlight */}
      <path
        d="M240 312C200 320 178 360 172 456"
        stroke="#c4d2bd"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* mother's far arm cradling underneath */}
      <path
        d="M150 392C150 392 196 470 300 452C356 442 352 392 318 380C300 374 250 372 220 380"
        fill="url(#mb-robe)"
      />

      {/* mother neck + head */}
      <g transform="rotate(-12 232 150)">
        <path d="M214 250C214 224 256 224 256 250L256 274L214 274Z" fill="url(#mb-skin)" />
        {/* hair back / bun */}
        <circle cx="226" cy="78" r="34" fill="#6f4b34" />
        <path
          d="M168 150C168 96 200 64 236 64C272 64 300 96 300 150C300 168 292 182 280 190C284 150 268 120 236 120C206 120 192 150 196 192C182 182 168 172 168 150Z"
          fill="#6f4b34"
        />
        {/* face */}
        <path
          d="M196 150C196 120 214 102 238 102C262 102 280 122 280 152C280 188 258 214 236 214C212 214 196 186 196 150Z"
          fill="url(#mb-skin)"
        />
        {/* cheek blush */}
        <ellipse cx="214" cy="170" rx="12" ry="8" fill="#e8a98c" opacity="0.45" />
        {/* closed eye (peaceful) */}
        <path d="M206 150C212 156 222 156 228 150" stroke="#5a4032" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* soft smile */}
        <path d="M210 188C218 196 230 196 240 188" stroke="#b97f63" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* nose hint */}
        <path d="M200 166C196 172 198 178 204 178" stroke="#d6a382" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>

      {/* baby swaddle */}
      <path
        d="M214 372C214 332 244 312 276 318C312 324 330 356 322 392C314 426 280 442 250 432C224 424 214 402 214 372Z"
        fill="url(#mb-blanket)"
      />
      <path
        d="M236 330C228 352 230 388 252 410"
        stroke="#f3dccb"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* baby head */}
      <circle cx="262" cy="322" r="34" fill="url(#mb-skin2)" />
      {/* baby hair tuft */}
      <path d="M250 296C256 286 272 286 278 298" stroke="#7c5740" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* baby closed eyes */}
      <path d="M250 322C253 326 259 326 262 322" stroke="#7c5740" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M268 322C271 326 277 326 280 322" stroke="#7c5740" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      {/* baby cheek + smile */}
      <ellipse cx="252" cy="334" rx="7" ry="5" fill="#e8a98c" opacity="0.5" />
      <path d="M258 336C261 339 267 339 270 336" stroke="#c98a6c" strokeWidth="2.4" strokeLinecap="round" fill="none" />

      {/* mother's near arm wrapping over the baby */}
      <path
        d="M196 372C188 408 210 446 256 452C300 458 318 430 312 408C306 388 286 396 268 400C244 404 214 398 208 372Z"
        fill="url(#mb-robe)"
        opacity="0.97"
      />
      {/* hand resting on baby */}
      <path d="M300 410C314 410 322 420 320 432C318 442 306 444 298 440" fill="url(#mb-skin)" />

      {/* floating heart */}
      <path
        d="M338 150C338 150 326 143 326 134C326 129 330 126 334 126C336 126 338 127 339 129C340 127 342 126 344 126C348 126 352 129 352 134C352 143 338 150 338 150Z"
        fill="#e0a085"
        className="animate-breathe"
        style={{ transformOrigin: "339px 138px" }}
      />
    </svg>
  );
}
