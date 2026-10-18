import PolicyLayout from "@/components/PolicyLayout";

export const metadata = { title: "Terms of Service — Reviar", description: "Terms governing use of Reviar." };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service for Reviar" updated="October 18, 2026">
      <p>These Terms govern your use of the Reviar mobile application, web dashboard, and API services (collectively, the “Service”), operated by NOB DEV LABS.</p>

      <h2>1. Eligibility and Accounts</h2>
      <p>You must be at least 13 years old, or the applicable legal age in your jurisdiction, to use Reviar. You agree to provide accurate account information and to protect your credentials. You are responsible for activity performed through your account.</p>

      <h2>2. Acceptable Use</h2>
      <p>You may not use Reviar to send spam or harassment, transmit malicious code, abuse API limits, reverse engineer or scrape the Service, or upload content that is illegal, infringes another person’s rights, or violates privacy obligations.</p>

      <h2>3. Integrations and Third-Party Services</h2>
      <p>You are responsible for having permission to connect third-party developer accounts and repositories. Reviar depends on third-party availability and is not responsible for outages, rate limits, or inaccurate data caused by those services. Your use of Google services is also subject to Google’s applicable terms, including the Google APIs Terms of Service and Google API Services User Data Policy.</p>

      <h2>4. Messaging</h2>
      <p>Messaging and Whisper features include quota and anti-spam controls. Attempting to bypass those controls or using messaging for abuse may result in suspension or termination.</p>

      <h2>5. Ownership</h2>
      <p>Reviar, NOB DEV LABS, the Reviar name and logo, and our software and brand assets belong to NOB DEV LABS. You retain ownership of content you submit, subject to the permissions needed for us to operate the Service.</p>

      <h2>6. Disclaimers and Liability</h2>
      <p>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, TO THE MAXIMUM EXTENT PERMITTED BY LAW. TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOB DEV LABS IS NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.</p>

      <h2>7. Suspension and Account Deletion</h2>
      <p>We may suspend or terminate access for violations, fraud, abuse, or security risks. You may initiate account deletion from the app or through the public <a href="/delete-account">account deletion page</a>. Deletion is verified through your account email. Personal profile data and credentials are removed or anonymized, and active bounty relationships are released or closed. The mobile app lets you choose whether community posts are deleted or retained in anonymized form; the public website flow permanently deletes community posts and comments. Shared workspaces may be transferred to another eligible active member so other members’ data is not deleted.</p>

      <h2>8. Governing Law</h2>
      <p>These Terms are governed by applicable law without regard to conflict-of-law principles. Legal proceedings must be brought in a court of competent jurisdiction.</p>

      <h2>9. Contact</h2>
      <p>NOB DEV LABS<br />support@reviar.dev · terms@nobdevlabs.com<br />https://reviar.dev</p>
    </PolicyLayout>
  );
}
