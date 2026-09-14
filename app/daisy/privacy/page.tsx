import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daisy — Privacy Policy",
  description:
    "Daisy collects no data and never sells, uses or discloses any data. This policy explains what stays on your device and who else takes part in a connection.",
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
        with information, on your device and on the network.
      </p>

      <h2>What we collect</h2>
      <p>
        Nothing. The developer does not collect, receive or store any
        information about you or your use of the app. Daisy contains no
        analytics, advertising or tracking code, uses no third-party SDKs, and
        has no accounts.
      </p>

      <h2>Our commitment</h2>
      <p>
        We do not sell, use or disclose to third parties any data, for any
        purpose. There is no data on our side to sell or share, and the app is
        built so that none reaches us.
      </p>

      <h2>What stays on your device</h2>
      <p>Daisy keeps these in its own storage on your device:</p>
      <ul>
        <li>The servers you add, including their addresses and credentials.</li>
        <li>Your routing rules, the addresses of your rule sources, and the rule lists downloaded from them.</li>
        <li>A table of domain names looked up while connected, kept between sessions so connections survive a reconnect.</li>
        <li>Connection statistics for the Home screen, kept in memory and cleared when a session ends.</li>
        <li>Diagnostic logs, which include hostnames and server names but not passwords.</li>
      </ul>
      <p>
        None of this leaves your device on its own. Logs leave it only if you
        choose Share log in Settings, and then only to the place you pick.
      </p>

      <h2>Who else takes part in a connection</h2>
      <ul>
        <li>
          <strong>Your server.</strong> Traffic sent through the tunnel goes to
          the server you configured. Whoever operates that server can see it,
          and their own privacy terms apply. The developer operates no servers
          and cannot see your traffic.
        </li>
        <li>
          <strong>DNS resolvers.</strong> Names of destinations that go direct
          are resolved by the DNS server set in Settings, 223.5.5.5 unless you
          change it. Names of destinations sent through your server are
          resolved by your server, using the public resolvers 1.1.1.1 and
          8.8.8.8. Those resolvers receive the names being looked up.
        </li>
        <li>
          <strong>Rule sources.</strong> When you add remote rule lists, Daisy
          downloads them from the addresses you entered. Those sites receive
          an ordinary download request.
        </li>
        <li>
          <strong>Your own servers, when you test them.</strong> Test All
          contacts each server you added to measure its latency.
        </li>
      </ul>

      <h2>Retention and deletion</h2>
      <p>
        The developer holds no data about you, so there is nothing to request,
        export or delete on our side. On your device, you can remove servers
        and rules in the app at any time. Deleting Daisy removes everything it
        stored, and removing its VPN configuration in iOS Settings, General,
        VPN and Device Management removes the connection profile.
      </p>

      <h2>Crash reports</h2>
      <p>
        If you choose to share analytics with app developers in iOS Settings,
        Apple may provide anonymous crash reports. They describe the crash,
        not your traffic, servers or rules. You can turn this off in iOS
        Settings at any time.
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
