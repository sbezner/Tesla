# Visual Specification

Design by Iris. Implement exactly as specified.

## Design Tokens

```css
--bg: #000000
--text: #ffffff
--body: rgba(255,255,255,0.78)
--muted: rgba(255,255,255,0.48)
--faint: rgba(255,255,255,0.28)
--rule: rgba(255,255,255,0.12)
--red: #e82127
--font: "Helvetica Neue", Helvetica, Arial, sans-serif
--measure: 36rem
--page: 1120px
--gutter: clamp(24px, 6vw, 80px)
--ease: cubic-bezier(0.22, 1, 0.36, 1)
```

- `color-scheme: dark`
- `theme-color: #000`
- No Inter / Roboto / Poppins / Outfit / Space Grotesk
- No webfonts

## Typography

### Hero Wordmark
- Size: `clamp(4.5rem, 14vw, 11rem)`
- Weight: 500
- Tracking: -0.045em
- Line height: 0.85
- Color: white
- Copy: **TESLA, INC.**

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

### Year
- Size: `clamp(3.25rem, 9vw, 8rem)`
- Weight: 300
- Tracking: -0.04em
- Line height: 0.9
- Color: white
- Element: `<time>`, not a heading

### Event Name
- Size: 11px
- Weight: 500
- Tracking: 0.28em
- Transform: uppercase
- Color: muted
- Element: This is the `<h2>`, visually a kicker

### Body Copy
- Size: 17px
- Line height: 1.55
- Color: --body
- Max-width: 36rem

### Disclaimer
- Size: 12px
- Line height: 1.5
- Color: muted

### Hierarchy
- One `<h1>` on the page (wordmark only)

## Layout

Kill `.container` as a card. No radius, no shadow, no body padding.

### 1. Hero
- `min-height: 100svh`
- Vertically centered
- Content: Wordmark → solid 48×2px --red rect (not gradient) → kicker → legal line
- No photo, no canvas, no glow
- Type is the hero

### 2. Chapters
Chapters replace the timeline. No left rail, no dots.

**Each chapter:**
- `min-height: 72vh`
- `padding: 18vh 0`
- Top hairline: --rule

**Desktop (≥900px):**
- Two columns
- Year: left 42%
- Kicker + body: right
- Gap: 48px
- Year aligned to kicker baseline

**Mobile (<900px):**
- Single column
- Order: kicker → year → body

### 3. Chapter Structure

Split h2s into separate components:

- 2003 The Beginning
- 2004 Musk Joins
- 2008 The Roadster
- 2010 Going Public
- 2012 Model S
- 2015 Energy Products
- 2015 Model X (separate chapter, do not merge)
- 2017 Model 3
- 2020 Model Y
- Today (no kicker)

**HTML structure:**
```html
<article class="chapter" id="y2003">
    <time datetime="2003">2003</time>
    <div class="copy">
        <h2>The Beginning</h2>
        <p>…verbatim content…</p>
    </div>
</article>
```

### 4. Year Rail (Optional)

Desktop ≥1080px only:
- Fixed right: 28px
- Years: 03 04 08 10 12 15 15 17 20 NOW
- Size: 10px
- Tracking: 0.1em
- Color: faint
- Active: --red
- In-page links
- Hide on smaller screens
- `aria-label="Timeline"`

Do not block ship on this feature.

### 5. Footer
- Same black background
- Top hairline: --rule
- Padding: `12vh gutter 8vh`
- Full disclaimer verbatim
- No gray slab, no logo, no icons

## Motion

Tesla-slow. No bounce, no parallax, no scroll-jacking.

### Hero
- Fade + translateY 16px
- Duration: 900ms
- Easing: --ease
- Red bar: scaleX(0→1) from center

### Chapters
- Optional Intersection Observer
- Fade-up: 28px
- Duration: 700ms
- Trigger once
- Threshold: 0.18

### Reduced Motion
- `prefers-reduced-motion`: opacity transitions only
- If JS is risky: CSS hero animation only

## Accessibility

- Focus visible: 1px white, offset 4px
- Body contrast: ≥0.78
- Navigation: `aria-label="Timeline"` if rail ships

## What to Cut

- Gradients
- Card container
- Shadow
- Timeline dots/rail
- Combined year-dash-title h2s
- Footer gray background
- Body padding on container
- Purple/blue chrome
- Glass effects
- Neon
- Particles
- Stock photos
- Car renders
- Fake Tesla navigation
- T-logo
- Order CTA
- Webfonts
- Emoji
- Icon fonts
- GSAP/Locomotive

## Success Criteria

Live https://sbezner.github.io/Tesla/ should:
- Have no purple
- Have type with proper scale
- Keep disclaimer intact verbatim
- Feel like a Tesla product page that happens to be history
- Not be a tesla.com clone
