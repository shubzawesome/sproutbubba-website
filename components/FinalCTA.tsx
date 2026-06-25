import Reveal from "./Reveal";
import { StoreButtons } from "./StoreButtons";

export default function FinalCTA() {
  return (
    <section id="download" className="scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal direction="scale">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-sprout-900 px-6 py-20 text-center sm:px-12 sm:py-28">
          {/* glow */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(45% 55% at 50% 0%, rgba(92,203,122,0.4) 0%, transparent 60%), radial-gradient(40% 40% at 85% 90%, rgba(143,220,171,0.22) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[clamp(2.1rem,4.6vw,3.6rem)] font-bold leading-[1.07] tracking-[-0.02em] text-white">
              Spend less time tracking.{" "}
              <span className="text-sprout-300">More time enjoying your baby.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Join the parents who&rsquo;ve made Sprout Bubba part of their day.
              Free to start, calming by design.
            </p>
            <div className="mt-10 flex justify-center">
              <StoreButtons />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
