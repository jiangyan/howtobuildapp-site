# Consensus Lens public pages

These routes are informational only. Never add the private dashboard archive,
Gmail exports, raw emails, OAuth client JSON, refresh tokens, or sync state here.

## Routes

The existing How to Build and Daisy pages are unchanged.

| Host | Homepage | Privacy | Terms |
| --- | --- | --- | --- |
| consensus.lens.howtobuild.app | / | /policy | /terms |
| howtobuild.app / previews | /consensus-lens | /consensus-lens/policy | /consensus-lens/terms |

`next.config.mjs` rewrites only the three named custom-host routes. Navigation
uses the incoming Host header to keep subdirectory previews functional.
Canonical URLs use clean custom-domain URLs on that host and the working
`howtobuild.app/consensus-lens` URLs otherwise.

## Hosting setup

The repository's existing Vercel integration deploys `main`. Add the exact
domain `consensus.lens.howtobuild.app` to that Vercel project's production
domains. Then configure only the DNS record Vercel displays for that domain.
Do not assume a wildcard for `*.howtobuild.app` covers this nested hostname.
Wait for the domain and HTTPS certificate to be valid before using the URLs in
Google OAuth branding. No domain record is created by this code.

## OAuth boundaries

The public website does not perform OAuth. The standalone importer uses a
Google OAuth **Desktop app** client with a local loopback callback. Publishing
these pages does not change it into a Web application client.

For brand verification, use the matching public URLs and register the owned
top private domain `howtobuild.app` as an Authorized Domain. Domain ownership
verification must be performed by an eligible Google project owner/editor.
Brand verification and restricted-scope verification are separate. Google's
personal-use exception may apply when the owner is the only user.

Do not submit verification or claim Google approval just because these pages
exist. Confirm the deployed app, OAuth scope, consent configuration, and public
privacy statements agree.

## Owner-only dashboard

The existing dashboard remains separate and access restricted. A private GitHub
repository alone does not make a deployed web app private. Do not deploy its
static `dist/` archive to an unprotected public host.

Before any future custom-domain dashboard migration, protect the entire
dashboard and every data/asset/API response with server-side authentication and
an allowlist for the owner's verified identity. Keep OAuth tokens and the data
archive out of public static assets, client bundles, logs, and CDN caches.
Authentication and access configuration require separate review.

## Validation

Run `npm run typecheck`, `npm run build`, and
`node --test tests/consensus-public.test.mjs`.

After deployment, verify all three custom-domain URLs are publicly readable
without login, links remain on the intended host, and the existing apex and
Daisy routes still work.
