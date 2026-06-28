import type { Metadata } from "next";
import LegalShell, { LegalSection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sprout Bubba collects, uses, shares and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="28 June 2026"
      intro="This Privacy Policy explains how Support Lake (“we”, “us”) collects, uses, shares and protects your information when you use the Sprout Bubba mobile app and related services (the “Service”). Sprout Bubba helps parents track their baby and pregnancy and, optionally, share that information with a midwife or doctor. Because the Service handles information about your baby’s and your own health, we take privacy seriously."
    >
      <LegalSection heading="Who we are">
        <p>
          The Service is operated by Support Lake (the “Company”), the developer
          of Sprout Bubba. If you have any questions about this policy or your
          data, contact us at{" "}
          <a href="mailto:privacy@sproutbubba.app">privacy@sproutbubba.app</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information.</strong> Your name and email address,
            and the authentication identifier from your chosen sign-in method
            (email/password, Google, or Apple). You may add an optional profile
            photo.
          </li>
          <li>
            <strong>Baby &amp; family data you enter.</strong> Baby profile
            details (name, date of birth or estimated due date) and the entries
            you log: feeds, sleep, nappies, pumping, growth measurements
            (weight, length, head circumference), contractions, kick counts,
            medicines, temperatures, diary notes, milestones, appointments,
            in-app chat messages, and any photos you attach. Some of this is{" "}
            <strong>health-related information</strong> about your baby and, in
            pregnancy mode, about you.
          </li>
          <li>
            <strong>Sharing &amp; caregiver links.</strong> When you invite a
            co-parent, caregiver, midwife or doctor, we store the link between
            your accounts so the right people can see the right baby’s data.
          </li>
          <li>
            <strong>Device &amp; technical data.</strong> Push notification
            tokens (so we can send reminders and alerts), and crash and
            diagnostic data (app version, device model, operating system, and
            error reports) to keep the app stable.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <ul>
          <li>To provide the Service and sync your data live across your own devices and the caregivers you’ve invited.</li>
          <li>To send reminders and notifications you’ve enabled (for example, a gentle next-feed reminder, or a contraction-session alert to a linked practitioner).</li>
          <li>To respond to your support requests.</li>
          <li>To diagnose crashes, fix bugs, and improve the app.</li>
          <li>To protect the Service and comply with legal obligations.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information, and we do
          not use your baby’s health data for advertising.
        </p>
      </LegalSection>

      <LegalSection heading="When information is shared">
        <ul>
          <li>
            <strong>With people you choose.</strong> Co-parents and caregivers
            you invite can view and add to your baby’s data; midwives or doctors
            you link receive <strong>read-only</strong> access. Sharing is
            consent-based and you can revoke any person’s access at any time.
          </li>
          <li>
            <strong>With service providers.</strong> We use Google Firebase
            (Authentication, Cloud Firestore, Cloud Storage, Cloud Messaging and
            Crashlytics) to host data, sign you in, store photos, send
            notifications and report crashes, and Apple and Google for the
            sign-in methods you choose. These providers process data on our
            behalf under their own terms and security commitments.
          </li>
          <li>
            <strong>For legal reasons.</strong> If required by law or to protect
            rights, safety, and the integrity of the Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Storage, security &amp; international transfers">
        <p>
          Your data is stored on Google Firebase infrastructure and may be
          processed on servers located outside your country. We protect data in
          transit with encryption and restrict access using server-side security
          rules so that only you and the people you’ve authorised can read your
          baby’s data. No method of transmission or storage is 100% secure, but
          we work to protect your information using industry-standard measures.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep your data">
        <p>
          We keep your information for as long as your account is active. When
          you delete your account, we delete or de-identify your personal data,
          except where we must retain certain records to comply with legal
          obligations. See{" "}
          <a href="/account-deletion">Account &amp; data deletion</a> for how to
          request deletion.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights and choices">
        <ul>
          <li><strong>Access &amp; correct.</strong> You can view and edit most of your data directly in the app.</li>
          <li><strong>Delete.</strong> You can delete individual entries, or delete your whole account and its data — see <a href="/account-deletion">Account &amp; data deletion</a>.</li>
          <li><strong>Control sharing.</strong> You can revoke a caregiver’s, midwife’s or doctor’s access at any time.</li>
          <li><strong>Notifications.</strong> You can turn notifications on or off in the app and your device settings.</li>
          <li>Depending on where you live, you may have additional rights (such as access, portability, or objection). Contact us to exercise them.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Children’s privacy">
        <p>
          Sprout Bubba is intended for parents and caregivers (adults). The data
          recorded is about your baby and is entered and controlled by you as
          the parent or guardian. The app is not directed to, and is not
          intended to be used by, children. If you believe a child has created
          an account, contact us and we will remove it.
        </p>
      </LegalSection>

      <LegalSection heading="Not a medical service">
        <p>
          Sprout Bubba is a tracking and organisation tool and any guidance or
          reminders it provides are general in nature. It is not a medical
          device and does not provide medical advice, diagnosis or treatment.
          Always rely on your own judgement and your midwife, doctor or emergency
          services for medical decisions.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. We’ll update the “Last
          updated” date above and, for significant changes, provide a more
          prominent notice. Your continued use of the Service after changes take
          effect means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions or requests about your privacy? Email{" "}
          <a href="mailto:privacy@sproutbubba.app">privacy@sproutbubba.app</a> or{" "}
          <a href="mailto:hello@sproutbubba.app">hello@sproutbubba.app</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
