import { StatusBar, ScreenScroll, AppHeader, Pill } from "./ui";
import { GrowthIcon } from "../icons";

export default function GrowthMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <ScreenScroll>
        <AppHeader subtitle="Growth" title="Weight" />

        <div className="card-soft rounded-3xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-end gap-1">
                <span className="text-[34px] font-bold leading-none tracking-tight text-sprout-900">
                  6.4
                </span>
                <span className="mb-1 text-sm font-semibold text-ink-soft">kg</span>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-soft">at 16 weeks</p>
            </div>
            <Pill tone="mint">
              <GrowthIcon className="h-3.5 w-3.5" /> 62nd pct
            </Pill>
          </div>

          {/* percentile chart */}
          <svg viewBox="0 0 260 150" className="mt-4 w-full" role="img" aria-label="Growth percentile chart">
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5ccb7a" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#5ccb7a" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* grid */}
            {[30, 60, 90, 120].map((y) => (
              <line key={y} x1="14" x2="252" y1={y} y2={y} stroke="#e7ece9" strokeWidth="1" />
            ))}
            {/* percentile bands (faint) */}
            <path d="M14 120 C70 104 150 70 252 40" stroke="#cfe9d8" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
            <path d="M14 96 C70 80 150 46 252 18" stroke="#cfe9d8" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
            {/* baby curve */}
            <path d="M14 124 C70 112 140 82 252 52 L252 150 L14 150 Z" fill="url(#growthFill)" />
            <path
              d="M14 124 C70 112 140 82 252 52"
              stroke="#2c934e"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
              data-draw
              style={{ ["--draw-len" as string]: 300 }}
            />
            {/* points */}
            {[
              [14, 124],
              [80, 108],
              [150, 84],
              [210, 66],
              [252, 52],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === 4 ? 5 : 3}
                fill="#fff"
                stroke="#2c934e"
                strokeWidth="2.4"
                data-dot
                style={{ ["--dot-delay" as string]: `${0.9 + i * 0.12}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { n: "61 cm", l: "Length · 58th" },
            { n: "41 cm", l: "Head · 64th" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white p-3 shadow-[0_6px_18px_-14px_rgba(15,61,39,0.3)]">
              <div className="text-[17px] font-bold text-sprout-900">{s.n}</div>
              <div className="text-[10px] font-medium text-ink-soft">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-2xl bg-mint p-3">
          <p className="text-[12px] font-semibold text-sprout-700">Steady, healthy curve 🌱</p>
          <p className="text-[11px] text-sprout-700/80">Tracking consistently along the 60th percentile.</p>
        </div>
      </ScreenScroll>
    </div>
  );
}
