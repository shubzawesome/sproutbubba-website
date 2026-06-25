import { StatusBar, ScreenScroll, AppHeader, Pill } from "./ui";
import { PulseIcon } from "../icons";

const rows = [
  { n: "Now", dur: "0:48", gap: "4:55", active: true },
  { n: "#11", dur: "0:52", gap: "5:10" },
  { n: "#10", dur: "0:44", gap: "5:30" },
  { n: "#9", dur: "0:49", gap: "5:42" },
];

export default function ContractionMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <ScreenScroll>
        <AppHeader subtitle="Pregnancy mode" title="Contractions" />

        {/* live ring */}
        <div className="card-soft relative overflow-hidden rounded-3xl p-5">
          <div className="relative mx-auto grid h-36 w-36 place-items-center">
            <span className="absolute inset-0 rounded-full bg-sprout-300/40 animate-pulse-ring" />
            <span className="absolute inset-3 rounded-full bg-mint" />
            <div className="relative text-center">
              <PulseIcon className="mx-auto h-5 w-5 text-sprout-500" />
              <div className="mt-1 text-[30px] font-bold leading-none tracking-tight text-sprout-900">
                0:48
              </div>
              <div className="text-[10px] font-semibold text-ink-soft">this one</div>
            </div>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-sprout-400 py-3 text-[14px] font-bold text-sprout-900">
            Stop contraction
          </button>
        </div>

        {/* 5-1-1 guidance */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-mint p-3">
          <Pill tone="mint">5-1-1</Pill>
          <p className="text-[11.5px] font-medium leading-snug text-sprout-700">
            ~5 min apart · ~50s long · holding for 1h. Getting close — have your bag ready.
          </p>
        </div>

        {/* recent */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { n: "4:58", l: "Avg gap" },
            { n: "0:49", l: "Avg length" },
            { n: "12", l: "Last hour" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white p-2.5 text-center shadow-[0_6px_18px_-14px_rgba(15,61,39,0.3)]">
              <div className="text-[15px] font-bold text-sprout-900">{s.n}</div>
              <div className="text-[9px] font-medium text-ink-soft">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-1.5">
          {rows.map((r) => (
            <div
              key={r.n}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-[12px] ${
                r.active ? "bg-sprout-400/15 font-semibold text-sprout-800" : "bg-white text-ink-soft"
              }`}
            >
              <span className="w-10 font-medium">{r.n}</span>
              <span>{r.dur}</span>
              <span className="text-ink-soft">gap {r.gap}</span>
            </div>
          ))}
        </div>
      </ScreenScroll>
    </div>
  );
}
