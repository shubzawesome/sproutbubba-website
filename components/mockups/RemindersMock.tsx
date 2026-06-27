import { StatusBar, ScreenScroll, AppHeader, Pill } from "./ui";
import { BellIcon, BottleIcon, DropIcon, CheckIcon, ClockIcon } from "../icons";

const upcoming = [
  { t: "Next feed", d: "due ~3:35 pm", icon: BottleIcon, tone: "mint" as const },
  { t: "Nappy check", d: "in 40 min", icon: DropIcon, tone: "sky" as const },
  { t: "Vitamin D drops", d: "this evening", icon: CheckIcon, tone: "amber" as const },
];

export default function RemindersMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <ScreenScroll>
        <AppHeader subtitle="Today" title="Reminders" />

        {/* gentle nudge card */}
        <div className="card-soft rounded-3xl p-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-sprout-600">
              <BellIcon className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-sprout-900">Time for a feed?</div>
              <div className="text-[11px] text-ink-soft">It&rsquo;s been 2h 55m</div>
            </div>
            <Pill tone="mint">Gentle</Pill>
          </div>
          <p className="mt-3 text-[12px] leading-snug text-ink-soft">
            Maya usually feeds around now. No pressure — just a little nudge so
            you don&rsquo;t have to keep watch.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-xl bg-sprout-400 py-2 text-[12.5px] font-semibold text-sprout-900">
              Log a feed
            </button>
            <button className="flex-1 rounded-xl bg-mint py-2 text-[12.5px] font-semibold text-sprout-700">
              Snooze 20m
            </button>
          </div>
        </div>

        {/* upcoming */}
        <p className="mb-2 mt-5 flex items-center gap-1.5 text-[12px] font-semibold text-ink-soft">
          <ClockIcon className="h-3.5 w-3.5" /> Up next
        </p>
        <div className="space-y-2">
          {upcoming.map((u) => {
            const Icon = u.icon;
            return (
              <div key={u.t} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_6px_18px_-14px_rgba(15,61,39,0.3)]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-sprout-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-sprout-900">{u.t}</div>
                  <div className="text-[11px] text-ink-soft">{u.d}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl bg-mint p-3">
          <p className="text-[12px] font-semibold text-sprout-700">You&rsquo;re all caught up 🌿</p>
          <p className="text-[11px] text-sprout-700/80">Sprout watches the clock so you don&rsquo;t have to.</p>
        </div>
      </ScreenScroll>
    </div>
  );
}
