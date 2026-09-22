# CB Engineering — landing page

The homepage of **CB Engineering BV** (Antwerp), the company of Bruno Coussement.
A typography-led one-pager positioning Bruno as an AI and data architect: services,
experience (EDF Luminus, Brussels Airlines, SNCB/NMBS, KBC, via Dataminded), certifications, other projects
(Expedait, Naby, Stadim, EUMETSAT), and a way to get in touch.

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

Services, experience, project data, and the technology icon map live in
[`lib/site.ts`](./lib/site.ts). Add or edit an entry there and it renders automatically.
Logos live in `public/logos/` as single-colour SVGs (ink `#15161a`). Hero, about, and contact copy live in
[`app/page.tsx`](./app/page.tsx).
