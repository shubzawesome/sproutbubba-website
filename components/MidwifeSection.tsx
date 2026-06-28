import Image from "next/image";
import Reveal from "./Reveal";
import { LeafBranch } from "./art/Botanicals";
import { HeartIcon, ShieldIcon, ShareIcon, PulseIcon, CheckIcon } from "./icons";

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
        "flex w-full items-center gap-3 rounded-2xl p-3.5",
        accent ? "bg-sprout-900 text-white" : "card-soft",
      ].join(" ")}
    >
      <span
        className={[
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
          accent ? "bg-white/15 text-sprout-200" : "bg-mint text-sprout-600",
        ].join(" ")}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className={`text-[14px] font-bold ${accent ? "text-white" : "text-sprout-900"}`}>
          {title}
        </div>
        <div className={`text-[12px] ${accent ? "text-white/70" : "text-ink-soft"}`}>
          {sub}
        </div>
      </div>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 pl-5" aria-hidden>
      <span className="h-5 w-px bg-gradient-to-b from-sprout-300 to-sprout-400" />
      <span className="rounded-full bg-mint px-2.5 py-0.5 text-[10.5px] font-semibold text-sprout-700">
        {label}
      </span>
    </div>
  );
}

const assurances = [
  "Consent-based, encrypted sharing — you decide who sees what",
  "Read-only access; your data is never editable by others",
  "Revoke a midwife or doctor's access at any time, instantly",
  "Live contraction monitoring with instant alerts to your team",
];

export default function MidwifeSection() {
  return (
    <section
      id="midwives"
      className="relative scroll-mt-20 overflow-hidden bg-paper-soft py-20 sm:py-28"
    >
      {/* warm standout backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(40% 45% at 85% 0%, #eaf2e3 0%, transparent 60%), radial-gradient(35% 40% at 5% 100%, #f3e3d4 0%, transparent 60%)",
        }}
      />
      <LeafBranch aria-hidden className="animate-sway absolute left-0 top-10 hidden h-24 w-40 opacity-60 lg:block" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sprout-200 bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-sprout-700">
            <ShieldIcon className="h-4 w-4" />
            What no other baby app offers
          </span>
          <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.02em] text-sprout-900">
            The only baby app your midwife
            <br className="hidden sm:block" /> or doctor can see too.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Most baby apps stop at your front door. Sprout lets you securely share
            your baby&rsquo;s real-time data — feeds, growth, even live
            contractions — with the midwife or doctor caring for you. It turns
            anxious, late-night guesswork into shared, professional reassurance.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 text-[12.5px] font-semibold text-sprout-700 ring-1 ring-line">
            <HeartIcon className="h-3.5 w-3.5 text-blush" />
            Built with midwife feedback
          </p>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* illustration */}
          <Reveal direction="left">
            <div className="relative mx-auto max-w-[34rem]">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-deep/55 blur-3xl"
              />
              <Image
                src="/art/midwife-sharing-v1-transparent.png"
                alt="A watercolor illustration of a parent and baby securely sharing health updates with a midwife"
                width={1254}
                height={1254}
                sizes="(max-width: 1024px) 86vw, 34rem"
                className="relative h-auto w-full select-none drop-shadow-[0_26px_50px_rgba(80,100,80,0.13)]"
              />
            </div>
          </Reveal>

          {/* flow + assurances */}
          <Reveal direction="right" delay={100}>
            <div className="mx-auto max-w-sm lg:mx-0">
              <FlowNode icon={HeartIcon} title="Parent" sub="Logs feeds, sleep, growth & contractions" />
              <Connector label="Secure, consent-based sharing" />
              <FlowNode icon={ShareIcon} title="Encrypted link" sub="Revocable, read-only — always your choice" accent />
              <Connector label="Real-time view" />
              <FlowNode icon={PulseIcon} title="Midwife or doctor" sub="Monitors and supports your family" />
            </div>

            <ul className="mt-8 space-y-3.5">
              {assurances.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sprout-400 text-sprout-900">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
