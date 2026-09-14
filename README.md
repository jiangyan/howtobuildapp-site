# How to Build · The Idea Lab

An interactive showcase of building with AI. Three working browser demos — a habit tracker, focus timer, and color palette generator — with reusable prompts and a practical build process.

The workbench runs curated examples locally. It does not call an AI service or claim to generate arbitrary apps. Demo state lasts for the page session; nothing is sent to a server.

## Development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run typecheck
npm run build
```

## Deployment

Push to `main` to trigger the existing Vercel integration. Use the Next.js framework preset, `npm ci` for installation, and `npm run build` for the build. No environment variables or API keys are required.

Built with Next.js, React, TypeScript, and plain CSS. The previous site has been completely replaced.
