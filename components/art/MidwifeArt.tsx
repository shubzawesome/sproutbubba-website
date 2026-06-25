import type { SVGProps } from "react";

/**
 * Hand-built "caring midwife with a tablet" illustration. Swap-ready: replace
 * with <Image src="/art/midwife.png" .../> when real artwork exists.
 */
export default function MidwifeArt({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      role="img"
      aria-label="An illustration of a caring midwife reviewing a baby's data on a tablet"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="mw-bg" cx="50%" cy="44%" r="60%">
          <stop offset="0%" stopColor="#eaf1e6" />
          <stop offset="100%" stopColor="#dce8d8" />
        </radialGradient>
        <linearGradient id="mw-scrub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fa389" />
          <stop offset="100%" stopColor="#5f876f" />
        </linearGradient>
        <linearGradient id="mw-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1d3ba" />
          <stop offset="100%" stopColor="#e7bd9d" />
        </linearGradient>
      </defs>

      <circle cx="220" cy="210" r="196" fill="url(#mw-bg)" />

      {/* shoulders / scrubs */}
      <path d="M96 430C96 330 140 286 220 286C300 286 344 330 344 430Z" fill="url(#mw-scrub)" />
      {/* collar */}
      <path d="M188 296L220 326L252 296" stroke="#4f7460" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* stethoscope */}
      <path
        d="M196 300C190 340 196 372 226 372C256 372 262 344 258 314"
        stroke="#3f5a4a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="226" cy="382" r="11" fill="#cdd9c8" stroke="#3f5a4a" strokeWidth="4" />

      {/* neck + head */}
      <path d="M200 268C200 244 240 244 240 268L240 292L200 292Z" fill="url(#mw-skin)" />
      {/* hair */}
      <path
        d="M156 196C156 142 186 110 220 110C254 110 284 142 284 196C284 214 276 226 266 232C268 196 252 168 220 168C188 168 172 196 174 232C164 226 156 214 156 196Z"
        fill="#4a3526"
      />
      {/* face */}
      <path d="M178 196C178 166 196 148 220 148C244 148 262 168 262 198C262 232 242 256 220 256C196 256 178 230 178 196Z" fill="url(#mw-skin)" />
      <ellipse cx="196" cy="214" rx="11" ry="7" fill="#e8a98c" opacity="0.45" />
      <ellipse cx="244" cy="214" rx="11" ry="7" fill="#e8a98c" opacity="0.45" />
      {/* friendly eyes */}
      <circle cx="202" cy="196" r="3.4" fill="#4a3526" />
      <circle cx="238" cy="196" r="3.4" fill="#4a3526" />
      {/* warm smile */}
      <path d="M204 224C214 234 226 234 236 224" stroke="#b97f63" strokeWidth="3.4" strokeLinecap="round" fill="none" />

      {/* arm holding tablet */}
      <path d="M300 360C334 348 352 372 344 404C340 420 320 426 300 420Z" fill="url(#mw-scrub)" />

      {/* tablet showing baby data */}
      <g transform="rotate(-9 300 372)">
        <rect x="262" y="332" width="92" height="116" rx="12" fill="#fffdf8" stroke="#d8cbb6" strokeWidth="3" />
        {/* mini heart */}
        <path
          d="M308 372C308 372 296 365 296 356C296 351 300 348 304 348C306 348 308 350 308 351C309 350 311 348 313 348C317 348 321 351 321 356C321 365 308 372 308 372Z"
          fill="#e0a085"
        />
        {/* heartbeat line */}
        <path d="M272 396H288L294 384L302 408L308 396H344" stroke="#5f876f" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="276" y="418" width="64" height="6" rx="3" fill="#e7efe3" />
        <rect x="276" y="430" width="44" height="6" rx="3" fill="#e7efe3" />
      </g>

      {/* hand */}
      <ellipse cx="300" cy="416" rx="14" ry="11" fill="url(#mw-skin)" transform="rotate(-9 300 416)" />
    </svg>
  );
}
