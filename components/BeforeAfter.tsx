import Reveal from "./Reveal";
import { ArrowRightIcon, HeartIcon } from "./icons";

const worries = [
  "Did we already feed her?",
  "How long has she actually slept?",
  "When did she last wake?",
  "Which side did she feed on?",
  "Is this normal… should I call someone?",
];

export default function BeforeAfter() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            The mental load, lifted
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Stop keeping it all in your head.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* before */}
          <Reveal direction="left">
            <div className="h-full rounded-3xl border border-line bg-paper-soft p-7 sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft/70">
                Before Sprout Bubba
              </p>
              <ul className="mt-5 space-y-3.5">
                {worries.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-3 text-[15.5px] leading-snug text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/30" />
                    <span className="italic">“{w}”</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* arrow */}
          <div className="flex items-center justify-center" aria-hidden>
            <Reveal direction="scale" delay={120}>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sprout-400 text-sprout-900 shadow-[0_12px_28px_-12px_rgba(44,147,78,0.7)] lg:rotate-0">
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Reveal>
          </div>

          {/* after */}
          <Reveal direction="right" delay={80}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-sprout-900 p-7 text-white sm:p-8">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 60% at 80% 10%, rgba(92,203,122,0.35) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-sprout-200">
                  <HeartIcon className="h-4 w-4" /> With Sprout Bubba
                </p>
                <p className="mt-5 text-[1.4rem] font-semibold leading-snug">
                  Everything is remembered.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/75">
                  Every feed, every nap, every nappy — logged in a tap and there
                  when you need it. No more second-guessing at 3am. Just calm,
                  quiet confidence, and more time to simply enjoy your baby.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
