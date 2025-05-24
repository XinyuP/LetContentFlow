# NebulaQueue – Creative Design Specification**Design theme:** Pastel-infused minimalism meets data-driven clarity for next-gen creators**Atmosphere:** Weightless, airy dashboards where soft gradients & playful micro-motions echo a creative studio bathed in morning light---

##1. Foundations (Design System)

### Colour Tokens| Token | Purpose | Hex |
|-------|---------|-----|
| `--nx-bg` | Canvas / page background | #F8F9F9 |
| `--nx-surface` | Card & widget surfaces | #FFFFFF |
| `--nx-ink` | Primary text | #231216 |
| `--nx-accent-pink` | CTAs, active tab | #BB3C73 |
| `--nx-accent-coral` | Success / publish | #EF725F |
| `--nx-accent-mint` | Idea status / links (mirrors cyan star in ref img) | #6EE0D6 |
| `--nx-accent-lime` | Hover-highlight / progress rings | #A4E764 |
| `--nx-neutral-200` | Dividers, inactive icons | #E4EDEC |
| `--nx-neutral-400` | Secondary text | #9CA3AF |
| `--gradient-sunset` | Hero & chart fills | linear-gradient(145deg,#BB3C730%,#EF725F60%,#FFD4A3100%) |

### Typography Stack• Display: `Outfit`600–800• Body: `Inter`400 /500• Mono & data: `IBM Plex Mono`400Sizes:Display1 –72/1.05, Display2 –56/1.1, H1 –40/1.15, H2 –32/1.2, H3 –24/1.25, Body-lg18/1.6, Body16/1.6, Caption14/1.4.

### Sizing & Effects• Spacing scale (Tailwind tokens):0,1,2,4,6,8,12,16,24,32,48,64 (rem = px/4)• Corner radii: `xs`2px, `sm`4px, `md`8px (default), `lg`16px, pill/unlimited.• Shadows: ‑ `elev-1`01px2px rgba(0,0,0,.05) ‑ `elev-2`04px8px rgba(0,0,0,.08) ‑ `elev-3`08px16px rgba(0,0,0,.10) (used in modals)• Special effects: glass-frost (`backdrop-blur-md bg-white/60`), dotted grid background for idea cards, soft parallax clouds echoing reference image.

---

##2. Site-wide Layout•12-column fluid grid (max-width1440),24px gutters desktop;8-col @ ≥768px;4-col @ ≤640px.• Breakpoints: `sm`640, `md`768, `lg`1024, `xl`1280, `2xl`1536.

Motion Guidelines• Scroll-reveal: translateY24px + fade0–100% over400ms cubic-bezier(.16,.84,.44,1).• Parallax: dashboard hero clouds offset15% scroll speed.• Chart liftoff: bars grow from baseline over600ms staggered80ms.• Reduced-motion: all transforms disabled, opacity only.

Header & Footer• Header height64px (desktop) /56px (mobile), sticky, glass-frost on scroll >24px, progress bar scrubbing across top in `--nx-accent-lime`.• Footer3-row: CTA banner, link grid, legal strip. Visible comet animation loops subtly behind CTA on large screens only.

---

##3. Pages & Key Sections| Seq | Block | Notes |
|-----|-------|-------|
| **Dashboard** |
|1 | Goal Hero | Left: headline “Create ✦ Schedule ✦ Grow”, right: today’s schedule ring chart. Background uses `--gradient-sunset` at20% opacity. |
|2 | KPI Tiles | Publish velocity, engagement rate, AI idea score, growth trend. Hover lifts (`elev-2`), active locks colour bar in `--nx-accent-pink`. |
|3 | Quick Composer | Inline rich-text + AI prompt field; “Spark” button triggers slide-in AI suggestions drawer. |
|4 | Activity Stream | Masonry stream with coloured status chips, infinite scroll w/ intersection observer fetch. |
| **Content Pipeline** |
|5 | Kanban Board | Columns: Idea, Draft, Review, Scheduled, Published. Drag ghost follows pointer w/4° tilt & shadow. |
|6 | AI Assist Sidekick | Persistent right rail summarising sentiment, keyword gaps, best-post times. Expand/collapse with chevron micro-bounce. |
| **Idea Vault** |
|7 | Capture Grid | Waterfall of pastel cards with tag pills. Double-click opens modal editor. |
|8 | Cluster View | Force-directed graph; nodes pulse in `--nx-accent-mint` when AI finds related ideas. |
| **Scheduler** |
|9 | Calendar Hero | Month view default; drag-select range evokes translucent `--nx-accent-lime` overlay. |
|10 | Platform Rows | TikTok, YouTube, IG, X. Each row sticky while horizontally scrolling timeline (virtualised for perf). |
| **Analytics** |
|11 | Metric Navigator | Side tablist w/ icons; selected tab accent underline animates150ms width. |
|12 | Deep-dive Canvas | Swappable modules: funnel, heatmap, audience compare. Charts auto-theme to pastel mode. |
| **Settings / Profile** |
|13 | Profile Card | Avatar, handle, role badges. Hover rotates avatar5° w/ spring back. |
|14 | Integration Panel | Toggle list (Notion, Figma, Zapier) — states: connected, connecting…, error, disabled. |
| **Marketing / Auth** |
|15 | Landing Splash | Watermelon-style3D object (mirroring ref img) floats; CTA “Start Creating” in `--nx-accent-coral`. |
|16 | Pricing Tiers | Cards lift on hover, yearly toggle animates with starburst morph. |
|17 | Sign-in / Sign-up | Split screen: pastel illustration left, form right. Magic-link loader shows looping dots sliding. |

---

##4. Reusable Components & Micro-Interactions| Component | Behaviour & States |
|-----------|-------------------|
| Button (primary, secondary, ghost) | Idle: solid `--nx-accent-pink`; Hover: elevate + shade5%; Focus:2px `--nx-accent-mint` ring; Active: translateY1px; Disabled: `--nx-neutral-200` bg, `cursor-not-allowed`; Loading: inline spinner replacing label. |
| Tag Pill | Hover expands12% width; deletable pill shows fade-in × icon. |
| Card | Idle `elev-1`; Hover: `elev-2` + subtle scale1.02; Focus: outline dashed `--nx-accent-lime`; Empty state: dotted border + “Drop ideas here ⚡”. |
| Tooltip | Appears on focus/hover after150ms, scales from95% α0→1; caret auto-flips near viewport edges. |
| Modal | Slide-up32px, dim backdrop0.5; Escape closes; Reduced-motion fades. |
| Progress Ring | SVG dashoffset anim; Completed state fills with `--nx-accent-coral`, emits1.1× pulse once. |
| Drag Ghost |8px blur shadow, label “Move to {column}” updates live via data-attr. |
| Chart Bars | Hover shows value bubble; keyboard navigation with arrow keys highlights bars. |
| Toggle | Spring-loaded knob; On: `--nx-accent-mint`, Off: `--nx-neutral-200`; Disabled greyed. |
| Notification Toast | Enters from bottom-right, slides & fades; Success uses coral, Error uses pink deepened, Info uses mint. Auto dismiss6s, pausable on hover. |

Accessibility notes: All interactive states have WCAG AA contrast, visible focus rings, ARIA roles (`aria-live="polite"` for toasts, `aria-describedBy` for errors).

---

##5. Performance & Accessibility Targets• SVG & Lottie illustrations <80KB each, lazy-loaded.• Font subsets (latin-400/500/700) served via `font-display: swap`.• Tailwind JIT purge ensures CSS <45KB gz.• Lighthouse: Performance ≥95, A11y100, PWA installable.• Images responsive `srcset`, WebP first.• Prefers-reduced-motion: disables transforms & parallax, preserves opacity.• Keyboard trap prevention in all modals; skip-to-content link visible on focus.• Colour contrast ≥4.5:1 text/background.