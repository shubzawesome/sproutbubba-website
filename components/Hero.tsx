import Image from "next/image";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import MouseParallax from "./MouseParallax";
import { StoreButtons } from "./StoreButtons";
import FeedingMock from "./mockups/FeedingMock";
import SleepMock from "./mockups/SleepMock";
import { HandUnderline, Sprig, LittleHeart } from "./art/Botanicals";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* warm wash backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-[-10%] h-[85%] animate-gradient opacity-90"
          style={{
            background:
              "radial-gradient(55% 55% at 18% 18%, #f3e3d4 0%, transparent 60%), radial-gradient(50% 50% at 85% 12%, #e9f0e2 0%, transparent 58%), radial-gradient(45% 45% at 62% 82%, #f1ddcf 0%, transparent 62%)",
            backgroundSize: "180% 180%",
          }}
        />
      </div>

      {/* decorative sprigs */}
      <Sprig
        aria-hidden
        className="animate-sway-slow absolute -left-2 top-40 hidden h-48 w-24 opacity-70 lg:block"
      />
      <Sprig
        aria-hidden
        className="animate-sway absolute right-2 top-24 hidden h-40 w-20 -scale-x-100 opacity-60 lg:block"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* copy */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-[13px] font-semibold text-sprout-700 backdrop-blur">
                <LittleHeart className="h-4 w-4" />
                The calm, all-in-one app for new parents
              </span>
            </Reveal>

            <Reveal delay={110}>
              <h1 className="relative mt-6 text-[clamp(3rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-sprout-900">
                More love.
                <br />
                <span className="relative inline-block">
                  Less worry.
                  <HandUnderline className="absolute -bottom-3 left-0 h-5 w-[88%]" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={190}>
              <p className="mx-auto mt-9 max-w-xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-ink-soft lg:mx-0">
                Track feeds, sleep, nappies, growth and more — with gentle
                reminders and the option to share securely with your midwife or
                doctor. So you can hold less in your head, and more of your baby.
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

          {/* art + phones */}
          <Reveal direction="scale" delay={180} className="relative">
            <MouseParallax depth={14}>
              <div className="relative mx-auto max-w-md -translate-x-6 lg:translate-x-0">
                <Image
                  src="/art/hero-v2.png"
                  alt="A mother tenderly cradling her sleeping baby"
                  width={1314}
                  height={1197}
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="h-auto w-full drop-shadow-[0_24px_50px_rgba(120,80,50,0.12)] lg:-translate-x-24"
                />

                {/* phones tucked into the lower-right corner so the baby stays visible */}
                <div className="absolute bottom-[-7%] right-[-6%] flex w-[54%] items-end justify-center lg:right-[-12%]">
                  <div className="relative w-[50%] translate-y-3 -rotate-[8deg]">
                    <PhoneFrame float="slower">
                      <SleepMock />
                    </PhoneFrame>
                  </div>
                  <div className="relative z-10 -ml-5 w-[56%] rotate-[5deg]">
                    <PhoneFrame float="slow">
                      <FeedingMock />
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            </MouseParallax>
          </Reveal>
        </div>

      </div>

      <div className="h-6 sm:h-10" />
    </section>
  );
}
