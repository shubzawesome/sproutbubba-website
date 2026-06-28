import Image from "next/image";
import Feature from "./Feature";
import Reveal from "./Reveal";
import SectionLeaves from "./art/SectionLeaves";
import FeedingTimelineVisual from "./FeedingTimelineVisual";
import GrowthMock from "./mockups/GrowthMock";
import {
  BottleIcon,
  HeartIcon,
  GrowthIcon,
  CheckIcon,
} from "./icons";

function FeedingCue({
  iconSrc,
  k,
  v,
}: {
  iconSrc: string;
  k: string;
  v: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-3.5 py-3 shadow-[0_10px_28px_-22px_rgba(15,61,39,0.35)]">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint">
        <Image
          src={iconSrc}
          alt=""
          width={44}
          height={44}
          className="h-8 w-8 object-contain"
        />
      </span>
      <div>
        <div className="text-[15px] font-bold text-sprout-900">{v}</div>
        <div className="text-[12px] font-medium text-ink-soft">{k}</div>
      </div>
    </div>
  );
}

function HomeLogScreen() {
  return (
    <div className="h-full overflow-hidden bg-[#fff7ef]">
      <div className="px-5 pb-3 pt-12">
        <div className="flex items-center justify-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#9bc9d7] text-[13px] font-bold text-white">
            M
          </span>
          <span className="text-[18px] font-bold text-[#4f3c34]">Maya</span>
          <span className="text-[14px] font-bold leading-none text-[#4f3c34]/75">
            ^
          </span>
        </div>
      </div>
      <div className="relative h-[calc(100%-5.75rem)] overflow-hidden">
        <Image
          src="/art/app-home-log-v1.png"
          alt="Sprout Bubba home screen with quick logging buttons"
          width={698}
          height={1540}
          sizes="(max-width: 1024px) 70vw, 19rem"
          className="w-full -translate-y-[4.35rem] select-none"
        />
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden scroll-mt-20 pt-10 pb-20 sm:pt-14 sm:pb-28">
      <SectionLeaves variant="left" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            Made for the everyday
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Track everything. Stress about nothing.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Every part of your baby&rsquo;s day — logged in a tap, understood at a
            glance, and gently kept for whenever you need it.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24">
          {/* Feeding */}
          <Feature
            eyebrow="Feeding"
            icon={BottleIcon}
            title={<>A feeding timeline you can actually read.</>}
            body="Breast, bottle and pumping in one live timeline. Start a nursing timer with a tap, switch sides, and see the whole day at a glance — no spreadsheets, no guesswork at 3am."
            mockup={<FeedingTimelineVisual />}
            visual="illustration"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <FeedingCue iconSrc="/art/icons/feeding.png" k="Feeds today" v="7" />
              <FeedingCue iconSrc="/art/icons/contractions.png" k="Avg interval" v="2h 50m" />
              <FeedingCue iconSrc="/art/icons/milestones.png" k="Both sides" v="Tracked" />
            </div>
          </Feature>

          {/* Easy logging */}
          <Feature
            eyebrow="Easy logging"
            icon={HeartIcon}
            title={<>Easy to log details, even one-handed.</>}
            body="Open the home screen and tap what just happened — a feed, nappy, sleep, pumping, medicine, temperature, growth or activity. The important details are captured before they slip from your mind."
            mockup={<HomeLogScreen />}
            reverse
            tilt={2}
            copyBackground={
              <>
                <div className="absolute -right-20 top-8 hidden h-72 w-72 rounded-full bg-blush-soft/60 blur-3xl lg:block" />
                <Image
                  src="/art/sleep-background-v1-transparent.png"
                  alt=""
                  width={1706}
                  height={922}
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="absolute -left-[4%] -top-24 hidden w-[43rem] max-w-none opacity-[0.22] mix-blend-multiply saturate-[0.9] [mask-image:linear-gradient(to_right,transparent_0%,black_38%,black_100%)] lg:block"
                />
              </>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Fast buttons for the things you log all day",
                "Timer, nappies and notes kept in one place",
                "Designed for tired hands and late-night moments",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-sprout-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Feature>

          {/* centered full-width moment — breaks the alternating rhythm */}
          <Reveal direction="scale" className="py-2">
            <div className="relative mx-auto min-h-[27rem] max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-paper-soft px-8 pb-56 pt-12 text-center sm:min-h-[30rem] sm:px-12 sm:pb-64 sm:pt-14">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 animate-gradient opacity-60"
                style={{
                  background:
                    "radial-gradient(50% 80% at 50% 0%, #dbf5e4 0%, transparent 60%)",
                  backgroundSize: "180% 180%",
                }}
              />
              <Image
                src="/art/parent-sync-v1-transparent.png"
                alt=""
                width={1738}
                height={905}
                sizes="(max-width: 1024px) 92vw, 56rem"
                className="pointer-events-none absolute inset-x-1/2 bottom-[-2.5rem] z-0 w-[58rem] max-w-none -translate-x-1/2 select-none opacity-75 sm:bottom-[-3.5rem]"
              />
              <p className="relative z-10 text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
                Both parents, one source of truth
              </p>
              <p className="relative z-10 mx-auto mt-3 max-w-2xl text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.01em] text-sprout-900">
                Log from either phone and it syncs instantly. No more
                &ldquo;did you already feed her?&rdquo; texts at 2am.
              </p>
            </div>
          </Reveal>

          {/* Growth */}
          <Feature
            eyebrow="Growth"
            icon={GrowthIcon}
            title={<>Growth tracking that gives you confidence.</>}
            body="Log weight, length and head circumference and watch them plot against percentile curves — the same view your midwife uses, in your pocket."
            mockup={<GrowthMock />}
            tilt={-1.5}
            copyBackground={
              <>
                <div className="absolute -bottom-10 -left-12 hidden h-72 w-72 rounded-full bg-butter/45 blur-3xl lg:block" />
                <Image
                  src="/art/growth-background-v1-transparent.png"
                  alt=""
                  width={1774}
                  height={887}
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="absolute -bottom-24 -left-24 hidden w-[44rem] max-w-none opacity-[0.4] mix-blend-multiply saturate-[0.95] [mask-image:linear-gradient(to_top,black_0%,black_58%,transparent_100%)] lg:block"
                />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
