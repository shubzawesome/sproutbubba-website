import { GrowthIcon } from "../icons";

const latest = [
  { value: "6.4 kg", label: "Weight" },
  { value: "61 cm", label: "Height" },
  { value: "41 cm", label: "Head" },
];

const recent = [
  { label: "Head", value: "41 cm", date: "26/6" },
  { label: "Weight", value: "6.4 kg", date: "26/6" },
  { label: "Height", value: "61 cm", date: "26/6" },
  { label: "Weight", value: "5.9 kg", date: "31/5" },
];

function RulerIcon() {
  return (
    <span className="relative h-3.5 w-5 rounded-[3px] border border-[#67a95a]">
      <span className="absolute left-1 top-0 h-1.5 w-px bg-[#67a95a]" />
      <span className="absolute left-2 top-0 h-1.5 w-px bg-[#67a95a]" />
      <span className="absolute left-3 top-0 h-1.5 w-px bg-[#67a95a]" />
    </span>
  );
}

export default function GrowthMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#fff7ef] text-[#4f3c34]">
      <div className="px-5 pt-12">
        <div className="mb-5 flex items-center justify-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#9bc9d7] text-[13px] font-bold text-white">
            M
          </span>
          <span className="text-[18px] font-bold text-[#4f3c34]">Maya</span>
          <span className="text-[14px] font-bold leading-none text-[#4f3c34]/75">
            ^
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-normal text-[#f08a61]">
              Growth
            </p>
            <h3 className="mt-1 text-[22px] font-bold leading-none text-[#4f3c34]">
              Latest details
            </h3>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#e6f1e6] text-[#67a95a]">
            <GrowthIcon className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {latest.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white px-2 py-3 text-center shadow-[0_12px_24px_-22px_rgba(79,60,52,0.35)]"
            >
              <div className="text-[16px] font-bold leading-tight text-[#5ca451]">
                {item.value}
              </div>
              <div className="mt-1 text-[10px] font-semibold text-[#9a9a9a]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[1.35rem] bg-[#e6f1e6] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-bold text-[#2f6d3c]">
                Steady progress
              </p>
              <p className="mt-0.5 text-[10px] font-medium leading-snug text-[#5d8063]">
                Tracking consistently since last month.
              </p>
            </div>
            <svg
              viewBox="0 0 82 40"
              className="h-10 w-20 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4 31C18 27 26 23 37 25C50 27 56 14 78 10"
                fill="none"
                stroke="#5ca451"
                strokeLinecap="round"
                strokeWidth="4"
              />
              {[4, 37, 78].map((x, i) => (
                <circle
                  key={x}
                  cx={x}
                  cy={i === 0 ? 31 : i === 1 ? 25 : 10}
                  r="3.5"
                  fill="#fff"
                  stroke="#5ca451"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        </div>

        <p className="mb-2 mt-5 text-[12px] font-bold text-[#4f3c34]">
          Recent measurements
        </p>
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_28px_-24px_rgba(79,60,52,0.38)]">
          {recent.map((row) => (
            <div
              key={`${row.label}-${row.value}-${row.date}`}
              className="flex items-center gap-3 border-b border-[#f0d9ce] px-3 py-3 last:border-b-0"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-[#eef8ec] text-[#67a95a]">
                <RulerIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-bold text-[#4f3c34]">
                  {row.label} - {row.value}
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#a8a8a8]">
                {row.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
