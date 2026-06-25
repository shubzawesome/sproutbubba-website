import type { ComponentType, ReactNode } from "react";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

interface FeatureProps {
  eyebrow: string;
  title: ReactNode;
  body: string;
  icon: ComponentType<{ className?: string }>;
  mockup: ReactNode;
  /** image on the right (default) or left */
  reverse?: boolean;
  /** extra content under the body (bullets, mini cards) */
  children?: ReactNode;
  tilt?: number;
}

export default function Feature({
  eyebrow,
  title,
  body,
  icon: Icon,
  mockup,
  reverse = false,
  children,
  tilt = 0,
}: FeatureProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* copy */}
      <Reveal
        direction={reverse ? "right" : "left"}
        className={reverse ? "lg:order-2" : ""}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-[13px] font-semibold text-sprout-700">
          <Icon className="h-4 w-4" />
          {eyebrow}
        </span>
        <h3 className="mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.02em] text-sprout-900">
          {title}
        </h3>
        <p className="mt-4 max-w-lg text-[1.08rem] leading-relaxed text-ink-soft">
          {body}
        </p>
        {children && <div className="mt-7">{children}</div>}
      </Reveal>

      {/* phone */}
      <Reveal
        direction={reverse ? "left" : "right"}
        delay={120}
        className={reverse ? "lg:order-1" : ""}
      >
        <div className="mx-auto w-[clamp(15rem,70%,19rem)]">
          <PhoneFrame float="slow" tilt={tilt}>
            {mockup}
          </PhoneFrame>
        </div>
      </Reveal>
    </div>
  );
}
