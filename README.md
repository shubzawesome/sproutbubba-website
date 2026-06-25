# Sprout Bubba — Marketing Website

A premium marketing site for **Sprout Bubba**, a calm, beautifully designed
baby & pregnancy tracker. Built to feel like a funded startup product page —
warm, trustworthy, minimal, spacious.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens — see `app/globals.css`)
- Dependency-free motion layer: **IntersectionObserver scroll-reveal + CSS
  keyframes** (no animation library, so the JS payload stays tiny and Lighthouse
  stays high). The motion is isolated to `components/Reveal.tsx`, `PhoneFrame`
  and the hero, so it can be swapped for Framer Motion if ever desired.

## Run it

```bash
npm install      # restores the platform-native binaries (SWC, lightningcss)
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # type-check
```

> Note: this repo's `node_modules` was created on macOS. If you move it between
> platforms, run `npm install` again so the correct native binaries are fetched.

## Structure

```
app/
  layout.tsx        Root layout — SEO metadata, Open Graph, JSON-LD, viewport
  page.tsx          Composes the sections (server component)
  globals.css       Brand tokens, keyframes, scroll-reveal system, utilities
components/
  Navbar.tsx        Sticky nav, glassmorphism on scroll, mobile sheet
  Hero.tsx          Headline, CTAs, floating animated phone mockups
  Feature.tsx       Reusable alternating feature layout
  FeaturesSection.tsx   Feeding · Sleep · Growth
  AISection.tsx     AI assistant (with "does not replace healthcare" messaging)
  MidwifeSection.tsx    Parent → Secure sharing → Midwife (the differentiator)
  ScreenshotGallery.tsx Horizontal phone gallery
  Testimonials.tsx  Masonry testimonial cards
  FAQ.tsx           Accessible accordion
  FinalCTA.tsx      Closing call-to-action
  Footer.tsx        Links + socials
  PhoneFrame.tsx    CSS-only iPhone frame
  Reveal.tsx        Scroll-reveal primitive (fade / slide / scale / stagger)
  StoreButtons.tsx  App Store + Google Play badges
  Brand.tsx, icons.tsx
  mockups/          Faithful in-browser app screens (CSS/SVG):
                    FeedingMock, SleepMock, GrowthMock, AIChatMock, ContractionMock
```

## Brand

- Primary green `#5ccb7a` · deep forest `#0f3d27` (headings) · soft mint `#e8f7ee`
- System font stack (SF Pro / -apple-system) for an Apple-grade feel with zero
  font network requests.

## Notes / next steps

- The phone screens are hand-built CSS/SVG recreations of the real app UI.
  Swap them for exported screenshots (drop into `/public`, render with
  `next/image` inside `PhoneFrame`) whenever you have them.
- Store badge links currently point to `#download`. Wire to real App Store /
  Play URLs before launch.
