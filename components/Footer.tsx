import Brand from "./Brand";
import { StoreButtons } from "./StoreButtons";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Guidance", href: "#guidance" },
      { label: "Midwife sharing", href: "#midwives" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Support", href: "mailto:support@sproutbubba.app" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Brand />
            <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
              The calm, beautifully designed baby &amp; pregnancy tracker — made
              with new parents, for new parents.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-sprout-500">
                Get the app
              </p>
              <StoreButtons />
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-sprout-500">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14.5px] text-ink-soft transition-colors hover:text-sprout-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 text-[13px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sprout Bubba. Made with care for growing families.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-sprout-400" />
            Sprout Bubba provides general guidance and is not a substitute for
            professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
