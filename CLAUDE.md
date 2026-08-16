# derojasai-homepage - the derojas.ai marketing homepage

Public homepage for **derojas.ai**, Joaquin's startup (the entity that owns SightFlow).
Small Next.js marketing site: a landing page, a video modal, and a privacy page.

Repo: `https://github.com/wak1616/derojasai-homepage`

## Read this first

You are rooted at this repo, so this file is the whole context you get. Company strategy,
customers, and product roadmaps live in `~/macagent/` and are deliberately NOT loaded
here. If a question is about the business rather than the code, say so instead of
inferring it from marketing copy.

## Stack

- **Next.js (App Router)** + React 19, TypeScript, ESLint flat config.
- Everything lives under `src/app/`:
  - `page.tsx` - the landing page (the product cards live here)
  - `layout.tsx` - root layout
  - `video-modal.tsx` - the demo video modal
  - `privacy/` - the privacy policy route
  - `globals.css`, plus `icon.png` / `apple-icon.png` / `favicon.ico`
- No `vercel.json`; deployment uses Vercel's Next.js defaults.
- Branch: `main`.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Content is real, public, and outward-facing

This is the site a prospective customer, partner, or investor lands on. Two consequences:

- **Copy changes are Joaquin's call, not an agent's.** Do not rewrite headlines, product
  descriptions, or claims as a side effect of a code change. Flag and ask.
- **Outbound links point at real properties** and are load-bearing. The Visari card links
  to `visari.ai` (commit c189400). Do not "fix" a link to a different domain.

Recent history is mostly content and asset work (logo reverts, an illustration joke that
was reverted), which is a good indication that visual changes here get reviewed by eye.
Screenshot before and after when you change layout.

## Working rules

- **Check the branch before you touch anything** (`git status -sb`). This checkout is
  shared machine state across several agent lanes plus Joaquin's own sessions. Dirty or
  off-`main` means someone has work in flight: leave it and use a worktree.
- **Do not push to `main` without Joaquin saying so.** Vercel deploys `main` to the live
  public site; a push is a publish.
- Keep durable engineering knowledge in THIS file, not in the macagent ops folders.
