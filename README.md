# Keyboard docs

The documentation site for [Keyboard](https://keyboard.dev) — an open source
MCP server that connects AI clients like Claude to your apps and runs every
task as approved, sandboxed code.

Live at [docs.keyboard.dev](https://docs.keyboard.dev).

This site runs on the [docs.dev](https://github.com/keyboard-dev/docs.dev)
template: Fumadocs (Next.js + MDX) with the pretext reading experience, the
in-site `/admin` editor with review-before-publish drafts, Ask AI, `.md`
routes for agents, and push-to-deploy on Cloudflare Workers. See that repo's
README for everything the template can do.

## Editing the docs

Every page is an `.mdx` file under `content/docs/` — the URL is the file
path (`content/docs/getting-started/quickstart.mdx` →
`/docs/getting-started/quickstart`). Sidebar order lives in the `meta.json`
next to the pages. `CLAUDE.md` has the full editing conventions, so pointing
a coding agent at this repo also works out of the box.

Prefer a UI? Open `/admin` on the deployed site to edit pages in place,
save shared drafts for review, and publish — publishing is a commit to this
repo.

## Development

```bash
pnpm install
pnpm dev              # http://localhost:3000/docs
pnpm types:check      # validates MDX frontmatter + types — run before pushing
pnpm lint
```

## Deployment

Push-to-deploy: commits to the default branch are rebuilt and redeployed by
Cloudflare Workers Builds (config in `wrangler.jsonc`). `/` redirects to
`/docs` (`HOME_REDIRECT_TO_DOCS`), since [keyboard.dev](https://keyboard.dev)
is the marketing site. Old Mintlify-era URLs (`/getting-started/…`,
`/guides/…`, `/how-it-works/…`) are permanently redirected to their `/docs/…`
equivalents by `worker.js`.
