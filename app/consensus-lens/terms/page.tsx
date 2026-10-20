import type { Metadata } from "next";
import { CONSENSUS_ORIGIN } from "../links";
import styles from "../site.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Personal-use scope and important limitations of Consensus Lens.",
  alternates: { canonical: `${CONSENSUS_ORIGIN}/terms` },
};

export default function Terms() {
  return (
    <article className={styles.document}>
      <p className={styles.eyebrow}>CONSENSUS LENS / TERMS</p>
      <h1>A tool for research.<br /><em>Not a trading service.</em></h1>
      <p className={styles.documentMeta}>Terms of Use · Updated October 20, 2026</p>
      <p className={styles.documentLead}>These notes describe the current scope and limitations of Consensus Lens, a personal software project operated by Yan Jiang. This website is informational and does not offer a paid service, subscription, or public account registration.</p>

      <h2>1. Personal research</h2>
      <p>Consensus Lens organizes analyst-rating notifications and historical market information for its owner’s private research. The public website describes the project; it does not provide access to the owner’s Gmail account or research archive.</p>

      <h2>2. No investment advice or execution</h2>
      <p>The app is not a broker, investment adviser, financial planner, or trade-execution service. Its charts, comparisons, and calculations are historical research aids, not recommendations to buy, sell, or hold any asset. Analyst opinions and past returns do not predict future results.</p>

      <h2>3. Data and calculation limits</h2>
      <p>Source notifications may contain errors, arrive late, omit events, or change format. Prices may be delayed, incomplete, adjusted, or unavailable. Comparisons depend on dates, market calendars, price conventions, coverage, and other assumptions. Verify important observations against the original sources rather than treating the app as a complete or real-time record.</p>

      <h2>4. Access and third-party services</h2>
      <p>The optional Gmail importer requires the owner’s separate authorization with Google. This website itself does not authorize access. Google, market-data providers, and any separately selected hosting service operate under their own terms. The app is independent of, and is not endorsed by, Google, Interactive Brokers, or Reuters.</p>

      <h2>5. Data rights</h2>
      <p>Emails, analyst research, and market data may be subject to third-party rights and restrictions. Possession of an export, private repository, or dashboard does not establish a right to redistribute its contents. The public informational pages do not grant access to, or a license for, the private research dataset.</p>

      <h2>6. Project status</h2>
      <p>This is an evolving personal tool, not a commercial service with a service-level agreement. Features, source availability, and compatibility can change. There is no public support plan or payment commitment on this website.</p>

      <h2>7. Questions</h2>
      <p>Contact <a href="mailto:jiangyan@howtobuild.app">jiangyan@howtobuild.app</a> for questions about the project. Data handling is explained in the linked Privacy Policy.</p>
    </article>
  );
}
