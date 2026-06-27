import Image from "next/image";
import Reveal from "./Reveal";
import SectionLeaves from "./art/SectionLeaves";
import { ArrowRightIcon, HeartIcon } from "./icons";

const worries = [
  "Did we already feed her?",
  "How long has she actually slept?",
  "When did she last wake?",
  "Which side did she feed on?",
  "Is this normal… should I call someone?",
];

const remembered = ["feeding", "sleep", "nappies", "milestones", "growth"];

/* small filled blush heart bullet */
function HeartBullet() {
  return (
    <svg viewBox="0 0 24 22" className="h-5 w-5 shrink-0" aria-hidden>
      <path
        d="M12 21S2 14.5 2 7.8C2 4.4 4.6 2.4 7.3 2.4 9.1 2.4 10.9 3.4 12 5.1 13.1 3.4 14.9 2.4 16.7 2.4 19.4 2.4 22 4.4 22 7.8 22 14.5 12 21 12 21Z"
        fill="#e7a98c"
      />
    </svg>
  );
}

/* tangled "overwhelmed" thought cloud */
function ThoughtCloud() {
  return (
    <svg viewBox="0 0 64 52" className="h-9 w-11" aria-hidden>
      <path
        d="M18 12c1-5 7-8 12-6 3-4 11-3 12 2 5 0 8 5 6 9 3 2 2 8-3 8H17c-6 0-8-7-3-10-1-2 1-3 4-3Z"
        fill="#cdd7df"
      />
      <path
        d="M22 18c5-3 13 4 7 7 5 1 4 6-1 5 3 2 0 6-3 4 1 3-4 4-5 1-3 2-7-2-4-5-4 0-4-6 0-6-2-3 3-7 6-5Z"
        stroke="#7c8a96"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="14" cy="40" r="3" fill="#cdd7df" />
      <circle cx="9" cy="47" r="2" fill="#cdd7df" />
    </svg>
  );
}

export default function BeforeAfter() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-14">
      <SectionLeaves variant="branch-bl" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            The mental load, lifted
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Stop keeping it all in your head.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Sprout Bubba remembers the details, so you can focus on what matters
            most.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* before */}
          <Reveal direction="left">
            <div className="h-full overflow-hidden rounded-3xl border border-line bg-cream p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <ThoughtCloud />
                <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft/70">
                  Before Sprout Bubba
                </p>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <ul className="flex-1">
                  {worries.map((w, i) => (
                    <li
                      key={w}
                      className={`flex items-center gap-3 py-3 text-[15.5px] leading-snug text-ink ${
                        i > 0 ? "border-t border-line/70" : ""
                      }`}
                    >
                      <HeartBullet />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>

                {/* tired-mum watercolour — sized by height to match the list */}
                <Image
                  src="/art/before-mum-v2.png"
                  alt=""
                  width={547}
                  height={922}
                  className="pointer-events-none -mb-3 hidden h-auto max-h-72 w-auto shrink-0 select-none self-end sm:block"
                />
              </div>
            </div>
          </Reveal>

          {/* arrow */}
          <div className="flex items-center justify-center" aria-hidden>
            <Reveal direction="scale" delay={120}>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sprout-400 text-sprout-900 shadow-[0_12px_28px_-12px_rgba(44,147,78,0.7)]">
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Reveal>
          </div>

          {/* after — light sage card */}
          <Reveal direction="right" delay={80}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-sprout-200/60 bg-mint p-7 sm:p-8">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(70% 60% at 85% 0%, rgba(146,184,150,0.25) 0%, transparent 60%)",
                }}
              />
              <div className="relative flex h-full flex-col">
                <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-sprout-600">
                  <HeartIcon className="h-4 w-4" /> With Sprout Bubba
                </p>
                <p className="mt-4 text-[1.6rem] font-bold leading-snug text-sprout-900">
                  Everything is remembered.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                  Every feed, every nap, every nappy — logged in a tap and there
                  when you need it. No more second-guessing at 3am. Just calm,
                  quiet confidence, and more time to simply enjoy your baby.
                </p>

                {/* watercolour icon row — bigger, evenly spread, anchored to bottom */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-8">
                  {remembered.map((n) => (
                    <Image
                      key={n}
                      src={`/art/icons/${n}.png`}
                      alt=""
                      width={72}
                      height={72}
                      className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
