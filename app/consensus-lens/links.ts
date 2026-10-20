import { headers } from "next/headers";

export const CONSENSUS_ORIGIN = "https://consensus.lens.howtobuild.app";

// The custom domain uses clean URLs. The original site's subdirectory remains
// a working preview without changing howtobuild.app's existing routes.
export async function consensusBasePath() {
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase();
  return host === "consensus.lens.howtobuild.app" ? "" : "/consensus-lens";
}
