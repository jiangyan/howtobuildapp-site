import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daisy — Support",
  description: "Getting started with Daisy, answers to common questions, and how to reach us.",
};

export default function DaisySupport() {
  return (
    <article>
      <p className="eyebrow">DAISY</p>
      <h1>Support</h1>
      <p className="doc-lead">
        Daisy connects your iPhone or iPad to a Hysteria 2 or VLESS server that
        you run or have permission to use. It provides no servers of its own.
      </p>

      <h2>Getting started</h2>
      <ol>
        <li>Open the Servers tab, tap +, and paste your server&rsquo;s share link, starting with hysteria2:// or vless://.</li>
        <li>On Home, turn the switch on and allow the VPN configuration when iOS asks.</li>
        <li>Choose Global to send everything through your server, or Whitelist to send destinations on the built-in direct list straight out.</li>
      </ol>

      <h2>Common questions</h2>
      <h3>Home says &ldquo;Not responding&rdquo;</h3>
      <p>The tunnel is up but the server stopped answering. Check the server, or switch to another one.</p>
      <h3>The connection comes back after I turn it off in iOS Settings</h3>
      <p>
        Connect On Demand keeps a connection you turned on. Disconnect inside
        Daisy to stay disconnected, or turn Connect On Demand off in Settings,
        VPN.
      </p>
      <h3>A rule source will not refresh</h3>
      <p>Rule sources are fetched through the tunnel, so connect first, then tap Refresh on the Rules tab.</p>

      <h2>Contact</h2>
      <p>
        Use the{" "}
        <a href="https://letsbuild.fun/en/contact">contact form</a> or email{" "}
        <a href="mailto:privacy@letsbuild.fun">privacy@letsbuild.fun</a>.
        Include your iOS version and, if you can, the log from Settings,
        Diagnostics.
      </p>
    </article>
  );
}
