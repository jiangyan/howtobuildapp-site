import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import config from "../next.config.mjs";

test("custom host rewrites only the three public pages", async () => {
  const rewrites = (await config.rewrites()).beforeFiles;
  assert.deepEqual(rewrites.map(({ source, destination }) => [source, destination]), [
    ["/", "/consensus-lens"],
    ["/policy", "/consensus-lens/policy"],
    ["/terms", "/consensus-lens/terms"],
  ]);
  for (const rule of rewrites) {
    assert.deepEqual(rule.has, [{ type: "host", value: "consensus.lens.howtobuild.app" }]);
  }
});

test("the original www redirect remains unchanged", async () => {
  assert.deepEqual(await config.redirects(), [{
    source: "/:path*",
    has: [{ type: "host", value: "www.howtobuild.app" }],
    destination: "https://howtobuild.app/:path*",
    permanent: true,
  }]);
});

test("privacy distinguishes secure local mode from unencrypted legacy files", async () => {
  const policy = await readFile("app/consensus-lens/policy/page.tsx", "utf8");
  for (const text of [
    "gmail.readonly", "mailbox-wide read access", "AES-256-GCM",
    "Windows Credential Locker", "macOS Keychain", "Linux Secret Service",
    "no plaintext fallback", "decrypts the archive in memory",
    "browser necessarily receives plaintext", "client JSON download remains plaintext",
    "older static archive and its exports remain plaintext",
    "owner-only OpenAI Sites dashboard", "have not yet been validated",
    "not a security guarantee", "does not produce a plaintext archive export",
    "disables CSV downloads", "Google API Services User Data Policy",
    "Limited Use", "revok", "Vercel",
  ]) {
    assert.ok(policy.toLowerCase().includes(text.toLowerCase()), text);
  }
  assert.ok(!policy.includes("Private JSON files use owner-only file permissions"));
  assert.ok(!policy.includes("They are not encrypted by the app"));
});

test("public files have no private archive or OAuth token payload", async () => {
  const inspect = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const filename = path.join(dir, entry.name);
      if (entry.isDirectory()) await inspect(filename);
      else {
        assert.ok(!/archive\.json|gmail-state|token\.json|credentials.*\.json/i.test(entry.name), filename);
        const text = await readFile(filename, "utf8");
        assert.ok(!/["']refresh_token["']\s*:|["']access_token["']\s*:|["']client_secret["']\s*:/.test(text), filename);
        assert.ok(!/["']sourceMessages["']\s*:|["']events["']\s*:\s*\[/.test(text), filename);
      }
    }
  };
  await inspect("app/consensus-lens");
  await inspect("public");
});
