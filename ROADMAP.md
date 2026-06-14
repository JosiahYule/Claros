# Claros — Design Roadmap

A plan to move the site from a faithful *flat simulation of a printed page* to a
site that feels like a **physical fine-press object, lit and tactile**. The
guiding principle: translate modern (2026) web-design practice *through the
fine-press lens* rather than bolting trends on. The field has moved away from
heavy WebGL/3D toward **texture, grain, and material depth** — which for this
brand is not trend-chasing, it's literally paper.

## Why the site reads as "flat"

1. **No material.** Pure flat fill on a glowing screen. Real fine-press work has
   paper tooth, ink density, and the warmth of light on a surface.
2. **No layering.** Everything sits on one plane; nothing floats or recedes.
3. **Dead transitions.** `showPage()` is an instant display swap — it teleports
   instead of moving.
4. **Monotone palette.** One background, one ink, one accent; no tonal range.
5. **Timid hierarchy.** Tasteful but never raises its voice — no big-against-small
   display moment.

## Phases

### Phase 1 — Material & atmosphere  *(done)*
- Subtle paper-grain / film-grain overlay (SVG `fractalNoise`, low opacity, fixed).
- Ground-vs-page relationship: a warm ambient ground; the framed page floats above
  it on a soft, large, warm-tinted shadow + faint vignette — a *lit object*.
- Expanded tonal palette: distinct paper vs. ground tones, true-ink dark vs. soft
  body gray, one restrained secondary accent.

### Phase 2 — Typographic drama  *(done)*
- One genuine display moment (viewport-scaled type at hero / section openers).
- Tighter scale ramp, measure, leading; deliberate drop caps, pull quotes,
  marginalia to break text walls (esp. About).

### Phase 3 — Motion & continuity  *(done)*
- Real page transitions (cross-fade + subtle translate) on one shared easing curve.
- Staggered scroll-reveal, drawing link underlines, animated active-nav brackets +
  hover underline, depth on hover (button lift, service rows) — all
  `prefers-reduced-motion` safe.

### Phase 4 — Composition & polish
- Hero recomposed from "empty" to "composed" (layered, asymmetric, anchored).
- Disciplined baseline/column grid so asymmetry reads as intentional.
- Favicon, OG/social image, meta, font-loading strategy, replace the base64 hero
  image with an optimized asset, contrast + focus-state accessibility pass.

## Deliberately avoided
Heavy 3D/WebGL, glassmorphism, scroll-jacking, neon gradients, hard brutalism —
all would fight the fine-press register.

## References
- Wannathis — Top Typography Trends 2026
- Fireart Studio — Web Design Trends 2026
- Designmonks — Typography Trends 2026
- Red Rattler Creative — 2026 Web Design Standards
