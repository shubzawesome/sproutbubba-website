import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import { StatusBar } from "./mockups/ui";
import { Sprig } from "./art/Botanicals";
import { SparkleIcon, CheckIcon } from "./icons";

/* A small, clearly-labelled preview of the future AI assistant. */
function AIPreview() {
  return (
    <div className="relative flex h-full flex-col bg-paper-soft">
      <StatusBar />
      <div className="flex items-center gap-2.5 border-b border-line/70 px-5 pb-3 pt-5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sprout-400 to-sprout-600 text-white">
          <SparkleIcon className="h-5 w-5" />
        </span>
        <div>
          <div className="text-[14px] font-bold text-sprout-900">Sprout Assistant</div>
          <div className="text-[10px] font-medium text-sprout-500">In development</div>
        </div>
      </div>

      <div className="flex-1 space-y-3 px-4 pt-4">
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-md bg-sprout-400 px-3.5 py-2.5 text-[12.5px] font-medium leading-snug text-sprout-900">
            Why is she crying after every feed?
          </p>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[86%] rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-[12.5px] leading-snug text-ink shadow-[0_6px_18px_-14px_rgba(15,61,39,0.4)]">
            A few gentle things to try, based on her recent feeds…
          </div>
        </div>
      </div>

      {/* frosted "coming soon" veil */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 flex items-end justify-center bg-gradient-to-t from-paper-soft via-paper-soft/80 to-transparent">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full bg-sprout-900 px-4 py-2 text-[12px] font-semibold text-white shadow-lg">
          <SparkleIcon className="h-4 w-4 text-sprout-300" /> Coming soon
        </span>
      </div>
    </div>
  );
}

export default function ComingSoonAI() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Sprig aria-hidden className="animate-sway-slow absolute -left-3 top-16 hidden h-44 w-24 opacity-50 lg:block" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-sprout-200 bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-sprout-700">
              <SparkleIcon className="h-4 w-4 text-blush" />
              On the horizon
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.02em] text-sprout-900">
              A gentle AI companion, coming soon.
            </h2>
            <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-ink-soft">
              We&rsquo;re putting the finishing touches on an assistant that
              understands your baby&rsquo;s patterns and offers caring,
              plain-language guidance the moment a worry strikes — with you, and
              your midwife or doctor, always in charge.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Answers grounded in what you've already tracked",
                "Clear prompts on when to seek professional care",
                "Never a replacement for your midwife or doctor",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-sprout-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="#download"
                className="lift inline-flex items-center gap-2 rounded-full bg-sprout-900 px-5 py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(15,61,39,0.6)] hover:bg-[#0a2c1c]"
              >
                Get the app & be first to try it
              </a>
              <span className="text-[13px] font-medium text-ink-soft">
                We&rsquo;ll let you know the moment it&rsquo;s ready.
              </span>
            </div>
          </Reveal>

          {/* preview phone */}
          <Reveal direction="right" delay={100}>
            <div className="mx-auto w-[clamp(14rem,66%,18rem)]">
              <PhoneFrame float="slow" tilt={2}>
                <AIPreview />
              </PhoneFrame>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
