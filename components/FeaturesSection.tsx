import Image from "next/image";
import Feature from "./Feature";
import Reveal from "./Reveal";
import SectionLeaves from "./art/SectionLeaves";
import FeedingTimelineVisual from "./FeedingTimelineVisual";
import SleepMock from "./mockups/SleepMock";
import GrowthMock from "./mockups/GrowthMock";
import {
  BottleIcon,
  MoonIcon,
  GrowthIcon,
  DropIcon,
  HeartIcon,
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

          {/* Sleep */}
          <Feature
            eyebrow="Sleep"
            icon={MoonIcon}
            title={<>Elegant sleep charts that reveal the pattern.</>}
            body="Naps and nights roll up into clear weekly charts, longest-stretch trends and night-waking counts — so you can finally see the rhythm forming."
            mockup={<SleepMock />}
            reverse
            tilt={2}
            copyBackground={
              <>
                <div className="absolute -right-20 top-8 hidden h-72 w-72 rounded-full bg-mint-deep/45 blur-3xl lg:block" />
                <Image
                src="/art/sleep-background-v1-transparent.png"
                alt=""
                width={1706}
                height={922}
                sizes="(max-width: 1024px) 90vw, 44vw"
                  className="absolute -left-[4%] -top-24 hidden w-[43rem] max-w-none opacity-[0.34] mix-blend-multiply saturate-[0.92] [mask-image:linear-gradient(to_right,transparent_0%,black_38%,black_100%)] lg:block"
                />
              </>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Weekly totals & averages, beautifully visualised",
                "Longest-stretch and night-waking insights",
                "Spot the rhythm before you feel it",
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
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-line bg-paper-soft px-8 py-12 text-center sm:py-14">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 animate-gradient opacity-60"
                style={{
                  background:
                    "radial-gradient(50% 80% at 50% 0%, #dbf5e4 0%, transparent 60%)",
                  backgroundSize: "180% 180%",
                }}
              />
              <p className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
                Both parents, one source of truth
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.01em] text-sprout-900">
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
          >
            <div className="flex flex-wrap gap-2.5">
              {[
                { i: GrowthIcon, t: "Percentile curves" },
                { i: DropIcon, t: "Weight & length" },
                { i: HeartIcon, t: "Milestones" },
              ].map(({ i: Icon, t }) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[14px] font-medium text-sprout-800"
                >
                  <Icon className="h-4 w-4 text-sprout-500" />
                  {t}
                </span>
              ))}
            </div>
          </Feature>
        </div>
      </div>
    </section>
  );
}
