# CB Engineering — landing page

The homepage of **CB Engineering BV** (Brussels), the company of Bruno Coussement.
A typography-led one-pager showcasing the projects: [Expedait](https://expedait.org)
and [Babyfoon](https://babyfoon.dev), plus a way to get in touch.

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Fonts: Plus Jakarta Sans + Fraunces (via `next/font`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
Vercel auto-detects Next.js — no configuration needed. Point the
`cbengineering.be` domain at the project in the Vercel dashboard.

## Editing content

All copy and project data live in [`lib/site.ts`](./lib/site.ts). Add or edit a
project there and it renders automatically.
