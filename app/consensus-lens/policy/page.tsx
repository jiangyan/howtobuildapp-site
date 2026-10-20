import type { Metadata } from "next";
import { consensusPageUrl } from "../links";
import styles from "../site.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
  title: "Privacy Policy",
  description: "How the personal Consensus Lens tool accesses, uses, stores, and handles Google user data.",
  alternates: { canonical: await consensusPageUrl("/policy") },
  };
}

export default function PrivacyPolicy() {
  return (
    <article className={styles.document}>
      <p className={styles.eyebrow}>CONSENSUS LENS / PRIVACY</p>
      <h1>Your research.<br /><em>Your control.</em></h1>
      <p className={styles.documentMeta}>Privacy Policy · Updated October 20, 2026</p>
      <p className={styles.documentLead}>Consensus Lens is a personal research tool operated by Yan Jiang. This policy describes the standalone local app and this public information website. It is not a public multi-user service.</p>
      <aside className={styles.notice}><strong>The short version</strong><p>The optional importer reads selected analyst-rating emails with the owner’s permission. Tokens and the private sync ledger stay on the computer running it. This public website contains no Gmail data and does not connect to Gmail.</p></aside>

      <h2>1. Google account access</h2>
      <p>The owner can explicitly authorize a Google OAuth Desktop app client using the Gmail read-only permission, <code>https://www.googleapis.com/auth/gmail.readonly</code>. Google grants mailbox-wide read access, not access limited to one sender. The importer narrows its requests to Interactive Brokers analyst-rating notifications and validates the matching sender and subject.</p>
      <p>It reads relevant message headers, receipt times, and message text, including text parts retrieved through the Gmail API when necessary. It also uses message and history identifiers for incremental syncing, and reads the mailbox address to derive a local account fingerprint. It does not request permission to send, modify, or delete messages. Sign-in occurs with Google; the app does not collect the Google account password.</p>

      <h2>2. How information is used</h2>
      <p>Information from matching notifications is parsed into instruments, analyst-rating counts and changes, and receipt dates. These records support a personal historical timeline, comparisons with stock-price history, deduplication, source checks, and owner-initiated exports. Gmail information is not used for advertising, profiling for advertising, sale, or model training. The standalone app has no AI-processing service or analytics integration.</p>

      <h2>3. Storage and protection</h2>
      <p>OAuth client configuration, access and refresh tokens, and the private sync state are stored outside the source repository on the computer running the importer. The default private directory is <code>~/.local/share/consensus-lens</code>. The sync state retains source message IDs, a hashed mailbox fingerprint, parsed records, revision history, and a sync cursor. The importer does not retain raw email bodies, recipient lists, or account numbers in that ledger.</p>
      <p>Private JSON files use owner-only file permissions where supported by the operating system. They are not encrypted by the app. Protect the computer, its user account, disk, and backups accordingly. A refresh token remains sensitive even though the granted Gmail access is read-only.</p>
      <p>Exports and the dashboard archive contain parsed research fields and pseudonymized source IDs, not OAuth tokens or raw messages. Pseudonymization does not make the research data public or freely redistributable. This information is not included in this public website.</p>

      <h2>4. Network requests and sharing</h2>
      <p>The local importer communicates with Google for authorization and Gmail retrieval. It does not automatically upload Gmail content, tokens, or the private ledger to this website, a public repository, a hosted dashboard, an advertising service, or an AI service.</p>
      <p>A separate, optional historical-price refresh contacts Yahoo Finance with public instrument symbols and date ranges. It does not send Gmail message contents or authentication credentials to that provider. Refreshing prices and publishing a dashboard are separate actions from importing Gmail.</p>
      <p>If the owner explicitly exports, uploads, backs up, or hosts an archive elsewhere, that destination will receive the selected files and its own terms and privacy practices apply. A separately hosted owner-only dashboard is not the same as this public information site.</p>

      <h2>5. Retention, revocation, and deletion</h2>
      <p>Local records are retained until the owner removes them; the app does not apply an automatic expiry period. Syncing may keep an earlier local state backup, and removing a source email does not automatically remove an already imported research record.</p>
      <p>The owner can revoke the app’s Google access through <a href="https://myaccount.google.com/connections">Google Account connections</a>. Revocation stops future authorized access, but does not delete local copies. To remove retained information, delete the token, sync state and backups, local exports, and any dashboard archives or copies separately. Removing local copies does not delete the original emails in Gmail.</p>

      <h2>6. This public website</h2>
      <p>The public homepage, privacy page, and terms page do not request Gmail access, offer account registration, or contain the private research dataset. The pages have no advertising or analytics code. The hosting provider, Vercel, receives ordinary request information needed to serve the website, such as IP addresses, browser information, and requested URLs. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s Privacy Policy</a> for its handling of that information.</p>

      <h2>7. Google API user data</h2>
      <p>Consensus Lens limits the use and transfer of information received from Google APIs to the personal research functionality described here, in accordance with the Limited Use requirements of the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>. This statement does not represent Google verification or an independent security certification.</p>

      <h2>8. Contact and changes</h2>
      <p>Questions about this policy can be sent to <a href="mailto:jiangyan@howtobuild.app">jiangyan@howtobuild.app</a>. Do not include tokens, credentials, or raw financial emails in a support message. Material changes to the app’s data handling should be reflected in this page before the changed functionality is used.</p>
    </article>
  );
}
