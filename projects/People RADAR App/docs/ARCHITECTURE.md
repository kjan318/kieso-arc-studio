# People RADAR — Full-Stack Architecture & Development Plan

**Stack:** Next.js 14 (App Router) · Tailwind CSS · Supabase (PostgreSQL + Auth) · Python ETL · Netlify

---

## 1. Project Structure

```
people-radar/
├── src/
│   ├── app/
│   │   ├── (marketing)/          # Public-facing pages (no auth)
│   │   │   └── page.tsx          # Landing page
│   │   ├── (auth)/               # Auth pages (unauthenticated layout)
│   │   │   ├── login/page.tsx
│   │   │   └── signup/page.tsx
│   │   ├── (dashboard)/          # Protected dashboard routes
│   │   │   ├── layout.tsx        # Shell: sidebar + topbar + user context
│   │   │   ├── page.tsx          # Executive Summary (unified KPI overview)
│   │   │   ├── talent-acquisition/
│   │   │   │   └── page.tsx
│   │   │   ├── performance/
│   │   │   │   └── page.tsx
│   │   │   ├── retention/
│   │   │   │   └── page.tsx
│   │   │   └── [future-domain]/  # Slots for 6 additional domains
│   │   ├── api/
│   │   │   └── auth/callback/    # Supabase OAuth callback
│   │   ├── layout.tsx            # Root layout (fonts, providers)
│   │   └── middleware.ts         # Route protection + session refresh
│   ├── components/
│   │   ├── ui/                   # Primitive components (button, card, badge, etc.)
│   │   ├── charts/               # Recharts wrappers (bar, line, funnel, scatter)
│   │   ├── kpi/                  # KPI card with value, delta, sparkline, benchmark
│   │   ├── dashboard/            # Domain-level section components
│   │   └── layout/               # Sidebar, topbar, breadcrumbs
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts         # Browser Supabase client
│   │   │   ├── server.ts         # Server-side Supabase client (cookies)
│   │   │   └── middleware.ts     # Session refresh helper
│   │   ├── data/
│   │   │   └── mock/             # Mock data shaped exactly like rpt_* tables
│   │   ├── hooks/                # useUser, useDepartmentFilter, useKPIData
│   │   └── utils/                # formatters, delta calculators
│   └── types/
│       ├── database.types.ts     # Supabase auto-generated types
│       └── dashboard.types.ts    # App-level interfaces
├── etl/                          # Python ETL pipelines
│   ├── requirements.txt
│   ├── .env.example
│   ├── config/
│   │   └── settings.py           # DB connection, schedule config
│   ├── pipelines/
│   │   ├── talent_acquisition.py
│   │   ├── performance.py
│   │   └── retention.py
│   ├── utils/
│   │   ├── db.py                 # SQLAlchemy engine + upsert helpers
│   │   └── metrics.py            # Shared KPI calculation functions
│   └── seed/
│       └── generate_mock_data.py # Faker-based synthetic HR data generator
├── supabase/
│   ├── migrations/               # Versioned SQL migration files
│   │   ├── 001_source_tables.sql
│   │   ├── 002_reporting_tables.sql
│   │   ├── 003_rls_policies.sql
│   │   └── 004_demo_seed.sql
│   └── functions/                # Edge Functions (optional: ETL triggers)
├── docs/
│   ├── ARCHITECTURE.md           # This file
│   ├── ETL_GUIDE.md
│   └── RLS_STRATEGY.md
└── public/
```

---

## 2. Database Architecture

### Layer 1 — Source Tables (Raw HR Data)

These tables hold normalized, row-level HR records. The ETL reads from these.

| Table | Purpose |
|---|---|
| `departments` | Org structure, hierarchy |
| `employees` | Master employee records (status, dept, tenure, demographics) |
| `job_postings` | Open roles with req dates and hiring manager |
| `job_applications` | Per-candidate pipeline stages with timestamps |
| `performance_reviews` | Cycle results (rating, reviewer, date) |
| `internal_moves` | Promotions, lateral moves, transfers |
| `engagement_surveys` | eNPS responses + pulse survey data |
| `compensation` | Salary bands, actuals, pay equity flags |

### Layer 2 — Reporting Tables (Pre-calculated by ETL)

These are what Next.js queries — denormalized, aggregated, fast. All have `department_id` for RLS.

#### Talent Acquisition
```sql
rpt_talent_acquisition_kpis
  (period, department_id, time_to_fill_days, cost_per_hire, offer_acceptance_rate,
   quality_of_hire_score, source_diversity_index, created_at)

rpt_sourcing_funnel
  (period, department_id, source_channel, applied, screened, interviewed,
   offered, hired, conversion_rate, created_at)

rpt_diversity_hiring
  (period, department_id, gender_ratio, ethnicity_breakdown,
   diverse_slate_compliance_pct, created_at)
```

