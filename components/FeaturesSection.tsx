import Feature from "./Feature";
import Reveal from "./Reveal";
import FeedingMock from "./mockups/FeedingMock";
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

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white px-4 py-3">
      <div className="text-xl font-bold text-sprout-900">{v}</div>
      <div className="text-[12px] font-medium text-ink-soft">{k}</div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            One calm home for it all
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Track everything. Stress about nothing.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Every part of your baby&rsquo;s day, designed to be logged in a tap
            and understood at a glance.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24">
          {/* Feeding */}
          <Feature
            eyebrow="Feeding"
            icon={BottleIcon}
            title={<>A feeding timeline you can actually read.</>}
            body="Breast, bottle and pumping in one live timeline. Start a nursing timer with a tap, switch sides, and see the whole day at a glance — no spreadsheets, no guesswork at 3am."
            mockup={<FeedingMock />}
            tilt={-2}
          >
            <div className="grid grid-cols-3 gap-3">
              <MiniStat k="Feeds today" v="7" />
              <MiniStat k="Avg interval" v="2h 50m" />
              <MiniStat k="Both sides" v="Tracked" />
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
