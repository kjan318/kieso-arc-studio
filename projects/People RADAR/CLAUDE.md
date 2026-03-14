# People RADAR — Project CLAUDE.md

## Project Identity
- Static HTML portfolio SaaS demo — NO build system, NO framework
- Stack: Single-file HTML + Tailwind CSS CDN + Vanilla JS
- 12 HTML files in one flat directory, share one `design-system.css`
- Deployed via Netlify (static)

---

## Architecture Groups

### Group A (Token-native)
Files: `kpi_framework.html`, `KPI_index_glossy.html`, `Dashboard 1 Talent Acquisition Excellence.html`
- Uses `.glass-panel` card class
- Uses `var(--brand-*)` CSS custom properties directly in Tailwind config
- Font: Plus Jakarta Sans

### Group B (Override layer)
Files: `Dashboard 2–10` (9 files)
- Uses `.glossy-card` card class
- Dark mode applied via `class="dark"` on `<body>`
- Uses Chart.js — inject dark Chart.js global defaults per file
- Requires `!important` overrides in design-system.css for all Tailwind utility classes

---

## Design System Rules

### Single Source of Truth
- ALL shared styles live in `design-system.css` — never duplicate in local `<style>`
- Local `<style>` blocks OVERRIDE linked stylesheets (CSS load order conflict)
- MUST remove conflicting local rules when adding equivalent rules to design-system.css

### Color Tokens (Non-negotiable)
- Primary accent: `#2DD4D4` (cyan)
- Dark bg: `#0D1117` | Card: `#161B22` | Card light: `#1E242C`
- Border: `#30363D` | Text: `#E6EDF3` | Muted: `#8B949E`
- Hover text (both modes): `#062020`

### Hover Effect Standard
- Cards MUST use FULL GRADIENT FILL on hover — NOT just border glow
- Dark mode fill: `linear-gradient(135deg, #2DD4D4 0%, #0E8B8B 55%, #065C5C 100%)`
- Light mode fill: `linear-gradient(135deg, #E0FFFE 0%, #A8EDE8 55%, #7DD8D0 100%)`
- All child text on hover: `color: #062020 !important`
- Transform: `translateY(-4px) scale(1.005)`

### Scrollbar Standard
- ALWAYS use design-system.css cyan gradient scrollbar: `linear-gradient(to bottom, #2DD4D4, #1A9090)`
- Remove any local `<style>` scrollbar rule that overrides with `var(--brand-border)` or gray

### Tailwind Dark Overrides
- ALWAYS combine `.dark .text-gray-*` AND `.dark .text-slate-*` in the same selector rule
- ALWAYS combine `.dark .bg-gray-*` AND `.dark .bg-slate-*` in the same selector rule
- Use `!important` on ALL Tailwind utility overrides under `.dark` context

---

## Coding Style

### CSS
- Use CSS custom properties (`var(--brand-*)`) over hardcoded hex where a token exists
- Use `!important` ONLY for Tailwind override blocks (Group B) — never in component styles
- Comment section blocks with `/* === Section Name === */` format
- Dark mode hover rules MUST be namespaced: `.dark .component:hover`

### HTML
- Tailwind CDN with `darkMode: 'class'` in the inline config block
- Group B: `<body class="... dark">` for dark-first
- `<link href="design-system.css">` BEFORE any local `<style>` block
- Semantic IDs for JS hooks (e.g. `id="sidebarNav"`, `id="frameworkContent"`)

### JavaScript
- Vanilla JS only — no frameworks, no npm
- Chart.js global dark defaults injection pattern (per Group B file, in `<script>` at bottom):
  ```js
  Chart.defaults.color = '#8B949E';
  Chart.defaults.borderColor = '#30363D';
  ```

---

## Design Workflow

### Screenshot-Driven
- NEVER invent new visual styles — all design changes must reference a provided screenshot
- When a screenshot is provided, replicate it faithfully (忠實複製)
- Light mode = same design principle, lighter palette version of dark design

### Multi-File Changes Protocol
1. Produce an execution plan with clear waves before touching any files
2. Identify which Architecture Group each target file belongs to
3. Check for CSS load order conflicts before adding rules to design-system.css
4. Wave 1: Update design-system.css | Wave 2: Remove conflicting local rules from HTML files

### Parallel Agent Usage
- Use parallel agents for simultaneous multi-file edits (D2–D10)
- Each agent scoped to specific file(s) with explicit ADD / REMOVE instructions

---

## Prohibited Actions

- NEVER use border-glow-only hover — always use full gradient fill
- NEVER add `.kpi-card:hover` / `.glass-panel:hover` / `.glossy-card:hover` to local `<style>` — design-system.css ONLY
- NEVER omit `!important` on Tailwind utility overrides in Group B dark context
- NEVER use `text-gray-*` override without also covering `text-slate-*`
- NEVER commit or deploy without showing diff first
- NEVER modify scrollbar to gray/border-color variant — always cyan gradient
