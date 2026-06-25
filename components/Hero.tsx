import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import MouseParallax from "./MouseParallax";
import { StoreButtons } from "./StoreButtons";
import FeedingMock from "./mockups/FeedingMock";
import SleepMock from "./mockups/SleepMock";
import { HeartIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* animated gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-[-10%] h-[80%] animate-gradient opacity-80"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, #dbf5e4 0%, transparent 60%), radial-gradient(50% 50% at 85% 10%, #e8f7ee 0%, transparent 55%), radial-gradient(45% 45% at 60% 80%, #d2efdd 0%, transparent 60%)",
            backgroundSize: "180% 180%",
          }}
        />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sprout-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[13px] font-semibold text-sprout-700 backdrop-blur">
                <HeartIcon className="h-3.5 w-3.5 text-sprout-400" />
                Designed alongside new parents
              </span>
            </Reveal>

            <Reveal delay={70}>
              <p className="mt-6 text-[clamp(1.1rem,1.8vw,1.35rem)] font-semibold text-sprout-500">
                Less worrying. More wondering.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-2 text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.04] tracking-[-0.03em] text-sprout-900">
                Everything your baby needs.{" "}
                <span className="text-gradient">Beautifully organised.</span>
              </h1>
            </Reveal>

            <Reveal delay={190}>
              <p className="mx-auto mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-ink-soft lg:mx-0">
                Track feeds, sleep, nappies, pumping, growth, milestones and
                contractions in one calm, beautifully designed app — so you can
                stop holding it all in your head and simply be with your baby.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <StoreButtons size="lg" />
              </div>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-ink-soft lg:justify-start">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sprout-400" /> Free to start
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sprout-400" /> Works offline
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sprout-400" /> Private by design
                </span>
              </div>
            </Reveal>
          </div>

          {/* floating phones with gentle mouse parallax */}
          <Reveal direction="scale" delay={200} className="relative">
            <MouseParallax depth={16}>
              <div className="relative mx-auto flex max-w-md items-center justify-center pb-6">
                <div className="relative w-[58%] translate-y-6 -rotate-[6deg]">
                  <PhoneFrame float="slower">
                    <SleepMock />
                  </PhoneFrame>
                </div>
                <div className="relative z-10 -ml-10 w-[64%] -translate-y-4 rotate-[4deg]">
                  <PhoneFrame float="slow">
                    <FeedingMock />
                  </PhoneFrame>
                </div>
              </div>
            </MouseParallax>
          </Reveal>
        </div>
      </div>

      <div className="h-14 sm:h-20" />
    </section>
  );
}
