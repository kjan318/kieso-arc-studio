# People RADAR • Project Context (GEMINI.md)

## 1. Project Vision
**"Refined Executive Radar"**: A high-end, data-driven dashboard suite designed for HR leadership. The aesthetic focuses on precision, high contrast, and a sophisticated "documentation-as-dashboard" user experience, blending real-time operational data with strategic KPI governance.

## 2. Technical Specifications
- **Framework:** HTML5, Tailwind CSS (v3), Vanilla JavaScript.
- **Typography:** **Plus Jakarta Sans** (Primary), **JetBrains Mono** (Metrics/Logic), `tabular-nums` enforced for all numeric data alignment.
- **Color System:** 
  - **Color Space:** Perceptually uniform OKLCH (mapped to CSS variables).
  - **Dark Mode (Default):** Deep charcoal (`#14171a`), multi-level surface elevations.
  - **Light Mode:** Crisp, airy white-glass aesthetic (`#f8f9fa`).
  - **Accents:** Emerald (Success/Brand), Cyan (Secondary), Orange/Purple/Blue (Functional categories).
- **Theme Engine:** Class-based (`.dark`) with `localStorage` persistence and a header-mounted toggle.
- **Visuals:** Custom SVG-based mini-charts, progress bars, and multi-layered funnels replacing standard charting libraries for a more tactile, premium feel.

## 3. Key Decisions & Architecture
- **Unified Design System:** All pages inherit a shared CSS variable set and typography configuration for seamless cross-dashboard navigation.
- **Global Navigation:** Standardized an icon-based sidebar with hover-labels and active-state indicators across all suite components.
- **Standardized Header:** Includes real-time context (Sunday, March 8, 2026), local weather, executive profile, and theme control.
- **Progressive Disclosure:** Implemented a hover-based popover system (`.info-trigger`) to reveal strategic definitions, logic models (formulas), and data requirements without cluttering the UI.
- **Intelligence Layer:** Integrated predictive AI cards (Forecasts) and real-time status indicators (Bottleneck warnings) to shift from reporting to "Talent Intelligence."

## 4. Completed Milestones
- [x] **KPI_index_glossy.html**: Core UI/UX overhaul, theme toggle implementation, and metric optimization.
- [x] **kpi_framework.html**: Redesign into a modular, searchable executive guide with icon-based navigation.
- [x] **Dashboard 1 (Talent Acquisition)**: Complete overhaul. Integrated AI forecasts, experience ROI (cNPS/mNPS), skills-gap match, and strategic KPI foundations with popover logic.

## 5. Pending Tasks
- [ ] **Sub-Dashboard Migration (Dashboards 2-10)**: Update remaining files to inherit the "Refined Executive" design system and sidebar.
- [ ] **Strategic Alignment**: Extract relevant KPIs from `kpi_framework.html` for each respective dashboard (Performance, Retention, etc.) and implement as hoverable tiles.
- [ ] **Chart Standardization**: Convert standard bar/line charts in remaining dashboards to stylized SVG/CSS mini-charts for consistency.
- [ ] **Inter-page Logic**: Audit all internal links to ensure they are relative and correctly maintain theme state via the shared localStorage key.
