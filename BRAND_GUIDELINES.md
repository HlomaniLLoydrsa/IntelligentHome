# Intelligent Home — Brand Guidelines

> **Smart living starts at home.**

---

## Brand Positioning

Premium home essentials designed to simplify everyday living.

**Launch categories:** Kitchen Accessories, Kitchen Cleaning
**Future categories:** Bedroom, Bathroom, Laundry, Storage & Organization, General Home Essentials

**Competitive frame:** IKEA, Joseph Joseph, OXO, Aesop, Le Creuset — premium home brands that value design, quality, and simplicity.

---

## Brand Promise

We believe that everyday products should be beautiful, functional, and built to make life easier.

Every product in Intelligent Home should improve everyday living through thoughtful design, quality, and simplicity.

---

## Brand Values

- **Simplicity** — Clean design, clear communication, no clutter
- **Quality** — Premium materials, considered construction
- **Practical Innovation** — Smart solutions for real problems
- **Sustainability** — Thoughtful choices for people and the planet
- **Trust** — Transparent, reliable, consistent

---

## Logo

### Variants

| Variant | Usage |
|---------|-------|
| Full logo (mark + wordmark + tagline) | Homepage hero, about page, packaging |
| Mark + wordmark (no tagline) | Header navigation, email headers |
| Mark only (house icon) | Favicon, social avatars, loading states |
| Wordmark only | Mobile header where space is limited |

### Logo files

- `assets/logo-intelligent-home.png` — Full logo (mark + wordmark + tagline)
- `assets/favicon.svg` — House mark only for favicon

### Clear space

Keep at least the height of the "H" in HOME as breathing room on all sides.

### Minimum size

Wordmark should never render below 120px wide.

### Logo colors

The logo uses a dark-to-light green gradient. On dark backgrounds, use the white version. Never place the logo on busy or low-contrast backgrounds.

---

## Colors

### Primary palette

| Token | Hex | Role |
|-------|-----|------|
| Forest | `#1B5E20` | Primary dark — footer, high-emphasis headings |
| Emerald | `#2E7D32` | Primary — buttons, links, active states |
| Leaf | `#43A047` | Primary light — hover states, highlights |

### Neutral palette

| Token | Hex | Role |
|-------|-----|------|
| Charcoal | `#1F2937` | Body text |
| Slate | `#6B7280` | Secondary text, captions, metadata |
| Border | `#E5E7EB` | Dividers, input borders |
| Stone | `#F5F5F4` | Neutral surface — cards, input backgrounds |
| Ivory | `#FAFAF7` | Page background — warm white |
| White | `#FFFFFF` | Cards, modals, button text on primary |

### Accent

| Token | Hex | Role |
|-------|-----|------|
| Gold | `#D4A853` | Luxury accent — badges, premium labels (use sparingly) |
| Sage | `#E8F5E9` | Light green surface — featured sections |

### Color usage rules

- Primary green is for interactive elements (buttons, links) and brand emphasis
- Body text is always Charcoal (`#1F2937`), never pure black
- Backgrounds alternate between Ivory and White for rhythm
- Gold is reserved for premium badges and highlights — never for primary buttons
- Sage is for section backgrounds that need subtle brand color

---

## Typography

### Font stack

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings | Playfair Display | 600–700 | Elegant high-contrast serif. Matches the logo wordmark style. |
| Body | Inter | 400, 500, 600 | Clean geometric sans-serif. Excellent legibility at all sizes. |
| Labels/Buttons | Inter | 500–600, uppercase, 0.05em tracking | Category labels, badges, CTA buttons |

### Type scale

```
--text-xs:   0.75rem   (12px) — fine print, badges
--text-sm:   0.875rem  (14px) — captions, metadata, button text
--text-base: 1rem      (16px) — body copy
--text-lg:   1.125rem  (18px) — lead paragraphs
--text-xl:   1.25rem   (20px) — card titles
--text-2xl:  1.5rem    (24px) — section subtitles
--text-3xl:  2rem      (32px) — section headings
--text-4xl:  2.5rem    (40px) — page titles
--text-5xl:  3.25rem   (52px) — hero headline
```

### Typography rules

- Headings: Playfair Display, sentence case (not ALL CAPS except for the logo itself)
- Body: Inter, 1.6 line height for readability
- Links: Emerald green, 1px underline offset 0.15em
- Never use more than 3 font weights on a single page

---

## Spacing

### Scale

```
--space-xs:  0.25rem  (4px)
--space-sm:  0.5rem   (8px)
--space-md:  1rem     (16px)
--space-lg:  1.5rem   (24px)
--space-xl:  2rem     (32px)
--space-2xl: 3rem     (48px)
--space-3xl: 4rem     (64px)
--space-4xl: 6rem     (96px)
```

### Section spacing

