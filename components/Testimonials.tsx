import Reveal from "./Reveal";
import { StarIcon } from "./icons";

const testimonials = [
  {
    quote:
      "The first week home was a blur. Having every feed and nappy in one place — and being able to glance back — genuinely kept me sane.",
    name: "Amara K.",
    role: "Mum of one · Auckland",
    initials: "AK",
  },
  {
    quote:
      "My partner and I both log from our own phones and it just syncs. No more 'did you feed her?' texts at 2am.",
    name: "James & Priya",
    role: "First-time parents",
    initials: "JP",
  },
  {
    quote:
      "I shared the contraction timer with my midwife and she could see everything live. It made the call about when to come in so much easier.",
    name: "Sophie L.",
    role: "Mum of two",
    initials: "SL",
  },
  {
    quote:
      "The sleep charts finally showed me the pattern I couldn't see in the fog. Small thing, huge difference.",
    name: "Daniel R.",
    role: "Dad · Wellington",
    initials: "DR",
  },
  {
    quote:
      "Asked the assistant about feed-time crying at midnight. Calm, sensible advice — and it told me exactly when to call someone.",
    name: "Mei T.",
    role: "Mum of one",
    initials: "MT",
  },
  {
    quote:
      "It's the only baby app that doesn't feel like a spreadsheet. It's calm. That matters when everything else isn't.",
    name: "Olivia B.",
    role: "Mum of three",
    initials: "OB",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="mb-6 break-inside-avoid rounded-3xl border border-line bg-white p-6 shadow-[0_10px_30px_-22px_rgba(15,61,39,0.4)]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-sprout-400" />
        ))}
      </div>
      <blockquote className="mt-4 text-[15.5px] leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-[13px] font-bold text-sprout-700">
          {t.initials}
        </span>
        <span>
          <span className="block text-[14px] font-semibold text-sprout-900">
            {t.name}
          </span>
          <span className="block text-[12.5px] text-ink-soft">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            From real parents
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Quietly indispensable.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {testimonials.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
