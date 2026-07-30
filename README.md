# APPNA FINANCE — Next.js (App Router)

Refactor of the single-file React app into a Next.js 14 project with the App Router. Each tab is now a real route, and every UI primitive lives in its own file.

## Structure

```
app/
  layout.js          # <html>, global fonts, TopNav + Footer wrapper
  globals.css        # Tailwind + font-face + keyframes
  page.jsx           # /            Home
  assistant/page.jsx # /assistant   AI chat (client component)
  hub/page.jsx       # /hub         Learning Hub
  about/page.jsx     # /about       About
  profile/page.jsx   # /profile     Profile
components/
  TopNav.jsx         # sticky header + mobile menu (uses usePathname)
  Footer.jsx
  Logo.jsx
  Card.jsx           # hoverable gold-bordered surface (client)
  GoldButton.jsx     # solid / outline (client)
  Pill.jsx
  SectionEyebrow.jsx
  StatTicker.jsx
  LedgerStrip.jsx    # animated bar strip
lib/
  nav.js             # NAV items
```

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes on the port

- The original `App` used `useState('tab')` to switch views. In Next.js each tab is a route, so navigation is `<Link href="...">` and the active state comes from `usePathname()`.
- `Assistant` is marked `"use client"` because it uses `useState`/`useEffect`/`fetch` and calls the live Railway API.
- `Card` and `GoldButton` are also client components (they use `onMouseEnter`/`onClick`).
- All other components render on the server.
- Styles were kept 1:1 with the original brand tokens (Fraunces / Inter / IBM Plex Mono, gold `#D4AF37`/`#F4C430`, bg `#0A0C10`). Font `@import` lives in `globals.css`.
