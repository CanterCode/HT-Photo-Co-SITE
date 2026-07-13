# Hannah Thompson Photo Co. — Brand & Build Reference

This document is the reference future Claude Code sessions should read before making any changes to this project. It assumes no other context — everything you need to understand the brand, the design system, and the build conventions is here.

## 1. Project Summary

This is the website for **Hannah Thompson Photo Co.**, a photography business, built by **Canterbury Web**. The current state of the project is a **structure-first build**: the routing, layout, navigation, and design system (colors + fonts) are in place, but real content, copy, and photography have not been added yet. That comes in a later pass. Do not mistake placeholder content for final content — see the Status Note at the bottom of this file before assuming anything is "done."

## 2. Brand Personality

Hannah's brand sits at the intersection of a few qualities that all need to be true at once — leaning too hard into any one of them at the expense of the others would be off-brand.

**Country but elegant.** The brand is warm, unpretentious, and rooted — it should never feel stiff, corporate, or overly formal. At the same time, it's polished and intentional, not rustic-for-the-sake-of-rustic. Think a beautifully set table in a farmhouse, not a barn.

**Modern but colorful.** The layout and typography should feel clean and contemporary — good whitespace, confident type, nothing cluttered. But the site should not default to the safe black/white/gray palette so much of the industry uses. Warm color (moss, coral, blush, cream) is a deliberate point of difference and should be used with confidence, not treated as decoration.

**A touch of cursive/fancy.** The script typeface (Beau Rivage) gives the brand a hand-lettered, personal feeling — but only in small doses. It shows up in the logo, taglines, and small section labels. It should never be overused to the point where the site starts to look like a wedding invitation template. If in doubt, use less script, not more.

**Approachable and professional.** Hannah should come across as someone easy to talk to and trust — not an intimidating "fine art photographer" persona that makes clients feel like they need to perform for the camera. Professionalism here means competence and reliability, not formality or distance.

**Young but experienced.** Hannah is confident in her skill and process without needing to prove it with jargon, credentials-dropping, or overly formal language. The voice should sound like someone who knows exactly what she's doing and is genuinely excited to do it — not someone trying to convince you she's qualified.

**Sells an experience, not just photos.** This is one of the most important distinctions for future copy and layout decisions: Hannah isn't just delivering final images, she's guiding people through a process — planning, feeling comfortable in front of the camera, being taken care of on the day. Copy and layout should give equal weight to *what it's like to work with her* alongside the final photos themselves.

## 3. Design System Reference

**The single source of truth for colors and fonts is [`app/globals.css`](app/globals.css) and [`tailwind.config.js`](tailwind.config.js). Never hardcode raw hex codes or font-family strings in a component — always use the Tailwind utility classes described below.**

### Color Palette

Locked 2026-07-13. Five colors.

| Variable | Hex | Tailwind class | Role |
|---|---|---|---|
| `--color-moss` | `#545427` | `moss` (e.g. `bg-moss`, `text-moss`) | Primary brand color — logo ink on light backgrounds, headings, body text, buttons, links |
| `--color-forest` | `#3B3B1B` | `forest` | Secondary to Moss — dark section backgrounds (nav, footer, hero overlays), button hover/pressed states |
| `--color-coral` | `#FFBBBA` | `coral` | Warm accent — section backgrounds, tags, dividers, photo overlays |
| `--color-blush` | `#FFE2DE` | `blush` | Warm accent — section backgrounds, tags, dividers, photo overlays |
| `--color-cream` | `#F4F1EA` | `cream` | Site background color throughout — warm off-white |

Usage rules:

- **Moss is the primary color.** Logo ink on light/cream backgrounds, headings, body copy, buttons, and links on light backgrounds. Accessible (WCAG AA) on cream, white, blush, and coral.
- **Forest is secondary to Moss, not a replacement.** Reserved for dark section backgrounds — nav bar, footer, hero photo overlays/scrims. Pair Forest backgrounds with **Cream or Blush text**, never Moss text — the two greens are too close in value to read clearly together.
- **Coral and Blush are warm accent tones** for section backgrounds, tags, dividers, and photo overlays. Pair with **Moss text** on top, not white.
- **Cream is the site's base background color everywhere.** Avoid pure white (`#FFFFFF`) as a background. Reserve white for rare high-contrast moments only (e.g. a button sitting on a dark photo overlay).

### Typography

Three live fonts, each with a distinct job, plus one logo-only font that is never loaded as a web font. All three live fonts are loaded via `next/font/google` in [`app/layout.js`](app/layout.js), exposed as CSS variables (`--font-script`, `--font-display`, `--font-body`), and wired into Tailwind as `font-script`, `font-display`, and `font-body` utilities.

- **Display / headings — `Playfair Display`** (`font-display`). Used bold for all page headings (`h1`, `h2`).
- **Body / UI — `Cormorant Garamond`** (`font-body`). Body copy, nav links, buttons, form labels — everything that needs to read cleanly, including at small mobile sizes. Regular weight for paragraphs, italic for emphasis/pull-quotes.
- **Cursive / accent — `Allura`** (`font-script`). Used *sparingly* — small eyebrow labels above section headings, a signature-style flourish word here or there. Never body copy, never nav links, never anything that needs to be quickly scannable.
- **Symphony — logo-only, not a live web font.** It's a paid script baked directly into the logo SVGs' vector paths during export from Canva. Do not attempt to load it, reference it in Tailwind, or use it as running text anywhere — the logo files already contain it as outlines.

### Logo Components

