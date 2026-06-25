import Reveal from "./Reveal";
import { StoreButtons } from "./StoreButtons";
import { HeartIcon, ShieldIcon, SparkleIcon } from "./icons";

const values = [
  {
    icon: HeartIcon,
    t: "Designed alongside new parents",
    d: "Every screen was shaped by the real, foggy, 3am moments of early parenthood — not a boardroom.",
  },
  {
    icon: ShieldIcon,
    t: "Built with midwife feedback",
    d: "Shaped together with healthcare professionals so the sharing and monitoring genuinely fit how they work.",
  },
  {
    icon: SparkleIcon,
    t: "Privacy-first by design",
    d: "Consent-based, encrypted and revocable sharing. Your family's data is yours — never sold, never mined.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            Brought to life with early parent feedback
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Join our first families.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Sprout Bubba is new — and being shaped, in the open, with the parents
            and midwives using it today. Be part of how it grows.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.t}
                  className="lift rounded-3xl border border-line bg-white p-7 shadow-[0_10px_30px_-22px_rgba(15,61,39,0.4)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-sprout-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[1.15rem] font-bold text-sprout-900">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {v.d}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-[15px] font-medium text-ink-soft">
            Honest from day one: these are our principles, not paid reviews.
          </p>
          <StoreButtons />
        </Reveal>
      </div>
    </section>
  );
}
