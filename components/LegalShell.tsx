import type { ReactNode } from "react";
import Link from "next/link";
import Brand from "./Brand";
import Footer from "./Footer";

/**
 * Shared chrome + typography for the legal pages (privacy, terms, support,
 * account deletion). Plain prose styling using the site tokens — no typography
 * plugin needed.
 */
export default function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Sprout Bubba home">
            <Brand />
          </Link>
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-[14px] font-semibold text-sprout-700 transition-colors hover:text-sprout-900"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] text-sprout-900">
          {title}
        </h1>
        <p className="mt-3 text-[14px] font-medium text-ink-soft">
          Last updated: {updated}
        </p>
        {intro && (
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}

        <div
          className="legal-prose mt-8 space-y-6 text-[1rem] leading-relaxed text-ink-soft"
        >
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}

/** A titled section block for the legal pages. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-[1.3rem] font-bold tracking-[-0.01em] text-sprout-900">
        {heading}
      </h2>
      {children}
    </section>
  );
}
