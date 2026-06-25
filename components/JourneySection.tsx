import Reveal from "./Reveal";
import {
  HeartIcon,
  PulseIcon,
  SparkleIcon,
  BottleIcon,
  MoonIcon,
  GrowthIcon,
  StarIcon,
  CheckIcon,
} from "./icons";

const stages = [
  { label: "Pregnancy", note: "Due-date countdown & prep", icon: HeartIcon },
  { label: "Contractions", note: "5-1-1 timer & alerts", icon: PulseIcon },
  { label: "Birth", note: "The big day, tracked", icon: SparkleIcon },
  { label: "Feeding", note: "Breast, bottle & pumping", icon: BottleIcon },
  { label: "Sleep", note: "Naps, nights & rhythms", icon: MoonIcon },
  { label: "Growth", note: "Percentiles & weigh-ins", icon: GrowthIcon },
  { label: "Milestones", note: "First smiles & firsts", icon: StarIcon },
  { label: "Toddler", note: "Still right beside you", icon: CheckIcon },
];

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            One app, every chapter
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Built for every stage.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            From the first kick to the first steps, Sprout Bubba grows with your
            family — so you never have to start over.
          </p>
        </Reveal>

        {/* timeline */}
        <Reveal delay={100} className="mt-16">
          <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.label} className="relative flex flex-col items-center text-center">
                  {/* connector line (between nodes) */}
                  {i < stages.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-7 hidden h-px w-full bg-gradient-to-r from-sprout-300 to-sprout-200 lg:block"
                    />
                  )}
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-sprout-600 shadow-[0_10px_24px_-14px_rgba(15,61,39,0.4)] ring-1 ring-line">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-3.5 text-[14px] font-bold text-sprout-900">
                    {s.label}
                  </span>
                  <span className="mt-1 text-[12px] leading-snug text-ink-soft">
                    {s.note}
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
