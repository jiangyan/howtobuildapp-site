import type { Metadata } from "next";
import Link from "next/link";
import { CONSENSUS_ORIGIN, consensusBasePath } from "./links";
import styles from "./site.module.css";
import Arrow from "./arrow";

export const metadata: Metadata = { alternates: { canonical: CONSENSUS_ORIGIN } };

export default async function ConsensusHome() {
  const base = await consensusBasePath();
  return (
    <>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}><span /> PERSONAL RESEARCH, CLEARER</p>
          <h1>Analyst sentiment.<br /><em>Seen in context.</em></h1>
          <p className={styles.lead}>Consensus Lens organizes analyst-rating updates delivered by Interactive Brokers and compares them with historical stock prices. A quieter way to examine what changed, and what happened next.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#how-it-works">How it works <span><Arrow direction="down" /></span></a>
            <Link className={styles.secondary} href={`${base}/policy`}>Read the privacy policy <span><Arrow /></span></Link>
          </div>
          <p className={styles.small}>Built for one owner. No public sign-ups. No trading execution.</p>
        </div>
        <div className={styles.visual} aria-label="Illustration of the research workflow, not actual portfolio or market data">
          <div className={styles.visualTop}><span>THE RESEARCH LENS</span><span className={styles.pill}>READ ONLY</span></div>
          <div className={styles.visualBody}>
            <div className={styles.visualRow}><span className={styles.visualNumber}>01</span><div><strong>Rating updates</strong><p>Selected IBKR email notifications</p></div><span><Arrow direction="down-left" /></span></div>
            <div className={styles.connector} aria-hidden="true" />
            <div className={styles.lens}><div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div><strong>One clear timeline</strong><p>Consensus + historical prices</p></div>
            <div className={styles.connector} aria-hidden="true" />
            <div className={styles.visualRow}><span className={styles.visualNumber}>02</span><div><strong>Perspective, not predictions</strong><p>Compare periods. Question the pattern.</p></div><span><Arrow /></span></div>
          </div>
          <div className={styles.visualBottom}><span className={styles.dot} /> Illustrative workflow. No private data shown.</div>
        </div>
      </section>
      <section id="how-it-works" className={styles.section}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>FROM INBOX TO INSIGHT</p><h2>A small tool, with clear boundaries.</h2></div>
        <div className={styles.cards}>
          <article><span className={styles.cardNumber}>01 / COLLECT</span><h3>Read relevant updates</h3><p>The optional local Gmail importer requests read-only access, then filters for IBKR analyst-rating notifications. It cannot send, modify, or delete email.</p></article>
          <article><span className={styles.cardNumber}>02 / ORGANIZE</span><h3>Keep the useful signal</h3><p>Rating counts, changes, instruments, and receipt dates become a private historical archive. The importer does not save raw email bodies in its ledger.</p></article>
          <article><span className={styles.cardNumber}>03 / COMPARE</span><h3>Explore the same period</h3><p>Compare analyst distributions and historical prices on aligned timelines, with source limitations and missing observations kept visible.</p></article>
        </div>
      </section>
      <section className={styles.boundary}>
        <div><p className={styles.eyebrow}>PUBLIC INFORMATION. PRIVATE WORKSPACE.</p><h2>The research stays separate.</h2><p>This website explains the app and its data practices. It has no Gmail connection, authentication tokens, or email-derived dataset. The owner’s research dashboard is a separate, access-restricted workspace.</p></div>
        <div className={styles.boundaryNote}><strong>Personal use only</strong><p>Gmail authorization is initiated separately by the owner in the local app. Visiting this site does not grant email access.</p><Link href={`${base}/policy`}>Understand the data flow <span><Arrow direction="right" /></span></Link></div>
      </section>
      <p className={styles.disclaimer}>For historical research, not investment advice. Analyst opinions and past returns do not establish future performance.</p>
    </>
  );
}
