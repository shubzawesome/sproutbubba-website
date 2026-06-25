import { StatusBar } from "./ui";
import { SparkleIcon, BottleIcon, MoonIcon, GrowthIcon } from "../icons";

export default function AIContextMock() {
  return (
    <div className="flex h-full flex-col bg-paper-soft">
      <StatusBar />
      {/* header */}
      <div className="flex items-center gap-2.5 border-b border-line/70 px-5 pb-3 pt-5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sprout-400 to-sprout-600 text-white">
          <SparkleIcon className="h-5 w-5" />
        </span>
        <div>
          <div className="text-[14px] font-bold text-sprout-900">Sprout Assistant</div>
          <div className="text-[10px] font-medium text-sprout-500">
            Knows what you&rsquo;ve tracked
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-4">
        {/* user */}
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-md bg-sprout-400 px-3.5 py-2.5 text-[12.5px] font-medium leading-snug text-sprout-900">
            Should I wake her for a feed, or let her sleep?
          </p>
        </div>

        {/* context chips the AI is drawing on */}
        <div className="flex flex-wrap justify-start gap-1.5">
          {[
            { i: BottleIcon, t: "Last feed 2h 50m ago" },
            { i: MoonIcon, t: "Napped 1h 40m" },
            { i: GrowthIcon, t: "62nd pct" },
          ].map(({ i: Icon, t }) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold text-sprout-700 ring-1 ring-line"
            >
              <Icon className="h-3 w-3 text-sprout-500" />
              {t}
            </span>
          ))}
        </div>

        {/* assistant */}
        <div className="flex justify-start">
          <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-[12.5px] leading-snug text-ink shadow-[0_6px_18px_-14px_rgba(15,61,39,0.4)]">
            <p>
              She&rsquo;s feeding roughly every <b>2h 50m</b> and this nap&rsquo;s
              about average for her. It&rsquo;s fine to let her finish — she&rsquo;ll
              likely stir for a feed in the next <b>20–30 min</b>.
            </p>
            <p className="mt-2 text-ink-soft">
              Her weight&rsquo;s tracking steadily, so there&rsquo;s no need to wake
              her on schedule right now.
            </p>
          </div>
        </div>

        {/* disclaimer */}
        <div className="flex justify-start">
          <p className="max-w-[88%] rounded-xl bg-mint px-3 py-2 text-[10.5px] font-medium leading-snug text-sprout-700">
            General guidance based on your logs — always trust your instincts and
            your midwife or GP for anything that worries you.
          </p>
        </div>
      </div>

      <div className="px-4 pb-5 pt-2">
        <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5">
          <span className="text-[12px] text-ink-soft">Reply to Sprout…</span>
          <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-sprout-400 text-sprout-900">
            <SparkleIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
