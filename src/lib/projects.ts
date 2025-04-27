export interface Project {
  id: string;
  title: string;
  role?: string;
  org?: string;
  timeline?: string;
  customers?: string;
  challenge: string;
  solution: string;
  approach: string[];
  impact: string[];
  metrics?: {
    kpi: string;
    before: string;
    after: string;
  }[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  stack?: string[];
  quote?: {
    text: string;
    author: string;
  };
  nextSteps?: string[];
  keyTakeaway?: string;
  team?: string;
  toolkit?: string;
}

export const projects: Project[] = [
  {
    id: 'msk-developer-portal',
    title: 'MSK Developer Portal',
    role: 'Senior UX Engineer / Lead Design Technologist',
    org: 'Memorial Sloan Kettering Cancer Center (MSK)',
    timeline: 'Jan 2024 – Apr 2025',
    customers:
      '700+ MSK software engineers, data scientists & low‑code builders',
    challenge:
      'Engineering resources were fragmented across multiple locations, making it difficult for engineers to find relevant team contacts or discover which tools were available for immediate use. The lack of centralized—or sometimes any—documentation meant that developers often spent unnecessary time searching for solutions that had already been solved elsewhere.',
    solution:
      'A centralized knowledge hub that serves as a gateway to additional information, featuring an easy-to-navigate interface, integrated team references, and an interactive Q&A system. The platform enables multi-team collaboration, allowing engineers to focus on content rather than tooling.',
    approach: [
      'Built with engineers in mind: architected on Next.js (React 19 RSC) to enable full‑stack capabilities while ensuring fast page loads and seamless navigation',
      'Shipped MVP in 6 weeks (3 sprints) with real‑time usage tracking to quickly iterate based on engineer feedback',
      'Created contribution guidelines and live "office hours" for domain teams to publish content',
      'Implemented global search & AI‑powered Q&A for instant answers',
      'Built tool & pattern catalog with live examples and sandboxes for instant implementation',
      'Integrated SSO and distributed tracing for both server and edge functions',
    ],
    impact: [
      'Engineers can now find patterns and documentation in minutes instead of searching across multiple sources.',
      'AI-powered search enables instant answers from all engineering docs.',
      'The portal contributed new components and patterns back to the MSK Design System, benefiting the broader engineering community.',
      'Reduced onboarding time for new engineers by centralizing resources and team contacts.',
      'Enabled engineers to focus on building, not searching for information.',
    ],
    stack: [
      'Next.js 19',
      'React Server Components',
      'TypeScript',
      'Ping Identity SSO',
      'Datadog RUM/APM',
      'AWS Lambda (Node & Python)',
      'Terraform modules',
    ],
    quote: {
      text: 'The portal turned our "maze of information" into a single stop. I can finally ship instead of spelunking for docs.',
      author: 'Staff Engineer, Platform Eng',
    },
    nextSteps: [
      "Expand content to AI/ML & Azure engineering groups (Q2 '25)",
      'Ship plug‑in SDK for custom dashboards',
      'Enhance AI model for federated search; target <1 s response p95',
    ],
    keyTakeaway:
      "By marrying user‑centered research with modern full‑stack React, I transformed a fragmented developer experience into a cohesive platform that accelerates delivery and reduces cognitive load—a concrete example of Amazon's Think Big and Deliver Results.",
    imageUrl: '/devportal_2.webp',
    team: 'Lead prototyper, collaborated with principal full stack engineer, QA, Backend, and content contributors from multiple teams.',
    toolkit: 'React 19, TypeScript, Design System, Markdown, Figma',
  },
  {
    id: 'interactive-data-viz',
    title: 'Interactive Data‑Viz Prototype',
    role: 'Senior UX Engineer',
    timeline: 'Aug 2024 – Dec 2024',
    customers: 'MSK clinical researchers, program admins, & analytics leads',
    challenge:
      'Researchers sifted through gigabyte-scale CSVs and survey exports using Excel or ad-hoc Python scripts. Sharing findings meant pasting static screenshots into decks—a slow, error-prone loop that buried insights and frustrated non-technical collaborators.',
    solution:
      'A browser-based app that streams huge datasets and lets users reshape charts on the fly—so researchers and admins can explore, refine, and present insights without installs or delays.',
    approach: [
      'Lightning Interviews — talked to 12 research fellows & 6 administrators; mapped top analysis tasks (e.g., survival curves, Likert surveys)',
      'Co-Design Workshops — sketched interaction models on FigJam; validated with interactive Figma prototypes (task success 92%)',
      'Tech Spike — chose Vega-Lite for declarative chart grammar + DuckDB/Wasm for in-browser analytics (no PHI leaves the workstation)',
      'Agile Delivery — weekly demos; integrated feedback via GitHub Issues; focused on high-value charts before niceties',
      'Architected the client-side analytics pipeline, optimizing DuckDB queries (p95 < 250 ms on 100k rows)',
      'Built reusable React chart components with accessibility (WCAG AA) baked in',
      'Facilitated design-engineering rituals (story mapping, pair-sketching) that kept the triad in lock-step',
    ],
    impact: [
      'Rapid storytelling: average “upload → final slide” time fell 2 days → 2 hours across pilot groups.',
      'Reduced time to first chart (50k rows) from 18 min to 90 sec (‑92%)',
      'Empowered non-technical stakeholders to uncover and communicate insights fast',
      'One researcher shipped a conference poster in half a day instead of a week',
    ],
    toolkit: 'D3, React, Figma',
    team: 'I was the lead UX Engineer, collaborated with UX Designer, and Full-stack Engineer',
    imageUrl: '/survey.webp',
    demoUrl: 'https://jamesnpro-data-viz.vercel.app',
    nextSteps: [
      'Add cohort comparison templates (Kaplan-Meier, stacked Likert)',
      'Connect to secure S3 buckets via signed URLs for >1 GB datasets',
      'Roll out to 200+ admins across MSK by Q3 ’25; measure adoption via built-in telemetry',
    ],
    keyTakeaway:
      'By combining declarative visuals with edge-powered analytics, we empowered non-technical stakeholders to uncover and communicate insights fast—living the Amazon principles of Customer Obsession and Invent & Simplify.',
  },

  {
    id: 'optimizely-governance',
    title: 'Experimenation Governance Dashboard & Enablement',
    challenge:
      'Optimizely adoption stalled: developers implemented flags, but PMs/designers lacked a clear experimentation workflow—risking impression overages & feature creep.',
    solution:
      'A centralized experimentation governance dashboard that provides real-time visibility into all A/B tests and feature flag usage across the organization. The dashboard tracks how many teams are running experiments, the number and duration of active tests, and offers each team a personalized view to manage their own flags. Governance stakeholders have a comprehensive overview, while individual teams can turn flags on or off directly from their dashboard.',
    approach: [
      'Created a cross‑functional governance board and definition‑of‑done for experiments',
      'Authored lightweight REST wrapper + React hooks for flag evaluation; built OutSystems widget via JS interop',
      'Wrote step‑by‑step guides and live sandboxes; hosted brown‑bag sessions',
    ],
    impact: [
      'Gave leadership and governance teams a single source of truth for all experimentation and feature flag activity.',
      'Empowered individual teams to self-serve and manage their own flags without engineering intervention.',
      'Increased transparency and accountability for experimentation across the organization.',
      'Reduced time to audit and troubleshoot experiments by surfacing ownership and status in one place.',
      'Enabled data-driven decisions on experimentation velocity and adoption.',
    ],
    team: 'Technical lead, collaborating with a UX designer, product manager, and two software engineers.',
    toolkit: 'Design System, JavaScript, Figma',
    metrics: [{ kpi: 'A/B tests / Q', before: '4', after: '12' }],
  },
  {
    id: 'squarelord',
    title: 'SquareLord – Real‑Time Betting Squares Platform',
    challenge:
      'Sports fans struggled to run Super Bowl squares via spreadsheets; no solution handled real‑time score polling & multi‑sport flexibility.',
    solution:
      'SquareLord is a web platform that automates the creation and management of sports squares pools. It provides a seamless experience for organizers and participants, with real-time score updates, automatic winner calculation, and easy sharing. The platform supports NFL, NBA, and other major sporting events, making it simple to run fair and engaging pools online.',
    approach: [
      'Architected Next.js 14 app (App Router) with Supabase RLS backend; WebSockets for live updates',
      'Deployed via Docker → GCP Cloud Run; Terraform‑driven infra',
      'Implemented responsive CSS Grid layout for 10 × 10 board, full keyboard navigation, and high‑contrast theme (WCAG AA)',
    ],
    impact: [
      'Eliminated manual score tracking and winner calculation for organizers.',
      'Enabled real-time updates and notifications for all participants.',
      'Made it easy to create, share, and join pools for any major sporting event.',
      'Improved fairness with random number assignment and transparent rules.',
      'Open-sourced the grid engine, benefiting the developer community.',
    ],
    team: 'Lead architect, with feedback and testing from sports fans and early adopters.',
    toolkit: 'Next.js, Supabase, WebSockets, Docker, GCP Cloud Run',
    imageUrl: '/squarelord.webp',
    demoUrl: 'https://squarelord.com',
  },
];

export const externalProjects = [
  {
    name: 'Real Estate CRM Redesign',
    type: 'Web App',
    url: 'https://www.thinkempire.io',
    description:
      'A modern redesign of a real estate CRM platform for improved usability and workflow.',
  },
  {
    name: 'Design/Engineering Projects',
    type: 'Website',
    url: 'https://labxd.com',
    description: 'A portfolio of design and engineering projects from LabXD.',
  },
  {
    name: 'Color Accessibility Tool',
    type: 'Web App',
    url: 'https://jamesfrontend.vercel.app/color-contrast',
    description:
      'A tool for checking and improving color contrast for accessibility.',
  },
  {
    name: 'Mechanical Ventilator for Learning',
    type: 'Web App',
    url: 'https://wvpioneers.github.io/one/',
    description:
      'A web-based mechanical ventilator simulator for educational purposes.',
  },
  {
    name: 'Typography Tool',
    type: 'Web App',
    url: 'https://jamesfrontend.vercel.app/typography/',
    description: 'A tool for exploring and testing web typography settings.',
  },
  {
    name: 'Survey App Low Fidelity Designs',
    type: 'Figma File',
    url: 'https://www.figma.com/file/o8zWaHSfm1tjgxgbElnbAJ/survey-prototype?node-id=0%3A1&t=7rMfJxPzidVPQJLg-1',
    description: 'Low-fidelity survey app designs in Figma.',
  },
  {
    name: 'Design Token Generator',
    type: 'Figma Plugin',
    url: 'https://www.figma.com/community/plugin/1176582292266618363/motifXD-Design-System-Generator',
    description: 'A Figma plugin for generating and managing design tokens.',
  },
  {
    name: 'Grid Overlay',
    type: 'Chrome Extension',
    url: 'https://chrome.google.com/webstore/detail/msk-grid-overlay/lobppaabcohnidngcdoncoipifpfmpcg',
    description:
      'A Chrome extension for overlaying grids on web pages for design alignment.',
  },
];
