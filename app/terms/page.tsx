import type { Metadata } from "next";
import LegalShell, { LegalSection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Sprout Bubba app.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      updated="28 June 2026"
      intro="These Terms of Service (“Terms”) are a legal agreement between you and Support Lake (“we”, “us”) and govern your use of the Sprout Bubba app and related services (the “Service”). By creating an account or using the Service, you agree to these Terms. If you do not agree, please do not use the Service."
    >
      <LegalSection heading="Who can use Sprout Bubba">
        <p>
          You must be at least 18 years old (or the age of majority where you
          live) to create an account. By using the Service you confirm that the
          information you provide is accurate and that you are responsible for
          activity under your account.
        </p>
      </LegalSection>

      <LegalSection heading="Your account">
        <p>
          You are responsible for keeping your login credentials secure and for
          all activity under your account. Tell us promptly if you suspect any
          unauthorised use. You may invite co-parents, caregivers, midwives or
          doctors; you are responsible for who you invite and for revoking
          access when it’s no longer appropriate.
        </p>
      </LegalSection>

      <LegalSection heading="Your content and data">
        <p>
          The data you enter (about your baby, pregnancy and family) is yours.
          You grant us a limited licence to store, process and transmit it solely
          to operate and provide the Service to you and the people you authorise
          — for example, to sync it across devices and share it with a midwife
          you’ve linked. We don’t claim ownership of your content and we don’t
          sell it. See our <a href="/privacy">Privacy Policy</a> for details.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>use the Service for any unlawful purpose or to upload content you don’t have the right to share;</li>
          <li>attempt to access another family’s data without authorisation;</li>
          <li>interfere with, disrupt, reverse-engineer or attempt to breach the security of the Service;</li>
          <li>use the Service to harass, harm or impersonate others.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Not medical advice">
        <p>
          <strong>
            Sprout Bubba is a tracking and organisation tool, not a medical
            device or a medical service.
          </strong>{" "}
          Any reminders, summaries, charts or guidance are general and
          informational only and are not a substitute for professional medical
          advice, diagnosis or treatment. Never disregard or delay seeking
          professional advice because of something in the app. In an emergency,
          contact your local emergency services. Decisions about your or your
          baby’s health remain yours, in consultation with your midwife, doctor
          or other qualified professional.
        </p>
      </LegalSection>

      <LegalSection heading="Availability and changes">
        <p>
          We may update, suspend or discontinue parts of the Service, and we may
          modify these Terms. If we make material changes, we’ll update the “Last
          updated” date and, where appropriate, provide additional notice. Your
          continued use after changes take effect means you accept the updated
          Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimers and limitation of liability">
        <p>
          The Service is provided “as is” and “as available” without warranties
          of any kind, to the fullest extent permitted by law. We do not warrant
          that the Service will be uninterrupted, error-free, or that data will
          always sync or be delivered on time. To the maximum extent permitted by
          law, we are not liable for any indirect, incidental or consequential
          loss, or for any loss arising from reliance on the Service for medical
          or time-critical decisions. Nothing in these Terms limits rights you
          may have under mandatory consumer law that cannot lawfully be excluded.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          You can stop using the Service and delete your account at any time (see{" "}
          <a href="/account-deletion">Account &amp; data deletion</a>). We may
          suspend or terminate access if you breach these Terms or to protect the
          Service or other users.
        </p>
      </LegalSection>

      <LegalSection heading="App stores">
        <p>
          If you download Sprout Bubba from the Apple App Store or Google Play,
          your use is also subject to that store’s terms. Apple and Google are
          not responsible for the Service or for support. Where you obtained the
          app from the Apple App Store, the standard{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Apple Licensed Application End User License Agreement
          </a>{" "}
          also applies and, to the extent of any conflict with these Terms
          regarding the licensed application, those EULA terms govern.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of New Zealand, without regard to
          conflict-of-law rules, and you submit to the non-exclusive jurisdiction
          of the New Zealand courts — except where mandatory local law in your
          country of residence provides otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:hello@sproutbubba.com">hello@sproutbubba.com</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
