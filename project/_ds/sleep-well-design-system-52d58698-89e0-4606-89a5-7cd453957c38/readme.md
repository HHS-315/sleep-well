# Sleep Well Design System
Design system for **Sleep Well**, a Korean website selling deep-sleep supplements (깊은 잠을 자는 영양제 웹사이트). Visual language is extracted from the reference site **Sleep Well Creatives** — an interactive, science-based sleep guide by Victor Work (Webflow × Contra challenge).

## Sources
- Reference site: https://sleep-well-creatives.com/ (copy, logo, textures, fonts pulled from its Webflow CDN)
- Brand extraction (dembrandt) pasted by the user: colors, type sizes, spacing, radii, borders, motion.
- No codebase or Figma was provided. The reference has no commerce UI; product/cart screens are extrapolated from its visual vocabulary.

## Products / surfaces
- **Marketing + shop website** (`ui_kits/website/`) — long-scroll storytelling home, product detail, cart.

## CONTENT FUNDAMENTALS
- **Voice:** a peer talking to peers — calm, warm, a little poetic. "We" and "you"; never clinical. Reference: "We build things that live on screens… our creativity doesn’t come from caffeine or chaos. It comes from rest."
- **Metaphor system:** sleep described in software/design terms — reboot, clear cache, bugs, overclock, overheat, "UX for your biology", "Like a minimalist interface."
- **Structure:** numbered chapters (01–07), an uppercase kicker ("SLEEP ISN’T A LUXURY"), then a two-line serif title whose second line is softer/italic ("How to redesign / for a better sleep.").
- **Pull quotes** in curly quotes as punchlines: “Sleep isn’t rest. It’s maintenance.” “You can’t dream in daylight.”
- **Casing:** UI labels, kickers, nav and buttons are ALL CAPS (THE NOTE, PLAY INSIGHT, SCROLL TO EXPLORE). Titles are sentence/title case with a capitalized key noun ("the right Beat.", "the blue Glow.").
- **Korean:** body copy in Korean (해요/합니다 polite tone, short sentences); kickers and chapter labels may stay English caps for the editorial feel.
- **Emoji:** only sparingly at list-item starts in the tips (🌗 🕯 🛏 ☕ 🏃 🌿) and a sign-off 😴/😊. Avoid in UI chrome.
- **Claims:** the reference avoids expertise claims ("This site isn’t claiming expertise"). For a supplement brand, keep health language modest; no medical promises.

## VISUAL FOUNDATIONS
- **Color:** two worlds. *Night* — deep navy `#010d6e` to electric blue `#0042af`, starfield of yellow/blue dots. *Day/paper* — cream `#fef1d0` with blue-700 type. Ink `#333` for long body text; near-black `#010101` appears in illustrations. `#4589f7` is the soft accent (dots, kickers, numbers).
- **Type:** thin high-contrast display serif ("Editorial", weight ~100) for titles, often wide-tracked caps (SLEEP WELL CREATIVE); NM grotesk (Light/Regular/Medium) for body and uppercase UI labels. Display sizes 135/87/69/51; body 25→14.
- **Imagery:** hand-painted, grainy textures (blue/cream watercolor blobs, black/cream topographic blobs, cream-on-blue) and a surreal night-sky illustration with a lone figure. Cool blue + cream, soft grain, no photos of people. Textures are used as fills inside pills, circles and cards.
- **Backgrounds:** full-bleed night gradient sections alternate with flat cream sections. No repeating UI patterns beyond the textures; stars twinkle (flash).
- **Corners:** 15px on cards/panels; 650px (pill) for buttons, tags, image masks; 50% for icon buttons and round images.
- **Borders:** 2px blue-700 / #2451b5 around cards; 1px blue-400 hairlines for fields/dividers; 1px or 2px cream on night backgrounds.
- **Shadows:** none. Depth comes from color and texture, not elevation.
- **Cards:** cream (or navy/blue) fill, 15px radius, 2px blue border, no shadow; serif title, uppercase kicker.
- **Motion:** gentle. Durations 0.15–0.6s, ease-in-out; buttons 0.3s ease-out on background-color + scale. Keyframes `floatFade` (0.8s rise-in) for content entrance, `flash` (2s) for stars and "Scroll to Explore". Ambient audio on the reference.
- **Hover:** background darkens (blue-400→#3b74d2, navy-900→#011084, blue-700→navy-800); outline buttons fill; links on night go to white.
- **Press:** slight shrink (scale 0.96).
- **Transparency/blur:** only on modal scrims (navy 55% + 6px blur).
- **Layout:** fixed transparent header (nav left, emblem center, THE NOTE + dots menu right); long vertical storytelling scroll; generous 120px section padding, 30px gutters; max content ~1240px. Breakpoints 1024 / 991 / 767 / 479.

## ICONOGRAPHY
- The reference uses a handful of inline SVG icons (dots/grip menu, play, close, arrows) — not an icon font; none are published as separate files.
- **Substitution:** this system uses **Lucide** (CDN, 1.5px stroke, round caps) as the closest match. Flagged — replace with originals if available.
- Unicode/emoji: occasional emoji only at the start of tips; "—" and curly quotes as typographic devices.
- Brand marks: `assets/logo.svg` (moon-and-sunburst oval emblem, navy/cream) and `assets/logo-lockup.avif` (emblem + "Sleep Well" wordmark).

## Fonts
- `fonts/nm-*.woff(2)` — NM Light/Regular/Medium (original files).
- **Substituted:** "Editorial" display serif was not obtainable → **Cormorant Garamond** (Google Fonts). Korean fallbacks: Noto Serif KR (display), Pretendard (body). Please supply Editorial font files.

## Index
- `styles.css` — entry; imports `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/` — logo.svg, logo-lockup.avif, favicon.png, webclip.png, og-cover.png, textures/*.webp, images/
- `components/` — React primitives (below)
- `ui_kits/website/` — interactive storefront recreation
- `SKILL.md` — agent skill entry

## Components
- core: Button, IconButton, Tag, Eyebrow, SectionHeader
- forms: Input, Select, Checkbox, Radio, Switch
- surfaces: Card, Dialog, Tooltip
- navigation: Tabs
- feedback: Toast
- commerce: ProductCard, QuantityStepper

### Intentional additions
No source component library exists, so a standard set was authored. Brand-specific additions: **Eyebrow** (dotted kicker used above every hero title), **SectionHeader** (numbered chapter pattern), **ProductCard** + **QuantityStepper** (needed for a supplement shop).
