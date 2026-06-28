import type { Metadata } from "next";
import Link from "next/link";
import LegalShell, { LegalSection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Sprout Bubba — contact, FAQs and useful links.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <LegalShell
      title="Support"
      updated="28 June 2026"
      intro="Need a hand with Sprout Bubba? We’re a small team and happy to help."
    >
      <LegalSection heading="Contact us">
        <p>
          Email{" "}
          <a href="mailto:support@sproutbubba.app">support@sproutbubba.app</a>{" "}
          and we’ll get back to you, usually within 2 business days. It helps to
          include your device (iPhone/Android), the app version, and a short
          description of what you were doing.
        </p>
      </LegalSection>

      <LegalSection heading="Common questions">
        <ul>
          <li>
            <strong>Can my partner use it too?</strong> Yes — invite them from
            Settings and you’ll both log to the same baby, synced live.
          </li>
          <li>
            <strong>How do I share with my midwife or doctor?</strong> In
            Settings, send a secure, consent-based, read-only link. You can
            revoke their access at any time.
          </li>
          <li>
            <strong>Is my data secure?</strong> Your data is encrypted in transit
            and only visible to you and the people you authorise. See our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </li>
          <li>
            <strong>How do I delete my account or data?</strong> See{" "}
            <Link href="/account-deletion">Account &amp; data deletion</Link>.
          </li>
        </ul>
        <p>
          More answers are on the{" "}
          <Link href="/#faq">FAQ section of our homepage</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="A note on urgent matters">
        <p>
          Sprout Bubba isn’t a medical service. For anything urgent about your or
          your baby’s health, please contact your midwife, doctor or local
          emergency services rather than emailing support.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
