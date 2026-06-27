import Image from "next/image";
import type { ComponentType } from "react";
import Reveal from "./Reveal";
import {
  BottleIcon,
  MoonIcon,
  GrowthIcon,
  NappyIcon,
  HeartIcon,
  PulseIcon,
} from "./icons";

type Item = {
  label: string;
  note: string;
  icon: ComponentType<{ className?: string }>;
  /** Drop a square PNG in /public/art/icons and set its path here to swap the icon. */
  img?: string;
  tint: string;
};

const items: Item[] = [
  { label: "Feeding", note: "Breast, bottle, pumping & more", icon: BottleIcon, tint: "bg-blush-soft/50", img: "/art/icons/feeding.png" },
  { label: "Sleep", note: "Understand sleep patterns", icon: MoonIcon, tint: "bg-mint", img: "/art/icons/sleep.png" },
  { label: "Growth", note: "Track weight, length & head size", icon: GrowthIcon, tint: "bg-mint", img: "/art/icons/growth.png" },
  { label: "Nappies", note: "Nappy changes made simple", icon: NappyIcon, tint: "bg-butter/60", img: "/art/icons/nappies.png" },
  { label: "Milestones", note: "Cherish every special moment", icon: HeartIcon, tint: "bg-blush-soft/50", img: "/art/icons/milestones.png" },
  { label: "Contractions", note: "Time & track with confidence", icon: PulseIcon, tint: "bg-mint", img: "/art/icons/contractions.png" },
];

export default function FeatureStrip() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.55rem,3vw,2.1rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Everything in one place
          </h2>
          <p className="mt-2 text-[0.98rem] text-ink-soft">
            So you can stop keeping track in your head.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <li
                  key={it.label}
                  className="lift rounded-2xl border border-line bg-paper p-3.5 text-center shadow-[0_10px_28px_-24px_rgba(80,60,40,0.4)]"
                >
                  <span
                    className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${it.tint} text-sprout-700`}
                  >
                    {it.img ? (
                      <Image
                        src={it.img}
                        alt={it.label}
                        width={56}
                        height={56}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <Icon className="h-6 w-6" />
                    )}
                  </span>
                  <h3 className="mt-3 text-[14px] font-bold text-sprout-900">
                    {it.label}
                  </h3>
                  <p className="mt-1 text-[12px] leading-snug text-ink-soft">
                    {it.note}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
