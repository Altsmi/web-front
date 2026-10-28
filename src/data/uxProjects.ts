import type { Glance, Overview, Phase } from '@/data/study'

export interface Project {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  image: string
  alt: string
  featured?: boolean
  link?: string
  role: string
  timeline: string
  tools: string[]
  type?: string
  overview?: Overview
  glance?: Glance[]
  phases: Phase[]
}

export const projectPath = (p: Project) => p.link ?? `/work/ux-ui/${p.slug}`

export const uxProjects: Project[] = [
  {
    slug: 'ninox',
    title: 'Ninox',
    summary:
      'A responsive invoicing platform: instant mobile invoicing for field contractors and a cash-flow hub for business owners.',
    tags: ['Research', 'Wireframing', 'Prototyping', 'Usability testing'],
    year: '2026',
    image: '/project_img/invoice/Presentation_02.jpg',
    alt: 'Ninox landing page on desktop and phone',
    featured: true,
    role: 'Lead Product & UX/UI Designer',
    timeline: '4 weeks',
    tools: ['Figma', 'FigJam', 'Maze'],
    type: 'Self-initiated concept project',

    overview: {
      challenge:
        'Let contractors invoice in under 2 minutes, and give business owners a clear view of cash flow.',
      solution:
        'Two flows: an instant guest invoice on mobile, and a full receivables hub on desktop.',
      result: '60% saved an account after sending their first invoice (3 of 5).',
    },

    glance: [
      { value: '60%', label: 'Saved an account' },
      { value: '1m 42s', label: 'Mobile dispatch' },
      { value: '14s', label: 'To find overdue' },
      { value: '10', label: 'Testers' },
    ],

    phases: [
      // ---------- 1 Research ----------
      {
        id: 'research',
        number: 1,
        title: 'Research',
        takeaway: 'No competitor combined guest invoicing with a cash-flow hub.',
        points: [
          '8 people interviewed',
          '2 personas: field contractor and business owner',
          '3 goals: task speed, field ergonomics, cash-flow clarity',
        ],
        visual: [
          {
            src: '/project_img/invoice/Persona_1.jpg',
            alt: 'Persona: Marcus Vance, independent field contractor',
          },
        ],
        details: [
          {
            type: 'facts',
            heading: 'Design brief',
            image: {
              src: '/project_img/invoice/Presentation_01.jpg',
              alt: 'Ninox mockups on desktop and phone',
            },
            items: [
              {
                label: 'Design challenge',
                text: 'How might we design a responsive invoicing platform that allows on-the-go trade contractors to create and dispatch invoices in under two minutes, while providing desktop-first small business owners with deep visibility into cash flow and outstanding balances?',
              },
              {
                label: 'Solution',
                text: 'Dual-funnel information architecture: built a zero-friction, unauthenticated “Instant Invoice” flow for quick mobile dispatches, paired with a complete, authenticated SaaS hub for managing recurring billing and client ledgers.',
              },
              {
                label: 'Action taken',
                text: 'Conducted qualitative discovery sessions and persona synthesis to pinpoint workflow friction across field and desk environments, restructured information architecture through iterative wireframing to validate a dual-funnel guest versus SaaS flow, and executed usability testing to optimize data density, legibility, and task completion speed.',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Persona',
            body: [
              'This section introduces user personas developed from qualitative discovery sessions, highlighting the operational divide in trade services. These personas anchor the design decisions by capturing the distinct workflows of users: independent field technicians who need rapid, on-site mobile dispatch, and business owners who manage cash flow and overdue receivables from a desktop office.',
            ],
          },
          {
            type: 'stats',
            heading: 'Discovery method',
            items: [
              { value: '8', label: 'participants' },
              { value: 'Business owners', label: 'who I spoke to' },
              { value: 'Week 1', label: 'when' },
            ],
            note: 'Recurring themes: field invoicing friction · payroll cash-flow anxiety',
          },
          {
            type: 'images',
            columns: 2,
            items: [
              {
                src: '/project_img/invoice/Persona_1.jpg',
                alt: 'Persona 1: Marcus Vance, independent field contractor',
              }, // check
              {
                src: '/project_img/invoice/Persona_3.jpg',
                alt: 'Persona 2: David Chen, small business owner',
              }, // check
            ],
          },
          {
            type: 'text',
            heading: 'Competitive analysis',
            body: [
              'Conducted a targeted competitive analysis to benchmark against leading invoicing tools, focusing on onboarding friction, mobile ergonomics, and financial tracking clarity.',
            ],
          },
          {
            type: 'table',
            columns: [
              'Tool',
              'Steps before first invoice',
              'Mobile-first?',
              'Cash-flow view',
              'Gap',
            ],
            rows: [
              [
                'FreshBooks',
                '5+ steps (sign-up, email verify, business setup)',
                'No (desktop-first)',
                'Yes',
                'High onboarding friction; no unauthenticated field bypass for fast on-site billing',
              ],
              [
                'Wave',
                '4+ steps (account registration, tax classification)',
                'No (desktop-centric)',
                'Yes',
                'Heavy accounting setup; cumbersome navigation and poor ergonomics on mobile web',
              ],
              [
                'Invoice Simple',
                '2 steps (fast quick-start)',
                'Yes',
                'No (flat invoice list)',
                'Lacks cash-flow visibility, overdue aging alerts, and batch payment recovery tools',
              ],
              [
                'Ninox',
                '0 steps (zero-friction guest bypass)',
                'Yes',
                'Yes',
                'Fills the gap (dual-funnel: instant mobile send + desktop receivables hub)',
              ],
            ],
            highlightRow: 3,
            note: 'Takeaway: none of the tools I reviewed combined instant, unauthenticated guest invoicing with an at-a-glance receivables triage hub.',
          },
          {
            type: 'facts',
            heading: 'Design goals',
            intro:
              'Using this research, we identified three critical goals required for the solution to succeed:',
            items: [
              {
                label: '1. Frictionless task speed',
                text: 'Users prioritize rapid, low-friction document creation over deep accounting configurations, indicating an urgent need for an unauthenticated, instant-dispatch workflow on mobile web.',
              },
              {
                label: '2. Accessible field ergonomics',
                text: 'Adhering to WCAG AAA contrast ratios and 48px touch targets prevents data-entry errors when trade contractors input numbers under direct outdoor sunlight.',
              },
              {
                label: '3. High-level cash flow clarity',
                text: 'Business owners demand immediate visibility into outstanding versus collected revenue, emphasizing the need for at-a-glance receivables snapshot cards and automated payment status tracking.',
              },
            ],
          },
        ],
      },

      // ---------- 2 Define ----------
      {
        id: 'define',
        number: 2,
        title: 'Define',
        takeaway: 'Three insights became three design principles.',
        points: [
          'Value before sign-up',
          'Thumb-first, high contrast',
          'Summary first, details second',
        ],
        visual: [
          {
            src: '/project_img/invoice/flow.jpg',
            alt: 'User flow: guest flow on mobile and hub flow on desktop',
          },
        ],
        details: [
          {
            type: 'table',
            heading: 'From research to design principles',
            intro: 'Three insights from research shaped how I framed the problem.',
            columns: ['Insight', 'How might we', 'Principle'],
            rows: [
              [
                'Users prefer rapid document creation over deep accounting setup',
                'How might we let a contractor send an invoice from the job site in under two minutes, with no account?',
                'Value before sign-up',
              ],
              [
                'Field entry errors happen under glare with small targets',
                'How might we make number entry accurate one-handed in direct sunlight?',
                'Thumb-first, high contrast',
              ],
              [
                'Owners can’t see outstanding vs. collected revenue without digging',
                'How might we show cash-flow health at a glance and let owners act on late invoices in one click?',
                'Summary first, details second',
              ],
            ],
            note: 'These principles shaped the dual-funnel flow below.',
          },
          {
            type: 'text',
            heading: 'User flow architecture',
            body: [
              'To eliminate friction between on-site urgency and administrative tracking, I mapped a dual-funnel architecture decoupling instant task completion from account management. Field users get an unauthenticated quick-dispatch flow, while office operators access a complete cash-flow management hub.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/project_img/invoice/flow.jpg',
                alt: 'User flow diagram: guest flow on mobile and SaaS hub on desktop',
              },
            ],
          },
          {
            type: 'table',
            columns: ['Stage', 'Guest flow: mobile web (Marcus)', 'SaaS hub: desktop web (David)'],
            rows: [
              [
                'User intent',
                'Send a quick job bill in under 2 minutes.',
                'Review weekly cash flow and payroll readiness.',
              ],
              [
                'Authentication',
                'Zero-friction bypass (no password or signup).',
                'Secure business login.',
              ],
              [
                'Primary action',
                'Single-column form with pre-saved line items.',
                'Multi-column table with status filters and metrics.',
              ],
              [
                'Completion',
                'Direct SMS or email dispatch.',
                'Automated batch reminders and ledger updates.',
              ],
            ],
          },
        ],
      },

      // ---------- 3 Ideate & wireframes ----------
      {
        id: 'ideate',
        number: 3,
        title: 'Ideate & wireframes',
        takeaway: 'Concept 3 won: call to action, preview and proof in the first screen.',
        points: [
          '3 landing concepts compared',
          'Mobile step 2 combined from 3 variants',
          'Desktop hub built around KPI cards and a ledger',
        ],
        visual: [
          {
            src: '/project_img/invoice/digital_01.jpg',
            alt: 'Digital wireframe of the landing page',
          },
        ],
        details: [
          {
            type: 'text',
            heading: '01. The dual-funnel gateway',
            body: [
              'The layout was architected around a dual-funnel strategy: desktop business owners receive clear visual proof, feature deep-dives, and account access, while time-crunched mobile contractors get an instant, above-the-fold entry point to start billing without mandatory sign-up walls.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/project_img/invoice/paper_landing.jpg',
                alt: 'Paper wireframes of three landing page concepts',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Three landing concepts',
            items: [
              {
                label: 'Concept 1',
                text: 'Single-column centered layout. Clean, but left excessive dead space on desktop and pushed social proof below the fold.',
              },
              {
                label: 'Concept 2',
                text: '50/50 split pairing copy on the left with a product preview frame on the right. Balanced messaging with visual demonstration.',
              },
              {
                label: 'Concept 3',
                text: 'Refined hero layout pairing high-contrast CTAs with an expanded preview container, anchored by a 3-pillar metric bar.',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Decision: landing concept',
            body: [
              'I moved forward with Concept 3 because it keeps the primary CTA, the product preview, and the proof metrics in the first screen. Concept 1 left dead space and Concept 2 pushed proof below the fold.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/project_img/invoice/digital_01.jpg',
                alt: 'Digital wireframe of the landing page',
              },
            ],
          },
          {
            type: 'text',
            heading: '02. Instant invoicing (Marcus Vance persona flow)',
            body: [
              'Because Marcus Vance operates almost exclusively from his service van or job site, this user flow prioritizes the mobile viewport. The focus is entirely on removing field friction: bypassing registration gates and providing large, thumb-accessible touch targets so contractors can bill and get paid before leaving the client.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/project_img/invoice/paper_02.jpg',
                alt: 'Paper wireframes of the instant invoicing flow',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Decision: mobile step 2',
            body: [
              'Instead of selecting a single layout, I synthesized a hybrid design: borrowing the currency selector and one-tap preset buttons (Fixed vs. Hourly) from Variant 1, the clean stacked line-item structure from Variants 2 and 3, and anchoring the live summary bar and action button to the bottom thumb zone. This hybrid eliminated manual typing friction under outdoor glare while keeping running job totals immediately visible.',
            ],
          },
          {
            type: 'facts',
            heading: 'Approach',
            items: [
              {
                label: 'Physical invoice anatomy informs the digital stepper',
                text: 'Traditional paper bills follow a universally understood layout: header information at the top, itemized rates in the center, and totals with payment terms at the base. Translating this physical structure into a linear three-step mobile form leverages familiar mental models, allowing contractors to complete bills rapidly without needing to learn a new interface.',
              },
              {
                label: 'Responsive adaptation beyond screen scaling',
                text: 'Responsive design for field operations is ergonomic, not just visual. Instead of shrinking desktop data tables into dense, hard-to-read mobile spreadsheets, the mobile layout adapts complex calculations into thumb-friendly 48px touch targets, quick-add modal triggers, and an anchored thumb-zone action bar engineered for one-handed use outdoors.',
              },
            ],
          },
          {
            type: 'text',
            heading: '03. Financial hub & receivables (David Chen persona flow)',
            body: [
              'Unlike Marcus’s on-site mobile flow, David Chen manages operations and payroll from a desktop office. This flow prioritizes desktop data density, replacing linear mobile steppers with high-level KPI cards and a filterable receivables ledger to eliminate cash-flow surprises before Friday payroll.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/project_img/invoice/paper_03.jpg',
                alt: 'Paper wireframes of the financial hub',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Approach',
            items: [
              {
                label: 'Summary first, details second',
                text: 'Small business owners shouldn’t have to scroll through dozens of invoice rows just to check their financial health. We anchored three clear metric cards at the top so David can see his total outstanding balance and payroll readiness the moment he opens the hub.',
              },
              {
                label: 'Turning records into action',
                text: 'A dashboard shouldn’t just be a digital filing cabinet of past PDFs. We gave overdue invoices high-contrast warning badges and built a one-click reminder button so David can nudge late clients directly from the table without awkward phone calls.',
              },
            ],
          },
        ],
      },

      // ---------- 4 Prototype & test ----------
      {
        id: 'test',
        number: 4,
        title: 'Prototype & test',
        takeaway: 'Testing found 6 issues. The two biggest changed the final design.',
        points: [
          '10 testers in 2 unmoderated groups',
          'Rate input: 4 of 5 struggled, so a quantity stepper',
          'Overdue search took 14s, so a KPI card and red row tints',
        ],
        visual: [
          {
            src: '/project_img/invoice/mobile_before.jpg',
            alt: 'Before: mobile rate input with small edit links',
            caption: 'Before',
          },
          {
            src: '/project_img/invoice/mobile_after.jpg',
            alt: 'After: mobile rate input with quantity stepper and button pills',
            caption: 'After',
          },
        ],
        details: [
          {
            type: 'text',
            heading: 'Study methodology & participant setup',
            body: [
              'Following exploratory paper sketching, low-fidelity digital wireframes were built in Figma to connect end-to-end task flows into clickable, interactive prototypes. Before committing to high-fidelity visual styling, color tokens, and component libraries, an unmoderated usability study was conducted to evaluate navigation logic, ergonomic friction, and information architecture.',
            ],
          },
          {
            type: 'table',
            heading: 'Approach',
            intro:
              'The study evaluated two distinct user flows across two unmoderated cohorts (10 participants total) to validate both sides of the dual-funnel architecture:',
            columns: [
              'Group',
              'Profile & persona alignment',
              'Device & environment',
              'Primary usability task',
            ],
            rows: [
              [
                'A',
                'Independent field contractors, electricians, and tradespeople (Marcus Vance)',
                'Mobile web (simulated outdoor glare / one-handed grip)',
                '“Draft and dispatch a $391.50 emergency service invoice via SMS without creating an account.”',
              ],
              [
                'B',
                'Small service business owners managing crews and payroll (David Chen)',
                'Desktop SaaS (1440px viewport)',
                '“Identify overdue accounts on your receivables ledger and prompt late clients for payment before weekly payroll.”',
              ],
            ],
          },
          {
            type: 'images',
            heading: 'Flow A: rapid guest invoicing',
            items: [
              {
                src: '/project_img/invoice/Prototype_1.jpg',
                alt: 'Low-fidelity prototype of the rapid guest invoicing flow',
              },
            ],
          },
          {
            type: 'images',
            heading: 'Flow B: receivables triage & payment recovery',
            items: [
              {
                src: '/project_img/invoice/Prototype_2.jpg',
                alt: 'Low-fidelity prototype of the receivables triage and payment recovery flow',
              },
            ],
          },
          {
            type: 'stats',
            heading: 'Test results',
            items: [
              {
                value: '1m 42s',
                label: 'Mobile task completion',
                note: 'Average mobile dispatch · Target: under 2 min · n=5',
              },
              {
                value: '10 of 10', // check: old text said "5 of 5 · both groups (100%)"
                label: 'Task success',
                note: 'Finished without help · 5 of 5 in both Group A and Group B',
              },
              {
                value: '14s',
                label: 'Baseline scanning time',
                note: 'Initial table navigation · Target: under 5s · n=5',
              },
              {
                value: '60%',
                label: 'Account creation',
                note: '3 of 5 saved to hub · Small sample: directional',
              },
            ],
            note: 'Small sample (5 per group). Results are directional, not statistically significant.',
          },
          {
            type: 'text',
            heading: 'Findings & iterations',
            body: [
              'Testing surfaced 6 usability issues. These 2 had the biggest effect on task completion.',
            ],
          },
          {
            type: 'facts',
            heading: 'Issue 1: Rate input friction & mobile touch-target ergonomics',
            items: [
              { label: 'Severity', text: 'High · Flow A' },
              {
                label: 'Evidence',
                text: '4 of 5 testers experienced friction when attempting to adjust line-item rates; the generic preset buttons required manual text editing, and the small [ Edit ] text links led to repeated mis-taps on mobile viewports, seen in unmoderated session recordings.',
              },
            ],
          },
          {
            type: 'images',
            columns: 2,
            items: [
              {
                src: '/project_img/invoice/mobile_before.jpg',
                alt: 'Before: mobile rate input with small edit links',
                caption: 'Before',
              },
              {
                src: '/project_img/invoice/mobile_after.jpg',
                alt: 'After: mobile rate input with quantity stepper and button pills',
                caption: 'After',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Change',
            body: [
              'Introduced an inline quantity stepper ([-] 2.5 [+]) on labor items to enable one-tap hour adjustments without triggering the mobile numeric keyboard, upgraded small text links into tactile button pills (Edit), and anchored the running invoice total to the viewport base for continuous visibility.',
            ],
          },
          {
            type: 'facts',
            heading: 'Issue 2: Overdue account scanning latency on desktop ledger',
            items: [
              { label: 'Severity', text: 'Medium · Flow B' },
              {
                label: 'Evidence',
                text: '5 of 5 testers spent an average of 14 seconds scanning line-by-line across uniform grayscale rows to locate which clients were past due, seen in task time-to-target logs and click tracking.',
              },
            ],
          },
          {
            type: 'images',
            columns: 2,
            items: [
              {
                src: '/project_img/invoice/desktop_before.jpg',
                alt: 'Before: desktop ledger with uniform grayscale rows',
                caption: 'Before',
              },
              {
                src: '/project_img/invoice/desktop_after.jpg',
                alt: 'After: desktop ledger with overdue KPI card and red row tints',
                caption: 'After',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Change',
            body: [
              'Elevated past-due balances into a dedicated top-level KPI alert card ($3,420.00 Overdue), applied a soft red row tint to late invoices, and added an exposed inline [ ⚡ Remind ] trigger so business owners can dispatch payment nudges directly from the table before weekly payroll.',
            ],
          },
        ],
      },

      // ---------- 5 High-fidelity UI & visual system ----------
      {
        id: 'visual-ui',
        number: 5,
        title: 'Visual UI',
        takeaway: 'One token-based system for the field and the desk.',
        points: [
          'Google Sans Flex and Inter',
          '16, 6 and 4 column grids on an 8px base',
          '48px touch targets in the thumb zones',
        ],

        details: [
          {
            type: 'facts',
            heading: 'Typography',
            items: [
              {
                label: 'Headers · Google Sans Flex',
                text: 'Structural headings and brand moments.',
              },
              {
                label: 'Interface & data · Inter',
                text: 'Forms, labels and financial tables, with tabular figures on currency columns.',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Color',
            intro:
              'Every color is a named design token, for example brand-primary and status-paid-text.',
            items: [
              {
                label: 'Brand & action',
                text: 'Primary actions and their interactive states. Marine Teal #0F3040 (brand-primary) · Teal hover #1A465C (brand-hover) · Teal subtle #F0F6F8 (brand-subtle).',
              },
              {
                label: 'Neutrals',
                text: 'Text, borders and panel surfaces. Text primary #0F172A (text-primary) · Text secondary #475569 (text-secondary) · Border #E2E8F0 (border-default) · Surface subtle #F1F5F9 (surface-subtle).',
              },
              {
                label: 'Status',
                text: 'Each status pairs a text color with a background tint. Paid #065F46 on #ECFDF5 · Pending #92400E on #FFFBEB · Overdue #991B1B on #FEF2F2.',
              },
            ],
          },
          {
            type: 'stats',
            heading: 'Layout grid',
            items: [
              { value: '16', label: 'Desktop columns', note: 'Margin 80 · Gutter 16' },
              { value: '6', label: 'Tablet columns', note: 'Margin 16 · Gutter 16' },
              { value: '4', label: 'Mobile columns', note: 'Margin 16 · Gutter 16' },
            ],
            note: 'Every layout sits on an 8px grid, with 48px touch targets in the primary thumb zones.',
          },
          {
            type: 'images',
            heading: 'Marcus Vance: mobile field invoicing (390px)',
            columns: 4,
            items: [
              {
                src: '/project_img/invoice/Step_1.jpg',
                alt: 'Mobile step 1: rapid client entry',
                caption: 'Step 1',
              },
              {
                src: '/project_img/invoice/Step_2.jpg',
                alt: 'Mobile step 2: ergonomic rate builder',
                caption: 'Step 2',
              },
              {
                src: '/project_img/invoice/Step_3.jpg',
                alt: 'Mobile step 3: instant link dispatch',
                caption: 'Step 3',
              },
              {
                src: '/project_img/invoice/Step_4.jpg',
                alt: 'Mobile step 4: save to hub prompt',
                caption: 'Step 4',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'The four steps',
            items: [
              {
                label: 'Step 1 · Rapid client entry',
                text: 'Clean single-column layout prioritizing essential client contact details with pre-saved client search.',
              },
              {
                label: 'Step 2 · Ergonomic rate builder',
                text: 'Quick-add service chips paired with an inline quantity stepper ([-] 2.5 [+]) to eliminate numeric keypad friction, anchored above a persistent running total bar.',
              },
              {
                label: 'Step 3 · Instant link dispatch',
                text: 'One-tap dispatch generating SMS payment links and downloadable receipts without requiring account registration.',
              },
              {
                label: 'Step 4 · Save to Hub prompt',
                text: 'Post-dispatch confirmation featuring a soft “Save to Hub” value card, allowing contractors to track payment status in real time.',
              },
            ],
          },
          {
            type: 'images',
            heading: 'David Chen: desktop receivables hub (1440px)',
            items: [
              {
                src: '/project_img/invoice/david_points.jpg',
                alt: 'Desktop receivables hub with KPI cards, ledger and remind buttons',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Key features',
            items: [
              {
                label: '1 · Cash-flow overview',
                text: 'Three high-contrast KPI cards displaying total outstanding balances, monthly collections, and an Overdue Alert highlighting aging recency (3 late · oldest: 14 days past due).',
              },
              {
                label: '2 · Scannable receivables ledger',
                text: 'A dense, filterable data grid featuring soft red row tints on late accounts to cut line-by-line scanning fatigue before payroll.',
              },
              {
                label: '3 · Payment recovery action',
                text: 'Inline, high-contrast [ ⚡ Remind ] buttons trigger a modal with pre-filled message previews, allowing owners to prompt clients across email or SMS in under 20 seconds.',
              },
            ],
          },
        ],
      },

      // ---------- 6 Outcomes & strategic learnings ----------
      {
        id: 'outcomes',
        number: 6,
        title: 'Outcomes',
        takeaway: 'Every test result maps to a design decision.',
        points: [
          '1m 42s average mobile dispatch',
          'Limits: 5 testers per group, low-fidelity only',
          'Next: re-test the hi-fi ledger',
        ],
        visual: [
          {
            src: '/project_img/invoice/david_points.jpg',
            alt: 'Desktop receivables hub with KPI cards and ledger',
          },
        ],
        details: [
          {
            type: 'table',
            heading: 'Results → design decisions',
            intro: 'Each finding from testing maps to a decision in the high-fidelity design.',
            columns: ['Finding', 'Evidence', 'Design response'],
            rows: [
              [
                '14s to locate overdue accounts on the flat wireframe',
                'Group B · n=5',
                'Overdue KPI card + red row tints',
              ],
              [
                '1m 42s average dispatch; 5 of 5 completed the task',
                'Group A · n=5',
                'Quick-add chips, quantity stepper and one-tap SMS dispatch kept in hi-fi',
              ],
              [
                '3 of 5 saved an account after dispatch',
                'Post-dispatch prompt',
                'Soft “Save to Hub” value card',
              ],
            ],
          },
          {
            type: 'text',
            heading: 'Limitations & what I’d do differently',
            body: [
              'Five testers per group surfaced the key navigation bottlenecks, but the sample is too small for statistical confidence, and the study tested low-fidelity wireframes only. Unmoderated sessions also couldn’t reproduce real field conditions: outdoor glare and one-handed use were simulated, not experienced. With more time, I’d run moderated, on-site sessions in a work van to test one-handed reach directly.',
            ],
          },
          {
            type: 'text',
            heading: 'Next steps',
            body: [
              'Re-test the hi-fi ledger and benchmark triage time against the 14-second baseline.',
              'Design batch payment recovery workflows for desktop.',
              'Map the payment experience for the client receiving the SMS link.',
            ],
          },
        ],
      },
    ],
  },
]
