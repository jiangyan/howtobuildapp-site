import type { Metadata } from "next";
import Link from "next/link";
import { consensusBasePath, consensusPageUrl } from "./links";
import styles from "./site.module.css";
import Arrow from "./arrow";

export async function generateMetadata(): Promise<Metadata> {
  const url = await consensusPageUrl();
  return {
  metadataBase: new URL(url),
  title: { default: "Consensus Lens", template: "%s | Consensus Lens" },
  description: "A personal research tool for understanding analyst-consensus changes alongside historical stock prices.",
  icons: { icon: "/consensus-lens-mark.svg" },
  openGraph: {
    title: "Consensus Lens",
    description: "Analyst sentiment, in context. A personal, read-only research tool.",
    siteName: "Consensus Lens",
    type: "website",
    url,
  },
  };
}

export default async function ConsensusLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const base = await consensusBasePath();
  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#consensus-content">Skip to content</a>
      <header className={styles.header}>
        <Link className={styles.brand} href={base || "/"} aria-label="Consensus Lens home">
          <img className={styles.mark} src="/consensus-lens-mark.svg" width="38" height="38" alt="" />
          Consensus Lens
        </Link>
        <nav className={styles.nav} aria-label="Consensus Lens navigation">
          <Link href={`${base}/policy`}>Privacy</Link>
          <Link href={`${base}/terms`}>Terms</Link>
          <a className={styles.contact} href="mailto:jiangyan@howtobuild.app">Contact <span><Arrow /></span></a>
        </nav>
      </header>
      <main id="consensus-content" className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div><strong>Consensus Lens</strong><span>A personal project by Yan Jiang.</span></div>
        <nav aria-label="Footer navigation">
          <Link href={base || "/"}>Home</Link>
          <Link href={`${base}/policy`}>Privacy policy</Link>
          <Link href={`${base}/terms`}>Terms of use</Link>
        </nav>
        <p>Independent research software. Not affiliated with Google, Interactive Brokers, or Reuters.</p>
      </footer>
    </div>
  );
}
