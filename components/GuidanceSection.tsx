import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import RemindersMock from "./mockups/RemindersMock";
import ContractionMock from "./mockups/ContractionMock";
import { BellIcon, ClockIcon, PulseIcon, HeartIcon } from "./icons";

const points = [
  {
    icon: BellIcon,
    t: "Next-feed reminders",
    d: "Sprout watches the clock from your last feed and gives you a gentle nudge when the next one's likely due.",
  },
  {
    icon: PulseIcon,
    t: "5-1-1 contraction guidance",
    d: "The contraction timer reads your pattern and tells you, in plain words, when it might be time to head in.",
  },
  {
    icon: HeartIcon,
    t: "Kick counter & prep checklists",
    d: "Keep an easy eye on movements, and tick off birth-prep and what-to-pack lists you share with your partner.",
  },
];

export default function GuidanceSection() {
  return (
    <section
      id="guidance"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
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
          {/* phones */}
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              <div className="relative w-[54%] translate-y-6 -rotate-[5deg]">
                <PhoneFrame float="slower">
                  <ContractionMock />
                </PhoneFrame>
              </div>
              <div className="relative z-10 -ml-8 w-[60%] -translate-y-3 rotate-[4deg]">
                <PhoneFrame float="slow">
                  <RemindersMock />
                </PhoneFrame>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal direction="right" className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-sprout-200 ring-1 ring-white/15">
              <BellIcon className="h-4 w-4" />
              Gentle guidance &amp; reminders
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              A little nudge, exactly when you need one.
            </h2>
            <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-white/75">
              Sprout quietly keeps track of the timings so you don&rsquo;t have to
              — gentle reminders, clear contraction guidance, and shared
              checklists that take the mental load off your shoulders.
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

            {/* reassurance */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-sprout-300" />
              <p className="text-[13.5px] leading-snug text-white/75">
                <span className="font-semibold text-white">
                  Gentle, never pushy.
                </span>{" "}
                Reminders are there to lighten the load — always trust your own
                instincts, and your midwife or doctor, for anything that matters.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
