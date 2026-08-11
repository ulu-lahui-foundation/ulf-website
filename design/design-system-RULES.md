# Kapa Lau ʻUlu — Design System Rules
Ulu Lāhui Foundation website. Read this whole document before writing any code.

## READ THIS FIRST

**This document and `design-tokens.css` are the entire specification. `design-system-visual-reference.html` is NOT the specification — it is a rendered demonstration of these rules, built as a reference document, not as the website.**

If you only have these files and no other context, follow these three things exactly:

1. **Do not copy the visual reference file's own page chrome.** Its pale sage-green background (`#EDF1EC`), its reading-column width, its font sizes for prose, its horizontal rules between sections — none of that is the Ulu Lāhui site's design. That's just how *this specific spec document* is laid out so a human can read it. The site's actual page color is `#FBEDD2` (see below), not `#EDF1EC`.
2. **A color used often in an example is not "the" color.** The reference doc shows Moana blue, ʻAlaea orange, and others repeatedly because *any* of the six hues is valid in *any* vivid slot — that repetition is coincidence of which examples got written, not a hierarchy. There is one confirmed **primary**: ʻAlaea (`#D96913`), pulled from the org's logo. Every other hue is a fully valid **secondary/accent**, chosen per section, not fixed to one role.
3. **Every specific pixel value in this doc is load-bearing.** Gutter padding is 8px, not "some padding." The seam border is 1px, not "a thin border." If a value here conflicts with your instinct for what looks better, use the value here and flag the conflict — don't quietly round it off.

---

## 2. Two physical states: Stitched vs. Patches

