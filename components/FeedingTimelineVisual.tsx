import Image from "next/image";

const rows = [
  { time: "2:40", title: "Nursed left", detail: "18 min", tone: "mint" },
  { time: "11:05", title: "Bottle", detail: "120 ml", tone: "blush" },
  { time: "8:20", title: "Nursed right", detail: "22 min", tone: "mint" },
];

export default function FeedingTimelineVisual() {
  return (
    <div className="relative mx-auto min-h-[25rem] w-full max-w-[36rem] sm:min-h-[30rem]">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#efe6d3_0%,rgba(239,230,211,0.58)_44%,rgba(239,230,211,0)_72%)]"
      />

      <Image
        src="/art/feeding-mum-v1-transparent.png"
        alt="A watercolor illustration of a mother bottle-feeding her baby"
        width={1024}
        height={1536}
        sizes="(max-width: 1024px) 78vw, 25vw"
        className="absolute bottom-0 left-0 z-10 h-[88%] w-auto object-contain drop-shadow-[0_22px_42px_rgba(120,80,50,0.08)]"
      />

      <div className="absolute left-[4%] top-[12%] z-20 hidden -rotate-6 items-center gap-2 rounded-full border border-line bg-paper/92 px-4 py-2 shadow-[0_12px_28px_-20px_rgba(15,61,39,0.35)] backdrop-blur sm:inline-flex">
        <Image
          src="/art/icons/feeding.png"
          alt=""
          width={40}
          height={40}
          className="h-7 w-7 object-contain"
        />
        <span className="text-[14px] font-bold text-sprout-700">7 feeds</span>
      </div>

      <div className="absolute right-0 top-[16%] z-30 w-[58%] min-w-[15rem] rounded-[1.7rem] border border-line bg-paper/95 p-5 shadow-[0_22px_44px_-26px_rgba(15,61,39,0.36)] backdrop-blur sm:w-[52%] sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-[clamp(1.55rem,4vw,2.05rem)] font-bold leading-none tracking-[-0.02em] text-sprout-900">
              Feeding
            </h4>
            <p className="mt-2 text-[13px] font-semibold text-ink-soft">
              Today at a glance
            </p>
          </div>
          <span className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-[11px] font-bold text-sprout-700">
            <span className="h-2 w-2 rounded-full bg-sprout-400" />
            Live
          </span>
        </div>

        <div className="relative mt-7 space-y-5 pl-7">
          <span className="absolute left-[0.65rem] top-2 h-[calc(100%-1rem)] w-px bg-line" />
          {rows.map((row, index) => (
            <div key={row.title} className="relative">
              <span
                className={`absolute -left-[1.75rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ${
                  index === 0
                    ? "bg-sprout-300 ring-[10px] ring-sprout-100"
                    : "bg-line ring-[5px] ring-paper"
                }`}
              />
              <div
                className={`grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl px-4 py-3 ${
                  row.tone === "mint" ? "bg-mint" : "bg-petal"
                }`}
              >
                <div>
                  <div className="text-[13px] font-bold leading-tight text-sprout-900">
                    {row.title}
                  </div>
                  <div className="mt-0.5 text-[12px] font-semibold leading-tight text-ink-soft">
                    {row.detail}
                  </div>
                </div>
                <div className="text-[13px] font-bold text-ink-soft">{row.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute right-[10%] top-[4%] z-20 text-[2.3rem] leading-none text-blush"
      >
        ♥
      </div>
    </div>
  );
}