#### Performance & Internal Mobility
```sql
rpt_performance_kpis
  (period, department_id, avg_performance_score, high_performer_pct,
   low_performer_pct, calibration_completion_rate, created_at)

rpt_internal_mobility
  (period, department_id, internal_fill_rate, promotion_rate,
   avg_time_to_promotion_months, regrettable_exits_pct, created_at)

rpt_skill_gap
  (period, department_id, skill_category, demand_score, supply_score,
   gap_index, created_at)
```

#### Retention & Engagement
```sql
rpt_retention_kpis
  (period, department_id, overall_turnover_rate, voluntary_turnover_rate,
   high_performer_turnover_rate, enps_score, avg_tenure_months,
   flight_risk_count, created_at)

rpt_engagement_trends
  (period, department_id, engagement_score, participation_rate,
   manager_effectiveness_score, created_at)

rpt_attrition_analysis
  (period, department_id, tenure_cohort, age_band, gender, exit_reason,
   headcount, exits, attrition_rate, created_at)
```

#### Unified Executive Summary
```sql
rpt_executive_summary
  (period, department_id, total_headcount, active_openings,
   time_to_fill_days, offer_acceptance_rate, avg_performance_score,
   high_performer_pct, voluntary_turnover_rate, enps_score,
   flight_risk_count, cost_per_hire, created_at)
```

---

## 3. Python ETL Architecture

Each pipeline follows the **Extract → Transform → Load** pattern with upsert semantics.

```python
# pipelines/talent_acquisition.py — pattern repeated for all 3 domains

def extract(engine, period: str, department_id: int) -> pd.DataFrame:
    # Pull from source tables for the given period window

def transform(raw_df: pd.DataFrame) -> pd.DataFrame:
    # Calculate KPIs:
    # - time_to_fill = avg(hired_date - req_open_date) per dept/period
    # - cost_per_hire = total_recruiting_spend / hires
    # - offer_acceptance_rate = offers_accepted / offers_extended
    # - quality_of_hire = avg 90-day performance score of new hires

def load(engine, transformed_df: pd.DataFrame, table: str):
    # Upsert into rpt_* table (conflict on period + department_id)

def run_pipeline(period: str):
    engine = get_engine()
    for dept in get_all_departments(engine):
        raw = extract(engine, period, dept.id)
        clean = transform(raw)
        load(engine, clean, 'rpt_talent_acquisition_kpis')
```

**Scheduling:** Run via cron job or GitHub Actions on a nightly schedule.
**Seed script:** `seed/generate_mock_data.py` uses Faker to generate 2 years of realistic HR data for 8 departments (~500 employees) to populate source tables.

---

## 4. Row-Level Security (RLS) Strategy

Three user roles stored as JWT claims via Supabase custom `app_metadata`:

```json
// executive
{ "role": "executive", "department_ids": ["*"] }

// hr_bp
{ "role": "hr_bp", "department_ids": [3, 7] }

// demo_guest
{ "role": "demo_guest", "department_ids": [99] }
```

**RLS Policy pattern (applied to ALL rpt_* tables):**

```sql
CREATE POLICY "department_access" ON rpt_talent_acquisition_kpis
  FOR SELECT USING (
    -- Executives see all
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'executive'
    OR
    -- HR BPs see their departments
    department_id = ANY(
      ARRAY(
        SELECT jsonb_array_elements_text(
          auth.jwt() -> 'app_metadata' -> 'department_ids'
        )::int
      )
    )
  );
```

**Demo Guest:** A dedicated department_id (99) contains anonymized, pre-seeded data. The guest user's JWT is hardcoded to `department_ids: [99]`. This allows full dashboard exploration without exposing any real data.

---

## 5. Next.js Architecture

### Auth & Middleware

```typescript
// middleware.ts — runs on every request to (dashboard)/*
// 1. Refresh Supabase session via cookies
// 2. Redirect unauthenticated users to /login
// 3. Inject user role into request headers for Server Components
```

### Data Fetching Pattern

**Phase 3 (Mock):** Server Components import from `lib/data/mock/` — same shape as DB tables.

**Phase 4 (Live):** Server Components swap to `lib/supabase/server.ts` queries. No client-side data fetching for sensitive data — always server-side via Supabase server client which respects RLS automatically.

```typescript
// Example Server Component pattern
export default async function TalentAcquisitionPage() {
  const supabase = createServerClient() // uses user's session cookie → RLS enforced
  const { data: kpis } = await supabase
    .from('rpt_talent_acquisition_kpis')
    .select('*')
    .eq('period', getCurrentPeriod())

  return <TalentAcquisitionDashboard kpis={kpis} />
}
```

### KPI Card Component Interface

```typescript
interface KPICardProps {
  title: string
  value: string | number
  unit?: string
  delta: number           // % change vs prior period
  deltaDirection: 'up' | 'down'
  deltaPositive: boolean  // is "up" good or bad for this metric?
  benchmark?: number      // industry benchmark line
  sparklineData?: number[] // last 6 periods
  status: 'good' | 'warning' | 'critical'
  recommendedAction?: string
}
```

---

## 6. MVP Dashboard Specifications

