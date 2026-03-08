# People RADAR • Project Context (GEMINI.md)

## 1. Project Vision
**"Refined Executive Radar"**: A high-end, data-driven dashboard suite designed for HR leadership. The aesthetic focuses on precision, high contrast, and a sophisticated "documentation-as-dashboard" user experience.

## 2. Technical Specifications
- **Framework:** HTML5, Tailwind CSS (v3), Vanilla JavaScript.
- **Typography:** **Plus Jakarta Sans** (Primary), **JetBrains Mono** (Metrics/Logic), `tabular-nums` enforced for all numeric data alignment.
- **Color System:** 
  - **Color Space:** Perceptually uniform OKLCH (mapped to CSS variables).
  - **Dark Mode (Default):** Deep charcoal (`#14171a`), multi-level surface elevations.
  - **Light Mode:** Crisp, airy white-glass aesthetic (`#f8f9fa`).
  - **Accents:** Emerald (Success/Brand), Cyan (Secondary), Orange/Purple/Blue (Functional categories).
- **Theme Engine:** Class-based (`.dark`) with `localStorage` persistence and a header-mounted toggle.

## 3. Key Decisions & Architecture
- **Design Consistency:** Shifted from standard Inter/Hex colors to a unified, premium design system applied across index and framework pages.
- **Navigation:** Transformed the descriptive "Framework Navigator" into a sleek, icon-based sidebar with hover-labels and scrollspy integration.
- **KPI Presentation:** KPIs are now "Executive Tiles" containing strategic purpose, logic models (formulas), and data dependencies.
- **Dashboard Headers:** Standardized to include real-time context (Sunday, March 8, 2026), local weather, and executive profiles.

## 4. Completed Milestones
- [x] **KPI_index_glossy.html**: Full UI/UX overhaul, theme toggle implementation, and metric optimization.
- [x] **kpi_framework.html**: Complete redesign into a modular, searchable executive guide matching the image-driven vision.

## 5. Pending Tasks
- [ ] **Sub-Dashboard Migration:** Update all individual dashboard files (`Dashboard 1...10.html`) to inherit the new design system (CSS variables, Plus Jakarta Sans, and header/sidebar layout).
- [ ] **Chart Standardization:** Ensure all embedded SVG/Script-based charts (Donuts, Heatmaps) across all 10 sub-dashboards use the brand OKLCH tokens.
- [ ] **Inter-page Logic:** Verify navigation links between the index, framework, and sub-dashboards maintain the user's theme preference.
