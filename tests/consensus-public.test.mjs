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

test("privacy describes actual scope and storage, not unsupported encryption", async () => {
  const policy = await readFile("app/consensus-lens/policy/page.tsx", "utf8");
  for (const text of ["gmail.readonly", "mailbox-wide read access", "not encrypted by the app", "Google API Services User Data Policy", "Limited Use", "revok", "Vercel"]) {
    assert.ok(policy.toLowerCase().includes(text.toLowerCase()), text);
  }
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
