import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  /** subtle floating animation */
  float?: "slow" | "slower" | false;
  /** small rotation in degrees for depth */
  tilt?: number;
}

/**
 * A crisp, CSS-only iPhone frame. Children render inside the 9:19.5 screen.
 */
export default function PhoneFrame({
  children,
  className = "",
  float = false,
  tilt = 0,
}: PhoneFrameProps) {
  const floatClass =
    float === "slow"
      ? "animate-float-slow"
      : float === "slower"
        ? "animate-float-slower"
        : "";

  return (
    <div
      className={`relative ${floatClass} ${className}`}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div className="relative aspect-[9/19.5] w-full rounded-[2.6rem] bg-sprout-900 p-[3px] shadow-[0_40px_80px_-30px_rgba(15,61,39,0.55),0_8px_24px_-12px_rgba(15,61,39,0.4)]">
        {/* metallic edge */}
        <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/10" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-paper-soft">
          {/* dynamic island */}
          <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-sprout-900" />
          {children}
        </div>
      </div>
    </div>
  );
}