Logo SVGs live as inlined React components in [`components/logos/`](components/logos/) (`LogoFull`, `LogoWordmark`, `LogoMark`, `LogoBadge`) — never `<img src="...">`, since the fill colors are driven by CSS custom properties baked into the SVG source (`fill="var(--logo-ink, #3B3B1B)"` and `fill="var(--logo-bg, #F4F1EA)"`) that an `<img>` cannot override.

- `--logo-ink` is the main ink color — set it to Moss (`#545427`) on light/cream backgrounds, Cream (`#F4F1EA`) on dark/Forest backgrounds or photo scrims.
- `--logo-bg` is the crossing-stroke cutout and **must exactly match whatever background the logo sits on** (e.g. `#F4F1EA` on a Cream section, `#3B3B1B` on a Forest nav/footer). Getting this wrong leaves a visible seam around the crossing script strokes.
- `LogoBadge` is a special case: its cutout is permanently fixed to `#FFFFFF` in the source SVG (matching its white oval badge), so only `--logo-ink` is variable on that one.
- Pass `style={{ "--logo-ink": "...", "--logo-bg": "..." }}` and `className` for sizing when using any logo component.

## 4. Site Structure

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | First impression — hero, a taste of featured work, a brief intro to Hannah, and a CTA into Contact. |
| `/about` | About Hannah | Who Hannah is, her bio, and how she works with clients. |
| `/weddings` | Weddings | What a wedding booking includes and a showcase of featured weddings. |
| `/packages` | Packages | Pricing/package tiers for prospective clients to compare. |
| `/gallery` | Gallery | A broader visual showcase of Hannah's work beyond weddings. |
| `/contact` | Contact | How to get in touch — inquiry form and contact details. |

Global elements: a fixed `Navbar` (3 links left, full logo centered, 3 links right, mobile hamburger below `md:`) and a `Footer` (logo, repeated nav links, contact placeholders, copyright) appear on every page via [`app/layout.js`](app/layout.js). The Navbar is transparent over the Home hero and transitions to a solid Cream background on scroll or on any page without a hero photo — see [`components/Navbar.jsx`](components/Navbar.jsx). Because the Navbar is `fixed`, [`components/PageHero.jsx`](components/PageHero.jsx) carries extra top padding to clear it; keep that in mind if the Navbar's height changes.

## 5. Copy Voice Guidelines

When real copy is written in a future pass, it should follow these rules:

- Write in **first person from Hannah's POV** where relevant ("I love...", "I'll guide you through...") rather than a distant third-person business voice.
- Use **plain language over photography jargon** — clients don't need to know what "golden hour" or "negative space" means to understand why it matters to their photos.
- **Short sentences.** This is a warm, conversational brand, not a literary one.
- **Avoid generic stock phrases** photography sites overuse — things like "capturing life's precious moments." If a sentence could appear on any photographer's site, rewrite it to say something specific to Hannah.

## 6. Build Conventions

- **Framework:** Next.js 15, App Router (`app/` directory).
- **Language:** JavaScript, not TypeScript — `.js` / `.jsx` files only.
- **Styling:** Tailwind CSS utility classes only. No raw hex codes in components — always go through the `moss` / `forest` / `coral` / `blush` / `cream` and `font-script` / `font-display` / `font-body` utilities defined in `tailwind.config.js`. The one sanctioned exception is the logo components in `components/logos/`, which take a `style` prop to set the `--logo-ink` / `--logo-bg` CSS variables per usage (see Logo Components above) — that inline style is structural, not a styling shortcut, so don't extend the exception elsewhere.
- **Components:** Live in `/components`, one component per file. Home-page-only section components live in `components/home/`.
- **Animation:** Framer Motion is installed for light fade/slide-in-on-scroll effects (see [`components/FadeIn.jsx`](components/FadeIn.jsx)) and the Hero's image crossfade (see [`components/Hero.jsx`](components/Hero.jsx)) — nothing elaborate.
- **Icons:** Lucide React.
- **Images:** `next/image` is used throughout. Remote Unsplash placeholders require `images.remotePatterns` in `next.config.mjs` (already configured for `images.unsplash.com`).
- No CMS, no database, no form backend at this stage.

## 7. Status Note — Read Before Assuming Anything Is Final

**Home (`/`) is a visual/structural mockup pass; the other five routes are still a bare scaffold.** Specifically:

- **Home page (`/`):** Built out in close visual imitation of a reference photography site — full-viewport rotating hero, alternating full-viewport sections below it. All copy on Home is placeholder text in Hannah's-voice tone (not bracketed stubs, but not approved content either — see Copy Voice Guidelines). All photography on Home is **temporary, confirmed-license Unsplash placeholder imagery** (see [`lib/heroImages.js`](lib/heroImages.js) and [`lib/homeImages.js`](lib/homeImages.js)) standing in for Hannah's real work — swap the `src` values in those two files when real photos arrive; no other code changes needed. Do not mistake this placeholder photography for Hannah's actual portfolio.
- **About / Weddings / Packages / Gallery / Contact:** Still the original structure-first scaffold — colored boxes (`bg-coral` / `bg-blush` / `bg-cream`) stand in for real photos, and copy is marked with bracketed notes like "[Placeholder supporting line]." These five pages were intentionally left untouched in the design-system-update + Home-build pass (2026-07-13) and are open work for a future session.
- All business details — address, phone number, email, pricing, package details, bio content, and testimonials — are marked `[TBD]` because Hannah's actual business information hasn't been collected yet. Do not invent or guess these details.
- Section stubs on the five untouched pages (e.g. "Featured Weddings grid goes here") mark where real layouts and content will go in a future content/design pass.

Future sessions should treat any of the above as open work, not settled decisions, unless the user says otherwise.
