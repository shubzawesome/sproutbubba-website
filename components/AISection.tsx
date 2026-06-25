import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import AIChatMock from "./mockups/AIChatMock";
import { SparkleIcon, ShieldIcon, ClockIcon, FlagIcon } from "./icons";

const points = [
  {
    icon: ClockIcon,
    t: "Answers at 3am",
    d: "Calm, practical guidance the moment a worry strikes — no waiting rooms.",
  },
  {
    icon: SparkleIcon,
    t: "Knows your baby's context",
    d: "Suggestions consider recent feeds, sleep and growth you've already logged.",
  },
  {
    icon: FlagIcon,
    t: "Tells you when to seek help",
    d: "Clear red-flag prompts to contact your midwife or GP — never a diagnosis.",
  },
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-sprout-900" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 15%, rgba(92,203,122,0.35) 0%, transparent 60%), radial-gradient(45% 45% at 10% 90%, rgba(143,220,171,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* phone */}
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="mx-auto w-[clamp(15rem,72%,19rem)]">
              <PhoneFrame float="slow" tilt={-2}>
                <AIChatMock />
              </PhoneFrame>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal direction="right" className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-sprout-200 ring-1 ring-white/15">
              <SparkleIcon className="h-4 w-4" />
              AI Assistant
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              A reassuring second opinion, any hour of the night.
            </h2>
            <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-white/75">
              Ask anything — fussy feeds, sleep regressions, nappy worries — and
              get thoughtful, plain-language guidance grounded in what you&rsquo;ve
              tracked.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-sprout-200 ring-1 ring-white/15">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-white">{p.t}</div>
                    <div className="text-[14px] leading-snug text-white/65">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* safety statement */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
              <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-sprout-300" />
              <p className="text-[13.5px] leading-snug text-white/75">
                <span className="font-semibold text-white">
                  Sprout&rsquo;s AI never replaces a healthcare professional.
                </span>{" "}
                It offers general guidance and always points you to your midwife,
                GP or emergency services when it matters.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
