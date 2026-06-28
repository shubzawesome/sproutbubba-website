import Image from "next/image";

import Reveal from "./Reveal";
import { StoreButtons } from "./StoreButtons";
import { LittleHeart } from "./art/Botanicals";

export default function FinalCTA() {
  return (
    <section id="download" className="scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal direction="scale">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-line bg-cream-deep px-6 pt-16 text-center sm:px-12 sm:pt-20">
          {/* soft sky wash */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 0%, #eef4e6 0%, transparent 60%), radial-gradient(40% 50% at 85% 10%, #f3e3d4 0%, transparent 60%)",
            }}
          />

          <Reveal>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
              <LittleHeart className="h-4 w-4" /> You&rsquo;ve got this
            </span>
          </Reveal>

          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.02em] text-sprout-900">
            You&rsquo;re doing an amazing job.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Sprout Bubba is here to help you enjoy the little moments — while we
            quietly remember the rest. Free to start, calming by design.
          </p>

          <div className="mt-9 flex justify-center">
            <StoreButtons size="lg" />
          </div>

          <div className="relative mx-auto mt-10 h-[260px] w-full max-w-4xl overflow-hidden sm:h-[330px]">
            <Image
              src="/art/final-cta-mum-v1-transparent.png"
              alt=""
              fill
              sizes="(max-width: 768px) 95vw, 896px"
              className="object-contain object-bottom drop-shadow-[0_22px_36px_rgba(77,60,41,0.12)]"
              priority={false}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
