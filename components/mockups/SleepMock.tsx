import { StatusBar, ScreenScroll, AppHeader, Pill } from "./ui";
import { MoonIcon } from "../icons";

/* 7-day sleep bars (hours). */
const days = [
  { d: "M", h: 14.2 },
  { d: "T", h: 13.0 },
  { d: "W", h: 15.1 },
  { d: "T", h: 12.4 },
  { d: "F", h: 14.8 },
  { d: "S", h: 13.6 },
  { d: "S", h: 15.4 },
];
const max = 16;

export default function SleepMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <ScreenScroll>
        <AppHeader subtitle="This week" title="Sleep" />

        <div className="card-soft rounded-3xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-end gap-1">
                <span className="text-[34px] font-bold leading-none tracking-tight text-sprout-900">
                  14.1
                </span>
                <span className="mb-1 text-sm font-semibold text-ink-soft">h avg</span>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-soft">+0.6h vs last week</p>
            </div>
            <Pill tone="mint">
              <MoonIcon className="h-3.5 w-3.5" /> Healthy
            </Pill>
          </div>

          {/* chart */}
          <div className="mt-5 flex h-32 items-end justify-between gap-2">
            {days.map((day, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-sprout-300 to-sprout-400"
                    style={{
                      height: `${(day.h / max) * 100}%`,
                      ["--bar-delay" as string]: `${i * 80}ms`,
                    }}
                    data-bar
                  />
                </div>
                <span className="text-[10px] font-medium text-ink-soft">{day.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* last night breakdown */}
        <p className="mb-2 mt-5 text-[12px] font-semibold text-ink-soft">Last night</p>
        <div className="space-y-2">
          {[
            { l: "Night sleep", v: "11h 20m", w: "92%" },
            { l: "Longest stretch", v: "4h 05m", w: "62%" },
            { l: "Night wakings", v: "2", w: "20%" },
          ].map((r) => (
            <div key={r.l} className="rounded-2xl bg-white p-3 shadow-[0_6px_18px_-14px_rgba(15,61,39,0.3)]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-ink-soft">{r.l}</span>
                <span className="text-[13px] font-bold text-sprout-900">{r.v}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mint">
                <div className="h-full rounded-full bg-sprout-400" style={{ width: r.w }} />
              </div>
            </div>
          ))}
        </div>
      </ScreenScroll>
    </div>
  );
}
