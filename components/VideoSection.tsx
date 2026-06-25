"use client";

import { useEffect, useRef, useState } from "react";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import FeedingMock from "./mockups/FeedingMock";
import SleepMock from "./mockups/SleepMock";
import GrowthMock from "./mockups/GrowthMock";
import AIChatMock from "./mockups/AIChatMock";
import ContractionMock from "./mockups/ContractionMock";

/**
 * Product "video" showcase. Until a real clip exists it auto-cycles through the
 * app screens so a visitor understands the app in seconds. To use a real video,
 * pass `src` (e.g. "/sprout-demo.mp4") — drop the file in /public and it renders
 * a muted, autoplaying, lazy <video> instead of the cycling phone.
 */
const screens = [
  { label: "Feeding", node: <FeedingMock /> },
  { label: "Sleep", node: <SleepMock /> },
  { label: "Growth", node: <GrowthMock /> },
  { label: "AI", node: <AIChatMock /> },
  { label: "Contractions", node: <ContractionMock /> },
];

export default function VideoSection({ src }: { src?: string }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (src) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % screens.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [src]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            See it in seconds
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold tracking-[-0.02em] text-sprout-900">
            The whole day, in one calm glance.
          </h2>
        </Reveal>

        <Reveal direction="scale" delay={120} className="mt-12">
          <div className="relative mx-auto max-w-md">
            {/* soft stage glow */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[3rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 40%, #dbf5e4 0%, transparent 70%)",
              }}
            />

            {src ? (
              <div className="overflow-hidden rounded-[2.6rem] shadow-[0_40px_80px_-30px_rgba(15,61,39,0.5)]">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
            ) : (
              <div
                onMouseEnter={() => (paused.current = true)}
                onMouseLeave={() => (paused.current = false)}
              >
                <PhoneFrame float="slow">
                  <div className="relative h-full w-full">
                    {screens.map((s, i) => (
                      <div
                        key={s.label}
                        aria-hidden={i !== active}
                        className="absolute inset-0 transition-all duration-700 ease-out"
                        style={{
                          opacity: i === active ? 1 : 0,
                          transform:
                            i === active
                              ? "translateY(0) scale(1)"
                              : "translateY(8px) scale(0.98)",
                          pointerEvents: i === active ? "auto" : "none",
                        }}
                      >
                        {s.node}
                      </div>
                    ))}
                  </div>
                </PhoneFrame>
              </div>
            )}

            {/* chapter dots */}
            {!src && (
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
                {screens.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setActive(i)}
                    aria-label={`Show ${s.label} screen`}
                    aria-current={i === active}
                    className={[
                      "rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-all duration-300",
                      i === active
                        ? "bg-sprout-400 text-sprout-900"
                        : "bg-mint text-sprout-700 hover:bg-mint-deep",
                    ].join(" ")}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
