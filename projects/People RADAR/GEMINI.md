# People RADAR • Project Context (GEMINI.md)

## 1. Project Vision
**"Refined Executive Radar"**: A premium, high-contrast dashboard suite for HR leadership. It provides a seamless transition between high-level executive summaries and deep strategic governance, using a "documentation-as-dashboard" approach.

## 2. Technical Specifications
- **Framework:** HTML5, Tailwind CSS (v3), Vanilla JavaScript.
- **Typography:** **Plus Jakarta Sans** (UI), **JetBrains Mono** (Metrics/Logic), `tabular-nums` enforced.
- **Color System:** 
  - **Color Space:** OKLCH (Perceptually uniform).
  - **Dark Mode:** Deep charcoal (`#14171a`) background with glassmorphic elevations.
  - **Light Mode:** Airy off-white (`#f8f9fa`) with sharp definition.
  - **Accents:** Emerald (Success/Live), Cyan (Planned/Secondary), Orange (Warning/Operational).
- **Interactive Layers:**
  - **Progressive Disclosure:** Hover-based tooltips (`.info-trigger`) revealing full logic models.
  - **Custom Visuals:** SVG-based multi-layered funnels and sparklines.

## 3. Key Decisions & Architecture
- **Stable State:** The project has been rolled back to the **Turn 10/11 Refined Executive** design (1.5rem rounded, OKLCH variables) after a speculative ultra-dark overhaul.
- **Single Source of Truth:** A library of **42 Strategic KPIs** is defined in the Framework and synchronized across all dashboards.
- **KPI Metadata:** Every metric is tagged by type (**Strategic**, **Operational**, **Financial**, **Experience**) and status (**Live on Dashboard** vs. **Planned for Suite**).
- **Global Navigation:** Slim, icon-based sidebar with hover-labels and active-state indicators.
- **Functional Clustering:** Sub-dashboards group metrics into thematic rows (e.g., Sourcing, Velocity, Impact) to handle high data density without clutter.

## 4. Completed Milestones
- [x] **KPI_index_glossy.html (Hub)**: Overhauled with summary counts for 42 KPIs across 10 themes and categoric tagging.
- [x] **kpi_framework.html (Framework)**: Fully searchable strategic guide. Includes Grid/List toggle and real-time text highlighting.
- [x] **Dashboard 1 (Talent Acquisition)**: Fully operational with all 13 TA metrics, AI forecasting, and SVG funnel velocity.

## 5. Pending Tasks
- [ ] **Dashboard 2 Migration (Performance & Mobility)**: Apply functional clustering and "Refined Executive" design to the 3 mobility KPIs.
- [ ] **Dashboards 3–10 Rollout**: Iterative redesign of remaining 8 dashboards using the stable component library.
- [ ] **Theme Persistence Audit**: Re-verify that `localStorage` theme state is correctly propagated across all sub-links.
