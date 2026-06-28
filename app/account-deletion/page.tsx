import type { Metadata } from "next";
import LegalShell, { LegalSection } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description:
    "How to delete your Sprout Bubba account and the data associated with it.",
  alternates: { canonical: "/account-deletion" },
};

export default function AccountDeletionPage() {
  return (
    <LegalShell
      title="Account & data deletion"
      updated="28 June 2026"
      intro="You can delete your Sprout Bubba account and the data associated with it at any time. This page explains how, and what happens to your data."
    >
      <LegalSection heading="Delete from inside the app (fastest)">
        <ul>
          <li>Open Sprout Bubba and go to <strong>Settings</strong> (the gear icon).</li>
          <li>Scroll to the <strong>Account</strong> section.</li>
          <li>Tap <strong>Delete account</strong> and confirm.</li>
        </ul>
        <p>
          Your account and personal data are then removed as described below.
        </p>
      </LegalSection>

      <LegalSection heading="Request deletion by email">
        <p>
          If you can’t access the app, email{" "}
          <a href="mailto:privacy@sproutbubba.app">privacy@sproutbubba.app</a>{" "}
          from the address on your account with the subject “Delete my account”.
          We may ask you to verify your identity before processing the request,
          and we’ll confirm once it’s done.
        </p>
      </LegalSection>

      <LegalSection heading="What gets deleted">
        <ul>
          <li>Your account and profile (name, email, profile photo).</li>
          <li>Your baby profiles and all entries you’ve logged — feeds, sleep, nappies, pumping, growth, contractions, kicks, medicines, temperatures, notes, milestones, appointments and chat messages.</li>
          <li>Photos you’ve uploaded.</li>
          <li>The links between your account and any co-parents, caregivers, midwives or doctors.</li>
        </ul>
        <p>
          Where a baby is shared with another parent who also has an account,
          deleting your account removes <em>your</em> access and personal data;
          data the other parent independently owns or has logged may remain in
          their account.
        </p>
      </LegalSection>

      <LegalSection heading="What may be retained, and for how long">
        <p>
          After you delete your account we remove your personal data from our
          live systems promptly (generally within 30 days). Residual copies may
          persist briefly in encrypted backups before being overwritten on our
          providers’ standard backup cycles. We may retain a limited amount of
          information where we’re legally required to, in which case we keep only
          what’s necessary and for no longer than required.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          Contact{" "}
          <a href="mailto:privacy@sproutbubba.app">privacy@sproutbubba.app</a> if
          you have any questions about deleting your account or data. See also
          our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
