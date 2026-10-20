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
      <aside className={styles.notice}><strong>The short version</strong><p>The optional importer reads selected analyst-rating emails with the owner’s permission. Its new secure local mode encrypts tokens, the sync ledger and backups, and the generated dashboard on the computer running it. It does not retroactively encrypt the separate legacy static archive or existing hosted dashboard. This public website contains no Gmail data and does not connect to Gmail.</p></aside>

      <h2>1. Google account access</h2>
      <p>The owner can explicitly authorize a Google OAuth Desktop app client using the Gmail read-only permission, <code>https://www.googleapis.com/auth/gmail.readonly</code>. Google grants mailbox-wide read access, not access limited to one sender. The importer narrows its requests to Interactive Brokers analyst-rating notifications and validates the matching sender and subject.</p>
      <p>It reads relevant message headers, receipt times, and message text, including text parts retrieved through the Gmail API when necessary. It also uses message and history identifiers for incremental syncing, and reads the mailbox address to derive a local account fingerprint. It does not request permission to send, modify, or delete messages. Sign-in occurs with Google; the app does not collect the Google account password.</p>

      <h2>2. How information is used</h2>
      <p>Information from matching notifications is parsed into instruments, analyst-rating counts and changes, and receipt dates. These records support a personal historical timeline, comparisons with stock-price history, deduplication, and source checks. Secure local mode does not produce a plaintext archive export and disables CSV downloads. Separate legacy static tools still support exports from the older archive; they are not part of the encrypted Gmail workflow.</p>
      <p>Gmail information is not used for advertising, profiling for advertising, sale, or model training. The standalone app has no AI-processing service or analytics integration.</p>

      <h2>3. Storage and protection</h2>
      <p><strong>Secure local mode.</strong> The new local workflow uses AES-256-GCM authenticated encryption for saved OAuth access and refresh tokens, the sync state, its backup, and the generated dashboard archive. These files are stored outside the source repository. The default directory is <code>~/.local/share/consensus-lens</code>; the owner can select a different private directory, including a local application-data directory on Windows.</p>
      <p>The encryption key is held in the operating system’s credential store, not in a file beside the encrypted data. The implementation selects Windows Credential Locker, macOS Keychain, or Linux Secret Service. It stops when the required store is unsupported, unavailable or locked, the key is missing, or encrypted data cannot be validated. There is no plaintext fallback. Key creation requires an explicit owner-initiated setup step.</p>
      <p>The encrypted sync state retains source message IDs, a hashed mailbox fingerprint, parsed records, revision history, and a sync cursor. The importer does not retain raw email bodies, recipient lists, or account numbers in that ledger. Secure dashboard files contain research fields and pseudonymized source IDs, not OAuth tokens or raw messages. Pseudonymization is not encryption or permission to redistribute data.</p>
      <p><strong>Local display and its limits.</strong> The local preview decrypts the archive in memory and serves it only through the computer’s loopback address, <code>127.0.0.1</code>. It does not write a decrypted dashboard file or publish the archive. The browser necessarily receives plaintext to display the research. Local software, browser extensions, memory or crash dumps, screenshots, and manual copying remain outside the protection of this file encryption. Use a trusted computer and browser, protect device storage and backups, and do not expose the preview server to a network.</p>
      <p><strong>Downloaded OAuth configuration.</strong> The original Google OAuth client JSON download remains plaintext and is not silently deleted or encrypted by the app. Keep it outside the repository and shared folders, protect it with appropriate account and file permissions, and remove it yourself when no longer needed. Required client fields are included in the encrypted token after authorization.</p>
      <p><strong>Legacy files and the existing hosted dashboard.</strong> The older static archive and its exports remain plaintext data files. The private repository and existing owner-only OpenAI Sites dashboard are separate from secure local mode; their access restrictions are not evidence of application-level encryption. This update does not migrate, delete, or retroactively encrypt those copies, and does not assert how a hosting provider encrypts its underlying storage. Secure mode also stops if it detects legacy plaintext token or sync-state files in the selected private directory, rather than silently migrating them.</p>
      <p><strong>Verification limits.</strong> Encryption and storage boundaries have been tested offline with synthetic data and mocked credential stores. The real native OS credential store, including Windows, and live OAuth and Gmail syncing have not yet been validated in the owner’s deployment. These implementation safeguards are not a security guarantee, Google verification, or independent certification.</p>

      <h2>4. Network requests and sharing</h2>
      <p>The local importer communicates with Google for authorization and Gmail retrieval. It does not automatically upload Gmail content, tokens, or the private ledger to this website, a public repository, a hosted dashboard, an advertising service, or an AI service.</p>
      <p>A separate legacy historical-price refresh contacts Yahoo Finance with public instrument symbols and date ranges. It does not send Gmail message contents or authentication credentials to that provider. This legacy tool is not part of secure local mode: the encrypted workflow preserves existing prices and does not automatically refresh them or publish a dashboard.</p>
      <p>If the owner separately copies, exports using legacy tools, uploads, backs up, or hosts files elsewhere, that destination will receive the selected files and its own terms and privacy practices apply. Secure local mode does not perform these transfers. A separately hosted owner-only dashboard is not the same as this public information site.</p>

      <h2>5. Retention, revocation, and deletion</h2>
      <p>Local records are retained until the owner removes them; the app does not apply an automatic expiry period. Secure syncing keeps the previous committed state as an encrypted backup, and removing a source email does not automatically remove an already imported research record.</p>
      <p>The owner can revoke the app’s Google access through <a href="https://myaccount.google.com/connections">Google Account connections</a>. Revocation stops future authorized access, but does not delete local copies. Encrypted tokens, sync state, backups and dashboard files, downloaded client configuration, legacy exports, and separately hosted copies each require deliberate removal where they are stored. Removing local copies does not delete the original emails in Gmail, and deleting a local token does not itself revoke the Google grant.</p>
      <p>The encryption key is managed separately in the OS credential store. Losing or deleting it can make encrypted files unrecoverable; the app does not automatically replace a missing key or recover old files. Review recovery and backup arrangements before relying on the encrypted archive.</p>

      <h2>6. This public website</h2>
      <p>The public homepage, privacy page, and terms page do not request Gmail access, offer account registration, or contain the private research dataset. The pages have no advertising or analytics code. The hosting provider, Vercel, receives ordinary request information needed to serve the website, such as IP addresses, browser information, and requested URLs. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s Privacy Policy</a> for its handling of that information.</p>

      <h2>7. Google API user data</h2>
      <p>Consensus Lens limits the use and transfer of information received from Google APIs to the personal research functionality described here, in accordance with the Limited Use requirements of the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>. This statement does not represent Google verification or an independent security certification.</p>

      <h2>8. Contact and changes</h2>
      <p>Questions about this policy can be sent to <a href="mailto:jiangyan@howtobuild.app">jiangyan@howtobuild.app</a>. Do not include tokens, credentials, or raw financial emails in a support message. Material changes to the app’s data handling should be reflected in this page before the changed functionality is used.</p>
    </article>
  );
}
