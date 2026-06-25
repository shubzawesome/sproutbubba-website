import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";
import FeedingMock from "./mockups/FeedingMock";
import SleepMock from "./mockups/SleepMock";
import GrowthMock from "./mockups/GrowthMock";
import AIChatMock from "./mockups/AIChatMock";
import ContractionMock from "./mockups/ContractionMock";

const shots = [
  { label: "Feeding timeline", node: <FeedingMock />, tilt: -2 },
  { label: "Sleep insights", node: <SleepMock />, tilt: 2 },
  { label: "Growth curves", node: <GrowthMock />, tilt: -2 },
  { label: "AI assistant", node: <AIChatMock />, tilt: 2 },
  { label: "Contraction timer", node: <ContractionMock />, tilt: -2 },
];

export default function ScreenshotGallery() {
  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
            A closer look
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.02em] text-sprout-900">
            Designed down to the last detail.
          </h2>
        </Reveal>
      </div>

      {/* horizontal scroll rail */}
      <Reveal direction="scale" delay={120}>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 sm:px-8 lg:justify-center">
          {shots.map((s, i) => (
            <figure
              key={s.label}
              className="group w-[clamp(13rem,60vw,15rem)] shrink-0 snap-center"
              style={{ marginTop: i % 2 ? "2.5rem" : 0 }}
            >
              <PhoneFrame tilt={s.tilt}>{s.node}</PhoneFrame>
              <figcaption className="mt-4 text-center text-[14px] font-semibold text-sprout-800">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
