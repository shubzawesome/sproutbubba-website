import Brand from "./Brand";
import { StoreButtons } from "./StoreButtons";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "AI Assistant", href: "#ai" },
      { label: "Midwife sharing", href: "#midwives" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Support", href: "mailto:support@sproutbubba.app" },
      { label: "Contact", href: "mailto:hello@sproutbubba.app" },
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

function Social({
  href,
  label,
  d,
}: {
  href: string;
  label: string;
  d: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-sprout-300 hover:text-sprout-600"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={d} />
      </svg>
    </a>
  );
}

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

            <a
              href="mailto:hello@sproutbubba.app"
              className="mt-6 inline-block text-[14px] font-medium text-sprout-700 hover:text-sprout-900"
            >
              hello@sproutbubba.app
            </a>

            <div className="mt-5 flex gap-3">
              <Social
                href="#"
                label="Instagram"
                d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.42.6.2 1 .47 1.4.9.43.4.7.8.9 1.4.17.4.36 1 .42 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.42 2.2-.2.6-.47 1-.9 1.4-.4.43-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.47-1.4-.9-.43-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.42-2.2.2-.6.47-1 .9-1.4.4-.43.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.07 3.3c.05 1.1.24 1.7.4 2.1.2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-3.3s0-2.1-.07-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
              />
              <Social
                href="#"
                label="TikTok"
                d="M16.5 3c.3 2 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.5-5.4 5.5A5.3 5.3 0 0 1 5.6 14c0-3 2.4-5.3 5.6-5.1v2.6c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1.1-2.5 2.6 0 1.5 1.1 2.7 2.6 2.7 1.5 0 2.6-1.1 2.6-2.9V3h3.2Z"
              />
              <Social
                href="#"
                label="X"
                d="M18.9 3H21l-6.6 7.6L22 21h-6.2l-4.8-6.3L5.4 21H3.3l7-8.1L2.4 3h6.3l4.4 5.8L18.9 3Zm-1.1 16.2h1.2L7.3 4.7H6L17.8 19.2Z"
              />
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
