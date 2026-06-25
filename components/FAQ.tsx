"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    q: "Is Sprout Bubba free?",
    a: "Yes — you can start tracking feeds, sleep, nappies, growth and more for free, with no card required. An optional premium tier unlocks deeper insights, longer history and advanced sharing.",
  },
  {
    q: "Can my partner use it too?",
    a: "Absolutely. Both parents sign in to the same baby from their own phones and everything syncs live — so a feed logged on one device shows instantly on the other. No more 'did you already feed her?' texts.",
  },
  {
    q: "Is my data secure?",
    a: "Privacy is built in. Your data is encrypted, sharing is strictly consent-based and read-only, and you can revoke any midwife or partner's access at any time. We never sell your data.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. You can log everything without a connection — Sprout stores it on your device and syncs automatically the moment you're back online. Perfect for those middle-of-the-night moments.",
  },
  {
    q: "Can I share information with my midwife?",
    a: "Yes — securely sharing with your midwife is one of Sprout's signature features. Send a consent-based, read-only link so they can monitor feeds, growth and even live contractions, and remove their access whenever you like.",
  },
  {
    q: "Does the AI replace my midwife or doctor?",
    a: "No. The AI assistant offers calm, general guidance and helps you understand what you're seeing — but it never diagnoses and always points you to your midwife, GP or emergency services when professional care is needed.",
  },
];

function Item({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[1.05rem] font-semibold text-sprout-900">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint text-sprout-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-10 text-[15.5px] leading-relaxed text-ink-soft">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            Good to know
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