Every multi-container layout on the site (a row of program cards, a photo grid, a team list, a callout) is either **Stitched** or **Patches**. Go back-and-forth between the two style types, starting with **Stitched** as the page hero (under the site top menu, which is always **Patches**. Do not mix the two rule sets within one section.

### Stitched — pieced together and quilted through

- Every individual container (including gutters) gets **sharp corners, radius 0**. There is no shared outer radius for the group.
- The seam between containers is a **plain 1px solid border**, not a dashed line, not a colored gap. Border color depends on the container's own fill:
  - On a **vivid** fill: border = that hue's `--{hue}-deep` token.
  - On a **light** fill: border = that hue's `--{hue}-edge-light` token.
- Every container gets the **trapunto bevel**: `box-shadow: inset -1.5px -1.5px 2px var(--lo, ...)`. This is shadow-only — there is no highlight half. Do not add one back in.
- **Section headers** (an eyebrow + heading introducing a section) are always **left-justified** in both physical states — don't center them. Always use a vivid fill for section header containers.
- **Gutters**: a stitched section spanning the page width gets a gutter on each side, carrying a large motif (traced quilt-block art, not the small single leaf) at reduced opacity, sitting on a vivid or light fill just like any other container.
  - Gutter width: `flex: 1 1 60px; min-width: 60px; max-width: 180px` (flexbox contexts), or for a CSS Grid layout, `minmax(60px, 0.75fr)`-style tracks scaled to your content columns' fr total — **never a fixed px max inside a grid**, because grid gives fixed-max tracks sizing priority over `fr` tracks, which squeezes your actual content at narrow viewports.
  - **If a gutter runs alongside more than one container vertically** (e.g. a 2-row grid), split that gutter into one segment per row, each matching that row's height exactly — do not use one tall gutter next to two stacked containers.
  - Gutter padding: **8px**, all sides. The icon inside sits at **height: 100%** of the padded area, **width: auto**, `aspect-ratio: 1` — do not set width independently of height.
  - The side of a gutter touching the **true browser edge** gets no border on that side (it should look cut off by the viewport, like there's more quilt beyond what's shown). The side facing the content gets the normal border. Implement as separate `.gutter-l` / `.gutter-r` classes, and **declare them after** `.stitched-edge` in your stylesheet — `.stitched-edge`'s `border` shorthand will silently re-enable a removed border-left/border-right if it comes later in source order.
- **Vivid pairing**: mixing vivids directly against each other (no light buffer) is encouraged. Two specific pairs go muddy and must be avoided: **ʻAlaea next to Moana**, and **ʻAlaea next to ʻŌlena**. Every other combination is fine.
- **Forbidden fills**: never use `#FBEACA`, `#ECF3CC`, or `#F8E4D4` (= `--olena-light`, `--ulu-light`, `--alaea-light`) as a container's fill color in a stitched section. (`#FBEACA` is reserved as the page background — see Part 3.)
- The whole stitched frame sits on the page color, `#FBEDD2`, with **no extra vertical padding** around it — the page color should be tight to the containers, not framing them with a gap.

### Patches — cut, not yet sewn to anything

- **Zero radius** (same as stitched — sharp corners everywhere in this system, no exceptions).
- **Real drop shadow, not a bevel**: `box-shadow: 6px 6px 0 rgba(73,35,6,0.35)` — a hard offset.
- **Border**: a `1px dashed` outline, **inset 4px from the true edge** — not sitting flush on the edge. Implement with `outline: 1px dashed currentColor; outline-offset: -4px;`, not `border` — a plain CSS border can't be inset from an element's own edge, but `outline-offset` can go negative and pull the outline inward, so this is straightforward, not a structural problem. Border color depends on the container's own fill:
  - On a **vivid** fill: border = that hue's `--{hue}-deep` token.
  - On a **light** fill: border = that hue's `--{hue}-edge-light` token.
- A **minority** of patches in any group sit at a slight rotation (roughly 1 in 8, using `rotate(-2deg)` / `rotate(1.5deg)` / `rotate(-1deg)` — pick one, don't stack multiple rotations on one element). Most patches stay unrotated.
- **Background scatter shapes**: a couple of oversized rectangles sized comparably to the real content (not tiny corner confetti), positioned behind the real content (their `z-index` must be lower — set the real content's wrapper to `position: relative; z-index: 2` and scatter shapes to `z-index: 1`, and make sure both share the same positioned ancestor, or the "lower z-index" element can still paint on top). Shadow on these scatter shapes: `rgba(73,35,6,0.22)`.
- **Forbidden fills**: never use `#FBEACA` or `#F8E4D4` (`--olena-light`, `--alaea-light`) as a patch's fill. (`--ulu-light` is fine for patches — it's only forbidden in stitched contexts.)
- Sits on the same page color as stitched, `#FBEDD2`, with generous padding around the whole group — this is the one place page-color padding is correct; stitched sections should NOT have it.

### Moving between the two on a real page

When a page transitions from a patches section into a stitched one, or vice versa, mark the seam with a solid horizontal line in `rgba(73,35,6,0.35)` (same color and opacity as the patches shadow):
- **Patches → Stitched: no line.** The seam is unmarked in this direction.
- **Stitched → Patches: 8px line.**

## 3. Color

Six hues, each with four depths. Full values in `design-tokens.css`. Usage ratio: **light and vivid should carry most of a page; dark fields are a rare exception**, not a default background choice — don't reach for a dark hue as a section background by default.

- **ʻAlaea** (`#D96913`) is the confirmed primary, from the logo.
- The other five (ʻŌlena, Ulu, Moana, Lehua, Kai) are equally valid accents — rotate through them, don't default to one.
- Page/table color across the whole site: **`#FBEDD2`**.
- Text/ink: **`#2B1B12`**, warm dark brown. Never pure black, never neutral gray, except deliberately for disabled UI states (see Part 4).
- **Headers on a light field use that hue's own vivid tone as text color** (not a muted dark tint) — with two exceptions: ʻŌlena and Ulu are both light, bright hues whose vivid tone fails contrast against their own light tint (checked: under 2:1). For those two only, use the `-dark` token for header text. Every other hue uses vivid text directly.
- Gradients (used on filled surfaces as a subtle "dye-bath" sheen): go from `vivid` to `deep`. `deep` is **not** just a darkened vivid — it's hue-shifted toward a richer adjacent color (orange shifts toward red, blue toward indigo/purple, teal toward a deeper blue-green) so the transition reads as rich, not muddy. Exact values are precomputed in `design-tokens.css` — don't re-derive them by simply darkening the vivid.

## 4. Buttons

Three tiers — primary, secondary, tertiary — each with default/hover/active/disabled. Buttons are **appliqué**: flat, no padding-bevel, no gradient, no box-shadow beyond what's specified below. Never apply the stitched trapunto bevel to a button.

- **Primary**: solid vivid fill, `1px dashed` border in that hue's `-deep` tone, white or ink text per contrast. Hover and active are **identical**: an inset "pressed" shadow. Disabled: flat warm gray (`#D9D4C6` fill, `#948E7E` text) — this is the one place a neutral gray is correct.
- **Secondary**: transparent fill, `1px dashed` border in the vivid itself (not the deep tone). Hover and active are identical: fills with that hue's light tint. Disabled: same gray treatment as primary.
- **Tertiary**: no fill, no border, vivid-colored text. Hover/active: dashed underline. Disabled: same gray. **This tier was never explicitly specified by the client — it's a draft default. Confirm it before treating it as settled.**

Any of the six hues is valid for any button instance — set via `--tone` custom properties, don't hardcode one hue into the button component.

## 5. Typography

K2D for anything someone should notice first (headings). Quicksand for anything read at length (body) and for every label/tag/eyebrow/button (bold, all caps, 0.06em letter-spacing — this caps treatment is the *only* place all-caps belongs; never on a heading or a full sentence). Full scale in `design-tokens.css`.

## 6. Spacing

Seven values only: 4 · 8 · 16 · 24 · 40 · 64 · 96 (px). Vary which ones you use across a layout — leaning on the same one everywhere reads as no rhythm, just repetition.

## 7. Voice (for actual site copy)

Active voice, first-person plural ("we"). No em dashes. Hawaiian terms italicized with an English gloss on first use. Community members named as agents, not beneficiaries. No "not X but Y" constructions. Plain and warm, not clever.

## 8. Named anti-patterns — do not reintroduce these

| Don't | Do instead |
|---|---|
| Wide, blurred drop shadow | Patches get a hard 0-blur offset shadow; stitched gets a tight inset bevel. Nothing in this system blurs a shadow. |
| Decorative multi-hue gradient, gradient text | Single-hue value/hue-shift sheen only (Part 3) |
| 24px+ corner radius anywhere | 4px on standalone rounded components (buttons, nav, footer), 0px on every stitched or patch container |
| Colored accent bar on one side of a card | Never — a stitched piece uses the seam/border system; a patch has no border at all |
| Identical repeating card grid | Rotate hues, vary sizing, use patches' occasional tilt |
| Icon in a rounded tile stacked above a heading | Icon inline beside the heading, or dropped |
| Cream/beige, pure white, or pure black/gray as a background | The six-hue matrix only, except disabled buttons (Part 4) |
| Tracked uppercase eyebrow above a hero headline on the live site | Fine in internal documentation only — never as live-site hero decoration |

---

*If anything in a request conflicts with a rule above, implement the rule as written and say so explicitly, rather than silently blending the two.*
