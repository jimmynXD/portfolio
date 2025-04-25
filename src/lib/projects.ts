export interface Project {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string[];
  result: string[];
  metrics?: {
    kpi: string;
    before: string;
    after: string;
  }[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'msk-developer-portal',
    title: 'MSK Developer Portal',
    situation:
      'Multiple MSK teams rebuilt common tooling (auth, feature flags) from scratch. Knowledge lived in scattered Confluence pages, leading to duplicated effort and inconsistent UX.',
    task: 'Prove the value of a centralized, self‑service portal that surfaced reusable patterns, docs, and live code examples, while rallying engineers and leadership around a single source of truth.',
    action: [
      'Conducted 20+ stakeholder interviews to map pain points.',
      'Authored a React‑powered prototype in 4 weeks (Next 13 + MDX), integrating Storybook, Optimizely samples, and federated search (Algolia).',
      'Led weekly design‑crit sessions; captured feedback in Figma component library.',
      'Built CI/CD (GitHub Actions → GCP Cloud Run) with 5‑minute preview URLs to unblock rapid contributions.',
      'Championed docs‑as‑code; onboarded > 40 engineers via workshops.',
    ],
    result: [
      '68% reduction in onboarding time for new teams (survey n = 32).',
      '400+ internal page views/day within 3 months.',
      'Recognized by SVP of Engineering; portal roadmap funded for FY 25 with dedicated headcount.',
    ],
    metrics: [
      { kpi: 'Onboarding time', before: '5 days', after: '1.6 days' },
      { kpi: 'Internal MAU on Portal', before: '0', after: '850+' },
    ],
  },
  {
    id: 'optimizely-governance',
    title: 'Optimizely Governance Board & Low‑Code Enablement',
    situation:
      'Optimizely adoption stalled: developers implemented flags, but PMs/designers lacked a clear experimentation workflow—risking impression overages & feature creep.',
    task: 'Establish governance to align product, design, and engineering; deliver tooling for OutSystems (low‑code) where SDKs were unsupported.',
    action: [
      'Created a cross‑functional governance board and definition‑of‑done for experiments.',
      'Authored lightweight REST wrapper + React hooks for flag evaluation; built OutSystems widget via JS interop.',
      'Wrote step‑by‑step guides and live sandboxes; hosted brown‑bag sessions.',
    ],
    result: [
      '3× increase in A/B tests per quarter; 0% impression overage YTD.',
      'Product/design satisfaction up from 2.1→4.4 (5‑pt Likert).',
      'Framework adopted by 11 squads across two business units.',
    ],
    metrics: [{ kpi: 'A/B tests / Q', before: '4', after: '12' }],
  },
  {
    id: 'squarelord',
    title: 'SquareLord – Real‑Time Betting Squares Platform',
    situation:
      'Friends struggled to run Super Bowl squares via spreadsheets; no solution handled real‑time score polling & multi‑sport flexibility.',
    task: 'Ship an MVP that auto‑locks grids, announces quarter‑winners, and scales to >5k concurrent users.',
    action: [
      'Architected Next.js 14 app (App Router) with Supabase RLS backend; WebSockets for live updates.',
      'Deployed via Docker → GCP Cloud Run; Terraform‑driven infra.',
      'Implemented responsive CSS Grid layout for 10 × 10 board, full keyboard navigation, and high‑contrast theme (WCAG AA).',
    ],
    result: [
      'Handled 1.2M API calls on game day with 0 downtime.',
      'Avg. session time 17 min; 27% conversion to repeat pools.',
      'Open‑sourced grid engine; 180⭐ on GitHub within first month.',
    ],
    demoUrl: 'https://squarelord.com',
  },
  {
    id: 'frontend-performance',
    title: 'Frontend Performance & DX Modernization at MSK',
    situation:
      'Legacy Webpack builds >8 min, slowing experiment cycles; ESLint configs duplicated across 40 repos.',
    task: 'Modernize toolchain to Vite + pnpm monorepo, flatten ESLint, and introduce automated perf budgets.',
    action: [
      'Piloted Vite migration on high‑traffic app; authored codemods to swap process/env polyfills.',
      'Wrote flat ESLint config with project refs; published as @mskcc/eslint‑config.',
      'Added Lighthouse‑CI & bundle‑size guards in GitHub Actions.',
    ],
    result: [
      'Cold‑start dev server time: 8 min → 12 s.',
      '32% smaller JS bundles (tree‑shaking + code‑split).',
      '15 repos migrated in 6 weeks; pattern adopted org‑wide as default template.',
    ],
    metrics: [{ kpi: 'Build time', before: '8 min', after: '12 s' }],
  },
  {
    id: 'rapid-start-toolchain',
    title: 'Rapid‑Start Toolchain Packages (npm)',
    situation:
      'Spinning up new MSK frontend repos required manual setup of TypeScript, ESLint, Jest, and CI, averaging two days per project and producing inconsistent configs across 40+ teams.',
    task: 'Provide an opinionated, one‑command toolkit that standardizes the stack and slashes bootstrap time without sacrificing flexibility.',
    action: [
      'Authored a suite of packages published under npmjs.com/~jamesmsk',
      'Integrated semantic‑release + Husky pre‑commit hooks; shipped typed API wrappers with OpenAPI generator.',
      'Wrote zero‑to‑prod guide and recorded 10‑min Loom walkthrough; hosted live coding session for 80 engineers.',
      'Added automated changelogs and version‑badge bot to broadcast updates.',
    ],
    result: [
      'New repo setup time: 2 days → 30 min (developer survey n = 45).',
      '60+ internal repos & 9 external OSS projects adopted within six months.',
      'Packages exceed 230k weekly downloads (internal Verdaccio + public npm), with <1% open issues per download.',
      'Recognized with MSK "DevEx Accelerator" award 2025.',
    ],
    demoUrl: 'https://www.npmjs.com/~jamesmsk',
  },
];
