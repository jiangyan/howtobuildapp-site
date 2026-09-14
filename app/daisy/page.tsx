import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daisy — a client for your own Hysteria 2 and VLESS servers",
  description:
    "Daisy connects your iPhone or iPad to your own Hysteria 2 or VLESS server and routes every app by your rules. No accounts, no servers, no data collected.",
};

export default function Daisy() {
  return (
    <article>
      <p className="eyebrow">IPHONE · IPAD</p>
      <h1>Daisy</h1>
      <p className="doc-lead">
        A network client for your own Hysteria 2 and VLESS servers. Daisy
        carries your device&rsquo;s traffic to the server you choose and
        decides, per destination, what goes through it, what goes direct and
        what is blocked.
      </p>
      <p>
        Daisy provides no servers and no accounts, and it collects no data. You
        bring a server you run or have permission to use.
      </p>

      <h2>What it does</h2>
      <ul>
        <li>Hysteria 2 over QUIC, with Salamander obfuscation and port hopping.</li>
        <li>VLESS over TCP or WebSocket, with TLS or Reality, and XTLS Vision.</li>
        <li>Rules by domain, domain suffix or IP range, plus remote rule lists you choose.</li>
        <li>A live dashboard: rates, latency, packet loss, active flows and recent activity.</li>
        <li>Stays connected across Wi-Fi and cellular changes, and a Disconnect stays disconnected.</li>
      </ul>

      <div className="doc-links">
        <Link href="/daisy/support">Support</Link>
        <Link href="/daisy/privacy">Privacy policy</Link>
      </div>
    </article>
  );
}
