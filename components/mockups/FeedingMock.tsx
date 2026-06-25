import { StatusBar, ScreenScroll, AppHeader, Pill } from "./ui";
import { BottleIcon, HeartIcon, ClockIcon } from "../icons";

const events = [
  { t: "2:40 pm", k: "Breast · Left", d: "18 min", icon: HeartIcon, tone: "mint" as const, now: true },
  { t: "11:05 am", k: "Bottle · 120 ml", d: "Formula", icon: BottleIcon, tone: "sky" as const },
  { t: "8:20 am", k: "Breast · Right", d: "22 min", icon: HeartIcon, tone: "mint" as const },
];

export default function FeedingMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <ScreenScroll>
        <AppHeader subtitle="Today" title="Feeding" />

        {/* live timer card */}
        <div className="card-soft rounded-3xl p-4">
          <div className="flex items-center justify-between">
            <Pill tone="mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sprout-500" />
              Live · Left
            </Pill>
            <span className="text-[11px] font-medium text-ink-soft">Started 2:40</span>
          </div>
          <div className="mt-3 flex items-end gap-1">
            <span className="text-[40px] font-bold leading-none tracking-tight text-sprout-900">
              18
            </span>
            <span className="mb-1 text-sm font-semibold text-ink-soft">min</span>
            <span className="mb-1 ml-1 text-lg font-bold text-sprout-400">04</span>
            <span className="mb-1 text-sm font-semibold text-ink-soft">s</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-xl bg-sprout-400 py-2 text-[13px] font-semibold text-sprout-900">
              Pause
            </button>
            <button className="flex-1 rounded-xl bg-mint py-2 text-[13px] font-semibold text-sprout-700">
              Switch side
            </button>
          </div>
        </div>

        {/* daily summary */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { n: "7", l: "Feeds" },
            { n: "320", l: "ml" },
            { n: "1h 9m", l: "Nursed" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white p-3 text-center shadow-[0_6px_18px_-12px_rgba(15,61,39,0.3)]">
              <div className="text-[17px] font-bold text-sprout-900">{s.n}</div>
              <div className="text-[10px] font-medium text-ink-soft">{s.l}</div>
            </div>
          ))}
        </div>

        {/* timeline */}
        <p className="mb-2 mt-5 flex items-center gap-1.5 text-[12px] font-semibold text-ink-soft">
          <ClockIcon className="h-3.5 w-3.5" /> Timeline
        </p>
        <div className="relative space-y-3 pl-4">
          <span className="absolute left-[3px] top-1 h-[calc(100%-1rem)] w-px bg-line" />
          {events.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.t} className="relative">
                <span
                  className={`absolute -left-[13px] top-1.5 h-2 w-2 rounded-full ${
                    e.now ? "bg-sprout-400 ring-4 ring-sprout-100" : "bg-line"
                  }`}
                />
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_6px_18px_-14px_rgba(15,61,39,0.3)]">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-sprout-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-sprout-900">{e.k}</div>
                    <div className="text-[11px] text-ink-soft">{e.d}</div>
                  </div>
                  <span className="text-[11px] font-medium text-ink-soft">{e.t}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ScreenScroll>
    </div>
  );
}
