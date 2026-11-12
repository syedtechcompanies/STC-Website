# STC Website (Syed Tech Company)

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Firebase (Firestore).

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your Firebase keys
npm run dev
```

Open http://localhost:3000

## Firebase setup

1. Firebase Console > create a project > add a **Web app** and copy the config into `.env.local`.
2. Build > **Firestore Database** > create database.
3. Paste `firestore.rules` into Firestore > Rules and publish.
4. Contact form submissions are saved in the `inquiries` collection.

## Project structure

```
src/
  app/                 pages (home, about, services, portfolio, blog, contact)
  components/
    layout/            Navbar, Footer
    home/              Hero, Services, AboutPreview, Stats, CTA
    contact/           ContactForm (writes to Firestore)
    ui/                Logo, SectionHeading, PageHeader
  data/site.ts         site copy, services, project ideas and official resources
  lib/                 firebase.ts, inquiries.ts
```

## Customising

- Company text, services, project ideas and resource links: edit `src/data/site.ts`.
- Brand colours: `tailwind.config.ts` (`brand` palette).
- Add only verified company contact details and social profile links before publishing them.
- Real photos: replace `HeroVisual.tsx` and the building illustration in `AboutPreview.tsx`
  with `next/image` and files from `public/images/`.
- Promo video: set `NEXT_PUBLIC_PROMO_VIDEO_URL` to a YouTube embed URL.

## Deploy

Push to GitHub and import into Vercel (add the same env variables), or use Firebase Hosting.
