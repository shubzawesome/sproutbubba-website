import { StatusBar } from "./ui";
import { SparkleIcon, FlagIcon } from "../icons";

export default function AIChatMock() {
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
          <div className="text-[10px] font-medium text-sprout-500">AI guidance · not medical advice</div>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-4">
        {/* user */}
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-md bg-sprout-400 px-3.5 py-2.5 text-[12.5px] font-medium leading-snug text-sprout-900">
            My baby has been crying after every feed. Is something wrong?
          </p>
        </div>

        {/* assistant */}
        <div className="flex justify-start">
          <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-[12.5px] leading-snug text-ink shadow-[0_6px_18px_-14px_rgba(15,61,39,0.4)]">
            <p>
              Crying after feeds is common and often linked to{" "}
              <span className="font-semibold text-sprout-700">trapped wind or fast flow</span>. A few gentle things to try:
            </p>
            <ul className="mt-2 space-y-1.5">
              {["Wind for 5–10 min, upright on your chest", "Pause mid-feed to burp", "Check latch / teat flow isn’t too fast"].map((t) => (
                <li key={t} className="flex gap-1.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sprout-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* safety callout */}
        <div className="flex justify-start">
          <div className="flex max-w-[88%] gap-2 rounded-2xl bg-amber-50 px-3 py-2.5 text-[11.5px] leading-snug text-amber-800">
            <FlagIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              <span className="font-semibold">Speak to your midwife or GP</span> if there’s fever, vomiting, blood, or fewer wet nappies. Sprout supports — it never replaces a professional.
            </p>
          </div>
        </div>
      </div>

      {/* input */}
      <div className="px-4 pb-5 pt-2">
        <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5">
          <span className="text-[12px] text-ink-soft">Ask anything about your baby…</span>
          <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-sprout-400 text-sprout-900">
            <SparkleIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
