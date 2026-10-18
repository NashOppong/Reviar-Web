import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata = { title: "Privacy Policy — Reviar", description: "How Reviar collects, uses, and protects information." };

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy for Reviar" updated="October 18, 2026">
      <p>This Privacy Policy explains how NOB DEV LABS (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards information when you use the Reviar mobile application, web dashboard, and associated backend API services.</p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>Depending on your sign-in method, we collect your email address, display name, username, profile image, and authentication identifiers. We also collect workspace data you create, including task descriptions, bounty posts, code comments, project metadata, messages, and related activity.</p>
      <h3>Connected developer services</h3>
      <p>When you explicitly connect a developer service, we process the credentials and integration data needed to provide that feature. Access tokens are encrypted where stored. Reviar does not request third-party access unless you choose to connect the relevant integration.</p>
      <h3>Technical information</h3>
      <p>Our infrastructure may process standard request and security information such as IP address, authentication events, device push tokens, and service logs. The landing site uses Vercel Analytics to understand site usage.</p>

      <h2>2. How We Use Information</h2>
      <p>We use information to authenticate accounts, provide messaging and workspace features, operate integrations you enable, enforce anti-spam and quota controls, secure the Service, respond to support requests, and improve reliability.</p>

      <h2 id="google-user-data">3. Google Sign-In and Google User Data</h2>
      <p>Reviar uses Google Sign-In only to authenticate users and create or access a Reviar account. The mobile app requests only the <code>openid</code>, <code>email</code>, and <code>profile</code> scopes. We do not request Gmail, Drive, Calendar, Contacts, or other Google API access.</p>
      <p>When you sign in with Google, we receive and store your Google subject identifier, email address, name, and profile image URL. We use this information to create and authenticate your Reviar account and display your name and avatar in the Service.</p>
      <p>We do not sell Google user data, use it for advertising or behavioral profiling, or use it to train generalized AI or machine-learning models. We do not request offline access or store Google refresh tokens. Our handling of Google data follows the Google API Services User Data Policy and Limited Use requirements.</p>

      <h2>4. Storage, Retention, and Security</h2>
      <p>Traffic is protected using HTTPS/TLS. Passwords are stored as hashes, Google ID tokens are cryptographically verified, and sensitive integration tokens are encrypted where stored. Account information is retained while the account is active. Some messages, security records, and anonymized shared-workspace records may remain as needed for service integrity, abuse prevention, or legal obligations.</p>

      <h2>5. Service Providers</h2>
      <p>We use infrastructure and service providers such as database, cache, hosting, email delivery, media storage, and analytics providers to operate Reviar. We share only the information necessary for those providers to perform their services. We do not sell, rent, or trade personal data for marketing.</p>

      <h2>6. Correction and Account Deletion</h2>
      <p>You can correct profile information through account settings. You can initiate account deletion inside the app or through our public <Link href="/delete-account">account deletion page</Link>.</p>
      <p>Deletion is verified through an email link and one-time code. We remove or anonymize personal profile data, clear authentication and integration credentials, invalidate sessions, remove the user from shared workspaces and groups, and release or close active bounty relationships. In the mobile app, users can choose whether their community posts are deleted or retained in anonymized form as “Deleted User.” The public website deletion flow permanently deletes community posts, comments, and related public content. Shared workspaces with other members are preserved and ownership may be transferred to an eligible active manager or member. Personal workspaces with no other members are deleted.</p>
      <p>Reviar does not offer a self-service data export feature. Contact <a href="mailto:privacy@nobdevlabs.com">privacy@nobdevlabs.com</a> for privacy questions.</p>

      <h2>7. Children’s Privacy</h2>
      <p>Reviar is intended for developers, project managers, and engineers and is not directed to children under 13, or the applicable higher age in a jurisdiction. We do not knowingly collect children’s personal information.</p>

      <h2>8. Changes</h2>
      <p>We may update this policy as our practices change. We will update the date above and provide additional notice for material changes where appropriate.</p>

      <h2>9. Contact</h2>
      <p>NOB DEV LABS<br />support@reviar.dev · privacy@nobdevlabs.com<br />https://reviar.dev</p>
    </PolicyLayout>
  );
}
