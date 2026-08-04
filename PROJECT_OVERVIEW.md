# Windfarm — Project Overview

**Last updated:** August 4, 2026  
**Location:** `Mine/sample1`  
**Type:** Static premium corporate website (Windfarm — multi-brand)  
**GitHub:** https://github.com/dkaxaytech/windfarm  
**Live site:** https://dkaxaytech.github.io/windfarm/

---

## 1. Project Summary

Windfarm is a production-ready React corporate website representing the **entire Windfarm**. Windfarm is one group business; Windfarm Spinning Mills is another. The design language targets Fortune 500 corporate peers — generous whitespace, large imagery, soft shadows, glass morphism, rounded cards, and green / white / navy / gray branding.

---

## 2. Tech Stack

| Technology | Version / Role |
|---|---|
| React | 19 — UI |
| TypeScript | Strict typing |
| Vite | 7 — bundler / dev server |
| Tailwind CSS | 4 (`@tailwindcss/vite`) |
| Framer Motion | Page transitions, fades, slides, counters |
| React Router | Client-side routing + code-split pages |
| Lucide React | Icon system |

---

## 3. Brand URL Config (Easy Domain Switch)

`src/config/brands.ts`:

```ts
export const BRAND_LINKS = {
  windEnergy: '/wind-energy',
  spinning: '/brands/spinning-mills',
}
```

To point Spinning Mills at another domain later, change only:

```ts
spinning: 'https://spinning.windfarm.com'
```

Brand cards and routes read from this constant (BrandCard supports external `http/https` links).

---

## 4. Our Brands Data

`src/data/brands.ts` drives the Home **Our Brands** section.

Each brand object:

- `id`
- `name`
- `description`
- `image`
- `buttonText`
- `link` (from `BRAND_LINKS`)

Current brands:

1. **Windfarm** → `/wind-energy`
2. **Windfarm Spinning Mills** → `BRAND_LINKS.spinning`

Add future companies by appending objects to this array.

---

## 5. Pages

| Route | Page |
|---|---|
| `/` | Home (includes Our Brands below About) |
| `/about` | About Windfarm |
| `/group` | Group Companies |
| `/wind-energy` | Windfarm |
| `/brands/spinning-mills` | Windfarm Spinning Mills (full brand site) |
| `/services` | Services |
| `/projects` | Projects |
| `/sustainability` | Sustainability |
| `/gallery` | Gallery |
| `/careers` | Careers |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |

---

## 6. Windfarm Spinning Mills Page Sections

Route: `/brands/spinning-mills`  
Data: `src/data/spinningMills.ts`  
Page: `src/pages/SpinningMillsPage.tsx`

Implemented sections:

1. Hero Banner (client banner image + HTML overlay)
2. About Company (rewritten professional SEO copy)
3. Manufacturing Statistics (80,000+ / 1000+ / 2009 / India)
4. Our Journey (timeline)
5. Manufacturing Capacity
6. Products (6 cards with icon + image + description)
7. Technology
8. Quality Standards
9. Infrastructure
10. Why Choose Us
11. Achievements
12. Gallery (lightbox)
13. CTA — Ready to Partner With Windfarm Spinning Mills?
14. Contact details

---

## 7. Home — Our Brands Section

- Appears **below About**
- Premium navy section, glass cards, hover zoom, Framer Motion
- Component: `src/components/sections/OurBrandsSection.tsx`
- Card: `src/components/ui/BrandCard.tsx`
- Anchor: `#our-brands`

---

## 8. Folder Highlights

```
src/
├── config/
│   └── brands.ts              # BRAND_LINKS switchable URLs
├── data/
│   ├── brands.ts              # Our Brands cards data
│   ├── spinningMills.ts       # Spinning Mills page content
│   ├── content.ts             # Group / wind content
│   └── images.ts              # Local image paths
├── components/
│   ├── sections/
│   │   └── OurBrandsSection.tsx
│   └── ui/
│       └── BrandCard.tsx
└── pages/
    └── SpinningMillsPage.tsx
```

Public assets include textile manufacturing photos in `public/images/` (yarn, mill, factory). The client reference banner was used for copy/layout inspiration only — it is not used as a site image.

---

## 9. How to Run

```bash
cd "Mine/sample1"
npm install
npm run dev
```

Spinning Mills: [http://localhost:5173/brands/spinning-mills](http://localhost:5173/brands/spinning-mills)

---

## 10. Hosting

- Hosted on **GitHub Pages** via Actions (`.github/workflows/deploy.yml`)
- Vite `base` is `/windfarm/` for project-site paths
- React Router uses `basename` from `import.meta.env.BASE_URL`
- SPA fallback: workflow copies `index.html` → `404.html`

---

## 11. Build Log (Latest)

1. Rebranded site identity to **Windfarm**
2. Added `BRAND_LINKS` config for easy URL switching
3. Added `brands.ts` data-driven Our Brands cards
4. Inserted Our Brands section on Home below About
5. Built full Windfarm Spinning Mills brand page
6. Wired route from `BRAND_LINKS.spinning`
7. Added Spinning Mills to navbar
8. Updated SEO, sitemap, robots, overview
9. Published to GitHub Pages (`dkaxaytech/windfarm`)

---

## 12. Known Placeholders

- Google Map iframe on Contact
- EmailJS not live-connected
- Social links still `#`
- Spinning Mills phone is a placeholder format (`+91 422 000 0000`) — replace with real number