- Between major sections: `--space-4xl` (96px) desktop, `--space-3xl` (64px) mobile
- Internal section padding: `--space-3xl` top/bottom
- Grid gaps: `--space-xl` (32px) between cards

---

## Buttons

### Style

| Property | Value |
|----------|-------|
| Border radius | 12px |
| Padding | 14px 28px (vertical × horizontal) |
| Font | Inter, 500 weight, 14px, uppercase, 0.03em letter-spacing |
| Min height | 48px (touch-friendly) |
| Transition | all 200ms ease |
| Hover | Slight lift (translateY -2px) + subtle shadow |

### Variants

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Primary | Emerald `#2E7D32` | White | None |
| Primary hover | Forest `#1B5E20` | White | None |
| Secondary | Transparent | Emerald | 1px Emerald |
| Secondary hover | Sage `#E8F5E9` | Forest | 1px Forest |
| Ghost | Transparent | Charcoal | None |
| Ghost hover | Stone | Charcoal | None |

---

## Icons

| Property | Value |
|----------|-------|
| Style | Line icons, stroke only |
| Stroke width | 1.5px |
| Corner radius | 2px on caps/joins |
| Grid size | 24×24px |
| Color | `currentColor` (adapts to context) |

**Preferred set:** Lucide Icons (open source, consistent, well-maintained)

**Usage:**
- Navigation: cart, account, search, menu, close
- Value props: quality, shipping, security, returns
- Product details: materials, dimensions, care

**Rules:**
- Never use filled icons — only stroke/outline
- Keep consistent stroke weight across all icons
- Icons should breathe — at least 8px padding around them

---

## Photography Style

### Product photography

| Attribute | Direction |
|-----------|-----------|
| Lighting | Soft, diffused natural daylight. Side-lit or overhead. No harsh shadows. |
| Background | Neutral: white, light linen, warm marble, light wood grain |
| Composition | Generous negative space. Product as hero. Minimal props. |
| Angle | Straight-on or ¾ for product detail. 30–45° overhead for lifestyle. |
| Color grading | Warm whites, slightly desaturated. Natural greens, not neon. |

### Lifestyle photography

| Attribute | Direction |
|-----------|-----------|
| Setting | Natural kitchens, wooden countertops, white marble, green plants, soft daylight |
| Feel | Realistic, aspirational but achievable. Not AI-looking or overly perfect. |
| People | Optional — hands interacting with products (pouring, wiping, cooking). No faces unless editorial. |
| Props | Minimal — a plant, a cloth, a cutting board. Never cluttered. |

### Image dimensions

| Context | Size | Ratio |
|---------|------|-------|
| Hero banners | 1920×800px | ~2.4:1 |
| Category cards | 800×600px | 4:3 |
| Product images | 1200×1200px | 1:1 |
| Lifestyle shots | 1200×800px | 3:2 |

---

## Tone of Voice

| Attribute | Description |
|-----------|-------------|
| Warm | Friendly and inviting, never corporate |
| Confident | We know our products are good — no need to oversell |
| Clear | Simple language, short sentences, no jargon |
| Helpful | Guide the customer, don't pressure them |
| Considered | Every word earns its place |

### Writing rules

- Use sentence case for headings and buttons (capitalize only first word and proper nouns)
- Keep product descriptions under 3 short paragraphs
- Lead with benefit, follow with feature
- Active voice over passive
- "You" over "customers" — speak directly

---

## UI Components

### Cards

- Background: White
- Border: 1px `#E5E7EB`
- Border radius: 12px
- Shadow: none at rest, subtle on hover (`0 4px 12px rgba(0,0,0,0.06)`)
- Padding: `--space-lg` internal

### Inputs

- Height: 48px
- Border: 1px `#E5E7EB`
- Border radius: 12px
- Background: White
- Focus: 2px Emerald outline
- Placeholder: Slate color

### Sections

- Alternate between Ivory (`#FAFAF7`) and White backgrounds
- Section heading: Playfair Display, `--text-3xl`, Charcoal
- Section description: Inter, `--text-base`, Slate
- Heading + description centered for feature sections, left-aligned for content sections

---

## Responsive Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | < 768px | Single column, stacked layouts |
| Tablet | 768–1023px | 2-column grids |
| Desktop | ≥ 1024px | Full multi-column layouts |

### Mobile-first rules

- Touch targets: minimum 48×48px
- Font sizes: hero headline scales to `--text-3xl` on mobile
- Sections: reduce padding to `--space-3xl`
- Grids: collapse to 1 or 2 columns

---

## File naming

- Sections: `sections/{purpose}.liquid` (kebab-case)
- Blocks: `blocks/{component-name}.liquid` (kebab-case)
- Snippets: `snippets/{component-name}.liquid` (kebab-case)
- Assets: `assets/{type}-{name}.{ext}` (e.g., `logo-intelligent-home.png`, `icon-cart.svg`)

---

*Last updated: July 2026*
