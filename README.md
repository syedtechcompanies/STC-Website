# STC Website

A responsive Syed Tech Company website built with Next.js 15 App Router, React, TypeScript and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the website.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run the Next.js ESLint checks

## Contact form

The contact form is currently a frontend-only interface. It validates the visible fields in the browser and displays a notice explaining that online message delivery will be connected later. It does not send, store or transmit form data.

## Optional video

To use the Watch Video control, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_PROMO_VIDEO_URL` to a valid YouTube embed URL. The rest of the website works without environment variables.

## Project structure

```text
src/
  app/                 App Router pages and global styles
  components/          Shared layout, page and UI components
  data/                Website content and local image assets
```

## Production build

Run `npm run build` before deploying. The project can be deployed to a standard Node.js host or imported into Vercel.