### Dashboard 1 — Talent Acquisition Excellence
**KPIs:** Time to Fill · Cost Per Hire · Offer Acceptance Rate · Quality of Hire · Source Diversity Index
**Charts:** Sourcing funnel (bar) · Channel performance (horizontal bar) · Time-to-fill trend (line) · Diversity hiring breakdown (stacked bar)
**Actions:** Dynamic recommendations based on threshold breaches

### Dashboard 2 — Performance & Internal Mobility
**KPIs:** High Performer % · Performance Distribution · Internal Fill Rate · Promotion Rate · Regrettable Exits %
**Charts:** Performance bell curve (histogram) · 9-box talent grid (scatter) · Mobility flow (sankey/alluvial) · Calibration completion (gauge)
**Actions:** Sponsorship program triggers, manager coaching flags

### Dashboard 3 — Employee Retention & Engagement
**KPIs:** Voluntary Turnover Rate · High-Performer Turnover · eNPS · Flight Risk Count · Avg Tenure
**Charts:** Attrition cohort heatmap · eNPS trend (line) · Engagement drivers (radar) · Exit reason breakdown (donut)
**Actions:** Pay equity audit trigger, retention bonus recommendations

### Executive Summary
**Purpose:** Single-pane view of all 3 domains — top 2 KPIs each + health status indicators
**Navigation:** Click-through to full domain dashboard

---

## 7. Six-Phase Execution Plan

### Phase 1 — Foundation & Schema (Current Phase)
- [ ] Initialize Next.js 14 project (`app` router, TypeScript, Tailwind)
- [ ] Install: shadcn/ui, recharts, @supabase/supabase-js, @supabase/ssr
- [ ] Create Supabase project, run migrations 001–004
- [ ] Build Python ETL scaffolding + Faker seed script
- [ ] Run seed → populate source tables → run ETL → verify rpt_* tables have data

### Phase 2 — UI/UX Foundation (Awaiting Screenshots)
- [ ] Build dashboard shell layout (sidebar, topbar, responsive)
- [ ] Build KPICard component system
- [ ] Build all chart wrapper components
- [ ] Establish design tokens (color palette, typography, spacing)
- [ ] Dark mode support via Tailwind `dark:` classes

### Phase 3 — Interactive Mock Dashboards
- [ ] All 3 domain dashboards wired to mock data
- [ ] Executive Summary page
- [ ] Department filter selector (simulates RLS scoping)
- [ ] Period selector (current quarter / prior quarter / trailing 12m)
- [ ] Recommended Actions panel per dashboard

### Phase 4 — Supabase Integration + RLS
- [ ] Auth flow: login, signup, password reset, session persistence
- [ ] Next.js middleware for protected routes
- [ ] Replace all mock data with server-side Supabase queries
- [ ] Implement + test all RLS policies
- [ ] Role-based UI: hide/show features based on role

### Phase 5 — Landing Page + Demo Mode
- [ ] High-converting public landing page (hero, features, screenshots)
- [ ] Demo Guest user pre-configured in Supabase
- [ ] "Explore Demo" CTA on landing page → one-click demo access
- [ ] Demo banner/watermark inside dashboard for guest sessions
- [ ] Portfolio metadata: tech stack callouts, GitHub link

### Phase 6 — Testing & Deployment
- [ ] Test RLS: verify hr_bp cannot access other departments' data
- [ ] Test demo mode: verify guest sees only anonymized data
- [ ] Lighthouse audit → performance optimizations
- [ ] `netlify.toml` with build config + environment variables
- [ ] Deploy to Netlify + configure Supabase production secrets
- [ ] Custom domain + SSL

---

## 8. Key Design Decisions & Rationale

| Decision | Rationale |
|---|---|
| Pre-calculated rpt_* tables | Frontend stays fast; complex window functions run in ETL not on request |
| Server Components for data fetching | RLS enforced server-side; no sensitive data in client bundle |
| JWT app_metadata for roles | Supabase native; roles available in RLS policies without extra DB lookup |
| `department_ids` array in JWT | Single JWT claim supports multi-department HR BPs without role explosion |
| Demo dept_id = 99 | Isolated, never-conflicting with real data; survives ETL reruns safely |
| Recharts over Chart.js | Better React integration, TypeScript-first, composable |
| shadcn/ui | Unstyled primitives owned in the codebase; easy Tailwind customization |
| Netlify for frontend | Seamless Next.js deployment, edge functions, easy env var management |

---

## 9. Future Domain Slots (Post-MVP)

The sidebar navigation will have placeholder slots for 6 additional domains:
1. Compensation & Pay Equity
2. Learning & Development
3. Workforce Planning & Headcount
4. Diversity, Equity & Inclusion
5. Manager Effectiveness
6. Organizational Health

Each follows identical rpt_* table patterns, ETL pipeline structure, and RLS policies — adding a domain is a repeatable playbook.

---

*Next step: Provide UI screenshots and Dashboard 1 (Talent Acquisition) detailed requirements to begin Phase 1 → Phase 2 execution.*
