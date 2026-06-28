import Image from "next/image";

import Reveal from "./Reveal";
import SectionLeaves from "./art/SectionLeaves";

const values = [
  {
    img: "/art/trust-parent-v1-transparent.png",
    alt: "Watercolor parent holding a newborn",
    t: "Designed alongside new parents",
    d: "Every screen was shaped by the real, foggy, 3am moments of early parenthood — not a boardroom.",
  },
  {
    img: "/art/trust-midwife-v1-transparent.png",
    alt: "Watercolor midwife with a clipboard",
    t: "Built with midwife feedback",
    d: "Shaped together with healthcare professionals so the sharing and monitoring genuinely fit how they work.",
  },
  {
    img: "/art/trust-privacy-v1-transparent.png",
    alt: "Watercolor privacy shield and lock with leaves",
    t: "Privacy-first by design",
    d: "Consent-based, encrypted and revocable sharing. Your family's data is yours — never sold, never mined.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18">
      <SectionLeaves variant="both" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-[radial-gradient(circle_at_center,rgba(209,243,221,0.58),rgba(238,226,207,0.18)_52%,transparent_74%)] blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-normal text-sprout-500">
            Built with care
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold tracking-normal text-sprout-900">
            Calm, private, and shaped with real families.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.t}
                className="lift overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_18px_45px_-32px_rgba(15,61,39,0.42)]"
              >
                <div className="relative flex h-40 items-end justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(226,246,234,0.75),rgba(255,255,255,0.62))] px-5 pt-3">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-2 h-24 w-40 rounded-full bg-mint/55 blur-2xl"
                  />
                  <Image
                    src={v.img}
                    alt={v.alt}
                    width={260}
                    height={220}
                    className="relative h-36 w-auto object-contain drop-shadow-[0_14px_24px_rgba(77,60,41,0.16)]"
                  />
                </div>

                <div className="p-5 pt-4">
                  <h3 className="text-[1.05rem] font-bold leading-snug text-sprout-900">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {v.d}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
