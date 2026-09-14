import Link from "next/link";

export default function DaisyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label="How to Build home">
          <span className="brand-mark" aria-hidden="true">
            h<span>↗</span>
          </span>
          howtobuild<span className="brand-dot">.app</span>
        </Link>
        <nav aria-label="Daisy navigation">
          <Link href="/daisy">Daisy</Link>
          <Link href="/daisy/support">Support</Link>
          <Link href="/daisy/privacy">Privacy</Link>
        </nav>
      </header>
      <main className="doc wrap">{children}</main>
      <footer className="site-footer wrap">
        <Link className="wordmark" href="/">
          howtobuild<span className="brand-dot">.app</span>
        </Link>
        <p>Daisy is an independent app by Yan Jiang.</p>
        <Link href="/daisy/privacy">Privacy policy</Link>
      </footer>
    </>
  );
}
