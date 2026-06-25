"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Direction = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  /** direction of entrance */
  direction?: Direction;
  /** ms delay before the reveal animates */
  delay?: number;
  /** render as a different element (default div) */
  as?: ElementType;
  className?: string;
  /** stagger children: each direct child reveals in sequence */
  stagger?: boolean;
  /** ms gap between staggered children */
  staggerGap?: number;
  once?: boolean;
}

/**
 * Scroll-reveal primitive. Uses IntersectionObserver + CSS data-attributes
 * (see globals.css) so the animation is GPU-driven and ships ~0kb of runtime.
 *
 * Fails open: if the element is already on screen at mount it reveals
 * immediately, and a safety timer guarantees content is never left hidden
 * even if IntersectionObserver misbehaves.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  stagger = false,
  staggerGap = 90,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reveal = () => setShown(true);
    const node = ref.current;

    // Reduced motion / no IO support / missing node → reveal next frame.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!node || prefersReduced || typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(raf);
    }

    // If it's already within the viewport on mount, reveal right away.
    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    let raf = 0;
    if (inView) {
      raf = requestAnimationFrame(reveal);
      if (once) return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);

    // Safety net: never let content stay hidden.
    const failOpen = window.setTimeout(() => setShown(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failOpen);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [once]);

  const revealValue = direction === "up" ? "up" : direction;
  const shownAttr = shown ? "true" : "false";

  if (stagger) {
    return (
      <Tag ref={ref} className={className} data-shown={shownAttr}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div
                key={i}
                data-reveal={revealValue}
                data-shown={shownAttr}
                style={{
                  ["--reveal-delay" as string]: `${delay + i * staggerGap}ms`,
                }}
              >
                {child}
              </div>
            ))
          : children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={revealValue}
      data-shown={shownAttr}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
