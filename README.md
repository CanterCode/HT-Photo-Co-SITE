# Hannah Thompson Photo Co.

Website for Hannah Thompson Photo Co., built by Canterbury Web. This is currently a **structure-only scaffold** — routing, navigation, and the brand design system (colors + fonts) are in place, but real content, copy, and photography are still pending. See [`CLAUDE.md`](CLAUDE.md) for the full brand and build reference.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- JavaScript (no TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for light scroll animations
- [Lucide React](https://lucide.dev) for icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

- `app/` — pages (App Router): `/`, `/about`, `/weddings`, `/packages`, `/gallery`, `/contact`
- `components/` — shared UI components (Navbar, Footer, page building blocks), one component per file
- `lib/` — shared non-visual code (e.g. navigation links)
- `app/globals.css` + `tailwind.config.js` — single source of truth for brand colors and fonts

## Other Scripts

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # lint the project
```
