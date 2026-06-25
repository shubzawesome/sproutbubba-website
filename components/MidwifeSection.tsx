import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import ContractionMock from "./mockups/ContractionMock";
import {
  HeartIcon,
  ShieldIcon,
  ShareIcon,
  PulseIcon,
  CheckIcon,
} from "./icons";

function FlowNode({
  icon: Icon,
  title,
  sub,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "flex w-full items-center gap-4 rounded-3xl p-5 transition-shadow",
        accent
          ? "bg-sprout-900 text-white shadow-[0_24px_50px_-24px_rgba(15,61,39,0.6)]"
          : "card-soft",
      ].join(" ")}
    >
      <span
        className={[
          "grid h-12 w-12 shrink-0 place-items-center rounded-2xl",
          accent ? "bg-white/15 text-sprout-200" : "bg-mint text-sprout-600",
        ].join(" ")}
      >
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <div
          className={`text-[15px] font-bold ${accent ? "text-white" : "text-sprout-900"}`}
        >
          {title}
        </div>
        <div
          className={`text-[13px] ${accent ? "text-white/70" : "text-ink-soft"}`}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <span className="h-7 w-px bg-gradient-to-b from-sprout-300 to-sprout-400" />
      <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-semibold text-sprout-700">
        {label}
      </span>
      <span className="h-7 w-px bg-gradient-to-b from-sprout-400 to-sprout-300" />
    </div>
  );
}

const assurances = [
  "End-to-end encrypted, consent-based sharing",
  "Read-only access — your data is never editable by others",
  "Revoke a midwife's access at any time, instantly",
  "Live contraction monitoring with instant alerts",
];

export default function MidwifeSection() {
  return (
    <section
      id="midwives"
      className="relative scroll-mt-20 overflow-hidden bg-paper-soft py-20 sm:py-28"
    >
      {/* subtle premium backdrop to mark this as the standout section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(40% 45% at 85% 0%, #dbf5e4 0%, transparent 60%), radial-gradient(35% 40% at 5% 100%, #e8f7ee 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sprout-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sprout-700">
            <ShieldIcon className="h-4 w-4" />
            Why midwives trust Sprout Bubba
          </span>
          <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.02em] text-sprout-900">
            The only baby app your midwife can see too.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Securely share your baby&rsquo;s real-time data with your healthcare
            provider — feeds, growth, even live contractions — with the privacy,
            consent and control of an enterprise platform. This is the difference
            that turns anxious guesswork into shared, professional care.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-sprout-700 ring-1 ring-line">
            <HeartIcon className="h-3.5 w-3.5 text-sprout-400" />
            Built with midwife feedback
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* flow */}
          <Reveal direction="left">
            <div className="mx-auto max-w-sm">
              <FlowNode
                icon={HeartIcon}
                title="Parent"
                sub="Logs feeds, sleep, growth & contractions"
              />
              <Connector label="Secure sharing" />
              <FlowNode
                icon={ShareIcon}
                title="Encrypted link"
                sub="Consent-based, revocable, read-only"
                accent
              />
              <Connector label="Live view" />
              <FlowNode
                icon={PulseIcon}
                title="Midwife"
                sub="Monitors your family in real time"
              />
            </div>
          </Reveal>

          {/* assurances + phone */}
          <Reveal direction="right" delay={100}>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="flex-1">
                <h3 className="text-[1.4rem] font-bold tracking-[-0.01em] text-sprout-900">
                  Enterprise-grade by default
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {assurances.map((a) => (
                    <li key={a} className="flex gap-3 text-[15px] text-ink">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sprout-400 text-sprout-900">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto w-[42%] min-w-[10rem] max-w-[12rem] shrink-0">
                <PhoneFrame float="slower" tilt={3}>
                  <ContractionMock />
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
