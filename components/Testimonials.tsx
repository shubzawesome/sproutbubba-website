import Reveal from "./Reveal";
import SectionLeaves from "./art/SectionLeaves";
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
    <section className="relative overflow-hidden py-12 sm:py-16">
      <SectionLeaves variant="both" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            Built with care
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Calm, private, and shaped with real families.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.t}
                  className="lift rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,61,39,0.35)]"
                >
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-sprout-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[1rem] font-bold leading-snug text-sprout-900">
                        {v.t}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                        {v.d}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
