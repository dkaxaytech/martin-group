# Windfarm

Premium corporate website for Windfarm — multi-brand sample covering Windfarm and Windfarm Spinning Mills.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Router 7
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/group` | Group Companies |
| `/wind-energy` | Windfarm |
| `/brands/spinning-mills` | Windfarm Spinning Mills |
| `/services` | Services |
| `/projects` | Projects |
| `/sustainability` | Sustainability |
| `/gallery` | Gallery |
| `/careers` | Careers |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |

## Notes

- Contact form uses an **EmailJS placeholder** — wire `emailjs.sendForm` when credentials are ready.
- Images are served from `/public/images` with Vite `base` for GitHub Pages.
- See `PROJECT_OVERVIEW.md` for a full inventory of what was built.
