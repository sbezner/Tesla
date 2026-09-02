# Visual Specification — Locked

Design by Iris. Implemented exactly as specified.

## Design Tokens (LOCKED)

```css
--bg: #171a20
--text: #ffffff
--body: #d0d1d2
--muted: #8e8e8e
--faint: #5c5e62
--rule: #393c41
--red: #e82127
--font: "Helvetica Neue", Helvetica, Arial, sans-serif
--measure: 36rem
--page: 1120px
--gutter: clamp(24px, 6vw, 80px)
--ease: cubic-bezier(0.25, 0.1, 0.25, 1)
```

**Locked constraints:**
- `color-scheme: dark`
- `theme-color: #171a20`
- Use TDS near-black (#171a20), **never pure black (#000)**
- **Never Electric Blue (#3e6ae1)**
- No Tesla logo, no Order/Inventory/Shop CTAs
- No Universal Sans from digitalassets.tesla.com
- No webfonts, no stock photos, no car renders
- Font weights: **400 and 500 only** (no 300, no 700)
- Red (#e82127) only on: hero bar, year rail active state

## Typography

### Hero Wordmark
- Size: `clamp(4.5rem, 14vw, 11rem)`
- Weight: **500**
- Tracking: -0.045em
- Line height: 0.85
- Color: white
- Copy: **TESLA, INC.**
- Element: `<h1>` (only one on page)

### Hero Kicker
- Size: 11px
- Weight: 500
- Tracking: 0.32em
- Transform: uppercase
- Color: muted
- Copy: **A BRIEF HISTORY**

### Hero Legal
- Size: 11px
- Color: faint
- Copy: **Unofficial. Not affiliated with Tesla, Inc.**

### Section Labels
- Size: 11px
- Weight: 500
- Tracking: 0.32em
- Transform: uppercase
- Color: muted
- Copy: **HISTORY** / **VEHICLES** / **ENERGY**
- Placement: Centered, 8vh above section content

### Year (History)
- Size: `clamp(3.25rem, 9vw, 8rem)`
- Weight: **500**
- Tracking: -0.04em
- Line height: 0.9
- Color: white
- Element: `<time>`, not a heading

### Event Name / Kicker
- Size: 11px
- Weight: 500
- Tracking: 0.28em
- Transform: uppercase
- Color: muted
- Element: `<h2>` for history chapters, `.plaque-kicker` for product plaques

### Plaque Name (Vehicles/Energy)
- Size: `clamp(3.5rem, 10vw, 8rem)`
- Weight: **500**
- Tracking: -0.04em
- Line height: 0.9
- Color: white
- Element: `<h2>`

### Body Copy
- Size: 17px (16px mobile)
- Line height: 1.55
- Color: --body (#d0d1d2)
- Max-width: 36rem

### Nav Text
- **UNOFFICIAL label**: 10px, tracking 0.32em, --muted
- **Nav links**: 11px, tracking 0.28em, uppercase, --muted (inactive), --text (active/current)

### Disclaimer
- Size: 12px
- Line height: 1.5
- Color: muted

## Layout

### Fixed Top Nav
- Height: 48px
- Fixed position
- Background: transparent on hero, --bg after `scrollY > 40`
- Left: "UNOFFICIAL" label (10px tracked, --muted, not a link)
- Right: History / Vehicles / Energy links (11px tracked, uppercase)
- Active link: --text
- Z-index: 100
- No hamburger, no Shop/Account, no logo

### Hero
- `min-height: 100svh`
- Vertically centered
- Content order:
  1. Wordmark (TESLA, INC.)
  2. Red bar (48×2px solid)
  3. Kicker (A BRIEF HISTORY)
  4. Three navigation links (History / Vehicles / Energy → #history #vehicles #energy)
  5. Legal line (Unofficial. Not affiliated with Tesla, Inc.)
- No photos, no canvas, no glow
- Type is the hero

### History Section (#history)
- Section label: "HISTORY" (11px tracked, centered, 8vh above first chapter)
- Border-top: 1px solid --rule

**Chapters:**
- Padding: `12vh 0` (desktop), `10vh 0` (mobile ≤600px)
- **No min-height** (removed 72vh constraint)
- Top hairline: --rule
- Default opacity: 1 (visible without JS)
- JS reveal: only if `html.js` class present
- Motion: opacity 0→1, translateY(12px→0), 450ms --ease

**Desktop (≥900px):**
- Grid: 42% / 1fr
- Gap: 48px
- Year: right-aligned, left column
- Kicker + body: right column

**Mobile (<900px):**
- Single column
- Order: time → kicker → body

**Chapter structure:**
1. 2003 The Beginning
2. 2004 Musk Joins
3. 2008 The Roadster
4. 2010 Going Public
5. 2012 Model S
6. 2015 Energy Products (separate chapter)
7. 2015 Model X (separate chapter, do not merge)
8. 2017 Model 3
9. 2020 Model Y
10. Today — **kicker: "Continuing"**

### Vehicles Section (#vehicles)
- Section label: "VEHICLES" (11px tracked, centered)
- Border-top: 1px solid --rule
- Layout: centered product plaques, **not** two-column grid

**Plaques:**
- `min-height: 88svh`
- Centered content: year kicker → name → body paragraph
- Top hairline: --rule
- Padding: 12vh 0
- Text-align: center
- Body: max-width --measure, centered
- Motion: same as chapters (450ms / 12px)

**Vehicles (5 total):**
1. **Roadster** — 2008 — verbatim history paragraph
2. **Model S** — 2012 — verbatim history paragraph
3. **Model X** — 2015 — verbatim history paragraph
4. **Model 3** — 2017 — verbatim history paragraph
5. **Model Y** — 2020 — verbatim history paragraph

**No Cybertruck, no Semi, no Roadster 2.0, no Optimus, no FSD**

### Energy Section (#energy)
- Section label: "ENERGY" (11px tracked, centered)
- Border-top: 1px solid --rule

**Lead paragraph:**
- Copy: 2015 Energy Products paragraph (verbatim)
- Max-width: --measure
- Left-aligned
- Padding: 8vh gutter
- Color: --body

**Plaques (3 total):**
- `min-height: 70svh`
- Centered content
- Top hairline: --rule (including first plaque)
- Name → kicker (order reversed from vehicles)
- Motion: same as chapters (450ms / 12px)

1. **Powerwall** — kicker: "Home battery"
2. **Powerpack** — kicker: "Utility-scale"
3. **Solar** — kicker: "Solar products" + body: Today paragraph (verbatim)

### Year Rail
- **Visibility:** History section only, ≥1080px
- Hide on: hero, vehicles, energy, footer
- Body class: `.in-history` toggles display
- Position: fixed right 28px, vertically centered
- Links: 03 04 08 10 12 15 15 17 20 NOW
- Font: 10px, tracking 0.1em
- Color: --muted (inactive), --red (active)
- Transition: 330ms --ease
- Z-index: 10
- `aria-label="Timeline"`

### Footer
- Border-top: 1px solid --rule
- Padding: `12vh gutter 8vh`
- Max-width: --page, centered
- Background: --bg (same as page)
- Disclaimer: verbatim, 12px, --muted, max-width --measure
- Copyright: © 2026 Educational purposes only
- No gray slab, no logo, no icons

## Motion

Tesla-slow. No bounce, no parallax, no scroll-jacking.

### Timing
- Duration: **450ms** (not 900ms, not 700ms)
- Easing: --ease (`cubic-bezier(0.25, 0.1, 0.25, 1)`)
- Distance: **translateY(12px)** (not 16px, not 28px)

### Hero
- Red bar: scaleX(0→1) from center, 450ms, delay 150ms
- No fade-in on hero itself

### Chapters & Plaques
- Default: `opacity: 1` (visible without JS)
- JS reveal: only if `html.js` class on `<html>`
- Intersection Observer: threshold 0.18
- Transition: opacity + translateY(12px)
- Trigger once

### Nav
- Scroll background: 450ms --ease
- Link color: 450ms --ease
- Scrolled class: added after `scrollY > 40`

### Year Rail
- Hover + active: 330ms --ease

### Reduced Motion
- `prefers-reduced-motion`: disable all animations
- Chapters/plaques: force `opacity: 1`, `transform: translateY(0)`
- Nav transitions: keep (do not disable)

## Progressive Enhancement

**html.js pattern:**
- JS adds `.js` class to `<html>` on load
- Chapters/plaques: default `opacity: 1` in CSS
- Fade-up applied only if `html.js .chapter` selector matches
- No-JS users see all content immediately (no blank screens)

## Accessibility

- Focus visible: 1px white, offset 4px
- Body contrast: --body (#d0d1d2) meets WCAG AA
- Navigation: `aria-label="Main navigation"` and `aria-label="Timeline"`
- Semantic HTML: `<time>` for years, proper heading hierarchy
- Smooth scroll: disabled for `prefers-reduced-motion`

## What NOT to Include

- Gradients
- Drop shadows
- Glass effects, blur, backdrop-filter
- Particles, canvas effects, WebGL
- Stock photos, car renders, product images
- Tesla logo (T symbol)
- Fake tesla.com navigation
- Order / Inventory / Shop / Account CTAs
- Electric Blue (#3e6ae1)
- Universal Sans webfont
- Emoji
- Icon fonts
- GSAP / Locomotive / other scroll libraries
- Pure black (#000) page background
- Cybertruck, Semi, Roadster 2.0, Optimus, FSD content

## Success Criteria

Live at https://sbezner.github.io/Tesla/ should:
- Feel like three distinct product surfaces (History / Vehicles / Energy)
- Not feel like a single timeline scroll with extra headings
- Use TDS near-black (#171a20, not #000)
- Have no purple, no Electric Blue
- Use proper type scale and weights (400/500 only)
- Show fixed transparent nav that becomes solid on scroll
- Show year rail only during History section
- Have motion at 450ms / 12px with proper easing
- Work without JS (no blank screens)
- Keep disclaimer intact verbatim
- Title: "Tesla, Inc. — Unofficial"
- Feel cinematic and Tesla-quality while being clearly unofficial
- Be a complete app experience, not a brochure
