import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daisy — Privacy Policy",
  description: "Daisy collects no data. This policy explains what stays on your device.",
};

export default function DaisyPrivacy() {
  return (
    <article>
      <p className="eyebrow">DAISY</p>
      <h1>Privacy Policy</h1>
      <p className="doc-meta">Effective 14 September 2026</p>
      <p className="doc-lead">
        Daisy is a network client for Hysteria 2 and VLESS servers that you
        provide, made by Yan Jiang. This policy describes what the app does
        with information.
      </p>

      <h2>What we collect</h2>
      <p>
        Nothing. The developer does not collect, receive, store or share any
        information about you or your use of the app. Daisy contains no
        analytics, advertising or tracking code, and it has no accounts.
      </p>

      <h2>What stays on your device</h2>
      <ul>
        <li>The servers you add, including their addresses and credentials.</li>
        <li>Your routing rules and the addresses of your rule sources.</li>
        <li>Connection statistics shown on the Home screen, kept in memory and cleared when a session ends.</li>
        <li>Diagnostic logs, written to the app&rsquo;s own storage on your device and never uploaded. You can read them in the app.</li>
      </ul>

      <h2>Network traffic</h2>
      <p>
        When you connect, your device&rsquo;s traffic is sent to the server you
        configured, or directly to its destination, according to your rules.
        The developer operates no servers and has no access to this traffic.
        Whoever operates the server you use can see the traffic sent through
        it, and their own privacy terms apply.
      </p>
      <p>
        When you add remote rule sources, Daisy downloads them from the
        addresses you entered. Those sites receive an ordinary download request.
      </p>

      <h2>Crash reports</h2>
      <p>
        If you choose to share analytics with app developers in iOS Settings,
        Apple may provide anonymous crash reports. They contain no traffic,
        servers or rules.
      </p>

      <h2>Children</h2>
      <p>Daisy is not directed at children and collects no information from anyone.</p>

      <h2>Changes</h2>
      <p>A changed policy will be posted at this address with a new effective date.</p>

      <h2>Contact</h2>
      <p>
        Questions: <a href="mailto:jiangyan@howtobuild.app">jiangyan@howtobuild.app</a>
      </p>
    </article>
  );
}
