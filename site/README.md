# Sleep Well — 멜라토닌 브랜드 랜딩 페이지

Implementation of the Claude Design handoff in `../project/Sleep Well.dc.html` (Vite + React + TypeScript).

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build → dist/
npm run preview   # serve the build
```

## Structure

- `src/styles/tokens.css` — Sleep Well design-system tokens (colors, type, spacing, motion, NM font faces)
- `src/components/ds/` — design-system primitives ported from `_ds_bundle.js`: Button, Eyebrow, SectionHeader, Tag, ProductCard, Card
- `src/components/sections/` — page sections: Header, Hero, 01 Melatonin, 02 Products, 03 Ritual, Quote, Footer, Toast
- `src/data/products.ts` — product catalogue

**02 Products** is a sticky, scroll-driven horizontal carousel. The section is made as tall as the panel plus the track's overflow, and vertical scroll progress drives the track's `translateX`. If the panel is taller than the viewport, it sticks with a negative `top` so its bottom (the cards and notice) stays in view. When keyboard focus moves to a card that is off-screen, the page scrolls to bring it into view.

## Placeholders to replace

- Product names, copy, prices and images (images are design-system textures)
- The regulatory notice under the products (it currently says the product is a general food, not a registered health supplement)
- Ritual illustrations in `src/assets/illustrations/` (simple SVG stand-ins)
- The Instagram link in the footer (`href="#"`)
- 담기 (add to cart) shows a toast only; no cart is wired up yet
- "Editorial" display font is substituted with Cormorant Garamond
