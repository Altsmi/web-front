import { kinfolk } from '@/data/kinfolk'
import type { Decision, Glance, Overview, Phase } from '@/data/study'

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
  decisions?: Decision[]
  phases: Phase[]
}

export const projectPath = (p: Project) => p.link ?? `/work/ux-ui/${p.slug}`

export const uxProjects: Project[] = [
  kinfolk,
  {
    slug: 'ninox',
    title: 'Ninox',
    summary:
      'An invoicing app. Contractors send an invoice from the job site in under 2 minutes. Business owners see who has paid and who hasn’t.',
    tags: ['Research', 'Wireframing', 'Prototyping', 'Usability testing'],
    year: '2026',
    image: '/project_img/invoice/Presentation_02.jpg',
    alt: 'Ninox landing page on desktop and phone',
    role: 'Product and UX/UI Designer',
    timeline: '4 weeks',
    tools: ['Figma', 'FigJam', 'Maze'],
    type: 'Self-initiated concept project',

    overview: {
      challenge:
        'Let contractors send an invoice in under 2 minutes, and let business owners see their cash flow at a glance.',
      solution:
        'Two flows: send an invoice from your phone with no account, and a desktop dashboard to track who has paid.',
      result: 'Testers sent an invoice in 1m 42s on average. 3 of 5 saved an account afterwards.',
    },

    glance: [
      { value: '1m 42s', label: 'To send an invoice' },
      { value: '14s', label: 'To find overdue (before the fix)' },
      { value: '3 of 5', label: 'Saved an account' },
      { value: '10', label: 'Testers' },
    ],

    decisions: [
      {
        title: '4 of 5 testers struggled to change a rate',
        change: 'I added a quantity stepper and turned the small “Edit” links into buttons.',
        before: {
          src: '/project_img/invoice/mobile_before.jpg',
          alt: 'Before: mobile rate input with small edit links',
          caption: 'Before',
        },
        after: {
          src: '/project_img/invoice/mobile_after.jpg',
          alt: 'After: mobile rate input with quantity stepper and button pills',
          caption: 'After',
        },
      },
      {
        title: 'Finding overdue invoices took 14 seconds',
        change: 'I added an overdue card and tinted late invoices light red.',
        before: {
          src: '/project_img/invoice/desktop_before.jpg',
          alt: 'Before: desktop invoice table with identical gray rows',
          caption: 'Before',
        },
        after: {
          src: '/project_img/invoice/desktop_after.jpg',
          alt: 'After: desktop invoice table with overdue card and red row tints',
          caption: 'After',
        },
      },
    ],

    phases: [
      // ---------- 1 Research ----------
      {
        id: 'research',
        number: 1,
        title: 'Research',
        takeaway: 'No competitor offered both: invoicing with no account, and a cash-flow view.',
        points: [
          '8 people interviewed',
          '2 personas: field contractor and business owner',
          '3 goals: speed, easy use outdoors, cash flow at a glance',
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
            topic: 'Design brief',
            heading: 'Design brief',
            image: {
              src: '/project_img/invoice/Presentation_01.jpg',
              alt: 'Ninox mockups on desktop and phone',
            },
            items: [
              {
                label: 'Design challenge',
                text: 'How might we help contractors send an invoice from the job site in under two minutes, while giving business owners on desktop a clear view of their cash flow and unpaid invoices?',
              },
              {
                label: 'Solution',
                text: 'Two paths. A guest “Instant Invoice” flow on mobile: no sign-up, just send. And a full desktop hub, behind a login, for repeat billing and client records.',
              },
              {
                label: 'What I did',
                text: 'I interviewed people to find where invoicing slows them down, on the job site and at the desk. I sketched and tested two paths, guest and account. Then I ran a usability test and fixed what slowed people down.',
              },
            ],
          },
          {
            type: 'text',
            topic: 'Personas',
            heading: 'Persona',
            body: [
              'The interviews showed two kinds of users. Contractors who bill from a van or job site, on their phone. And business owners who manage cash flow and late payments from a desktop at the office.',
            ],
          },
          {
            type: 'stats',
            heading: 'Discovery method',
            items: [
              { value: '8', label: 'participants' },
              { value: 'Contractors and owners', label: 'who I spoke to' },
              { value: 'Week 1', label: 'when' },
            ],
            note: 'What I heard most: invoicing is slow on site · owners worry about cash before payroll',
          },
          {
            type: 'images',
            columns: 2,
            items: [
              {
                src: '/project_img/invoice/Persona_1.jpg',
                alt: 'Persona 1: Marcus Vance, independent field contractor',
              },
              {
                src: '/project_img/invoice/Persona_3.jpg',
                alt: 'Persona 2: David Chen, small business owner',
              },
            ],
          },
          {
            type: 'text',
            topic: 'Competitors',
            heading: 'Competitive analysis',
            body: [
              'I compared popular invoicing tools on sign-up steps, how well they work on a phone, and how clearly they show cash flow.',
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
                '5+ steps (sign-up, email check, business setup)',
                'No',
                'Yes',
                'Long setup. No way to send a quick invoice without an account.',
              ],
              [
                'Wave',
                '4+ steps (sign-up, tax setup)',
                'No',
                'Yes',
                'Heavy accounting setup. Hard to use on a phone.',
              ],
              [
                'Invoice Simple',
                '2 steps (fast quick-start)',
                'Yes',
                'No (flat list)',
                'No cash-flow view, no overdue alerts, no tools to chase payments.',
              ],
              [
                'Ninox',
                '0 steps (guest mode)',
                'Yes',
                'Yes',
                'Does both: send in seconds on a phone, track payments on desktop.',
              ],
            ],
            highlightRow: 3,
            note: 'Takeaway: none of these tools let you send an invoice with no account and also see who owes you what at a glance.',
          },
          {
            type: 'facts',
            topic: 'Goals',
            heading: 'Design goals',
            intro: 'The research pointed to three goals:',
            items: [
              {
                label: '1. Speed',
                text: 'People want to send an invoice fast, not set up accounting. So the mobile flow needs no account.',
              },
              {
                label: '2. Easy to use outdoors',
                text: 'Contractors type numbers in bright sunlight. High-contrast colors and 48px touch targets help them make fewer mistakes.',
              },
              {
                label: '3. Cash flow at a glance',
                text: 'Owners want to see what is paid and what is still owed without digging. So the hub opens with summary cards and payment status.',
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
            topic: 'Principles',
            heading: 'From research to design principles',
            intro: 'Three insights from research shaped how I framed the problem.',
            columns: ['Insight', 'How might we', 'Principle'],
            rows: [
              [
                'People want to create an invoice quickly, not set up accounting',
                'How might we let a contractor send an invoice from the job site in under two minutes, with no account?',
                'Value before sign-up',
              ],
              [
                'Mistakes happen in glare, with small buttons',
                'How might we make typing numbers accurate with one hand in direct sunlight?',
                'Thumb-first, high contrast',
              ],
              [
                'Owners can’t see what is paid and what is owed without digging',
                'How might we show cash-flow health at a glance and let owners chase late invoices in one click?',
                'Summary first, details second',
              ],
            ],
            note: 'These principles shaped the two flows below.',
          },
          {
            type: 'text',
            topic: 'Two flows',
            heading: 'The two flows',
            body: [
              'I split the product into two flows. Contractors get a quick guest flow on mobile. Business owners get a full dashboard on desktop.',
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
            columns: ['Stage', 'Guest flow: mobile (Marcus)', 'Hub: desktop (David)'],
            rows: [
              [
                'Goal',
                'Send a job invoice in under 2 minutes.',
                'Check weekly cash flow and payroll.',
              ],
              ['Login', 'None. No password or sign-up.', 'Business login.'],
              [
                'Main screen',
                'One-column form with saved line items.',
                'Table with status filters and totals.',
              ],
              [
                'Finish',
                'Send by SMS or email.',
                'Send reminders to late clients and update records.',
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
        takeaway: 'Concept 3 won: button, product preview and proof all fit in the first screen.',
        points: [
          '3 landing concepts compared',
          'Mobile step 2 combined from 3 variants',
          'Desktop hub built around summary cards and an invoice table',
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
            topic: 'Landing page',
            heading: '01. The landing page',
            body: [
              'The landing page speaks to both users. Business owners on desktop see proof and features. Contractors on mobile get a button at the top to start an invoice, with no sign-up.',
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
                text: 'One centered column. Clean, but lots of empty space on desktop, and proof pushed below the fold.',
              },
              {
                label: 'Concept 2',
                text: 'A 50/50 split: text on the left, product preview on the right. Balanced, but proof was still below the fold.',
              },
              {
                label: 'Concept 3',
                text: 'A bigger preview, high-contrast buttons, and a bar with three key numbers.',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Decision: landing concept',
            body: [
              'I went with Concept 3. The button, the preview and the proof all fit in the first screen. Concept 1 left empty space. Concept 2 pushed proof below the fold.',
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
            topic: 'Phone flow',
            heading: '02. Instant invoicing (Marcus)',
            body: [
              'Marcus works from his van or the job site, so I designed this flow for his phone first. No sign-up, and big buttons he can tap with a thumb, so he can bill before he leaves.',
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
              'I didn’t pick one layout. I combined the best parts of three: the currency selector and Fixed/Hourly buttons from Variant 1, the stacked line items from Variants 2 and 3, and a total bar and button fixed at the bottom, where the thumb reaches. That means less typing in glare, and the running total is always visible.',
            ],
          },
          {
            type: 'facts',
            heading: 'Approach',
            items: [
              {
                label: 'Paper invoices as a model',
                text: 'Paper bills follow a layout everyone knows: details at the top, items in the middle, total at the bottom. I copied that into a three-step mobile form, so there is nothing new to learn.',
              },
              {
                label: 'Responsive is more than a smaller screen',
                text: 'I didn’t shrink the desktop table. On mobile, the same job becomes big 48px buttons, quick-add buttons, and a bottom bar for one-handed use outdoors.',
              },
            ],
          },
          {
            type: 'text',
            topic: 'Desktop hub',
            heading: '03. Cash-flow hub (David)',
            body: [
              'David runs the business and payroll from a desktop at the office. His flow uses summary cards and a filterable invoice table, so there are no surprises before Friday payroll.',
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
                text: 'Owners shouldn’t have to scroll through dozens of invoices to check how the business is doing. Three cards at the top show what is owed and whether payroll is covered, as soon as David opens the hub.',
              },
              {
                label: 'Records that lead to action',
                text: 'A dashboard shouldn’t be a pile of old PDFs. Overdue invoices get a clear red warning, and a one-click reminder button lets David nudge late clients from the table, with no awkward phone calls.',
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
          'Rate input: 4 of 5 struggled, so I added a quantity stepper',
          'Finding overdue invoices took 14s, so I added an overdue card and red row tints',
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
            topic: 'Test setup',
            heading: 'How I tested',
            body: [
              'After paper sketches, I built low-fidelity wireframes in Figma and linked them into a clickable prototype. Before adding colors and components, I ran an unmoderated usability test to check navigation, ease of use on a phone, and how the information was organized.',
            ],
          },
          {
            type: 'table',
            heading: 'Test setup',
            intro: 'Two groups of 5 people tested the two flows (10 testers in total).',
            columns: ['Group', 'Who', 'Device', 'Task'],
            rows: [
              [
                'A',
                'Contractors and tradespeople (Marcus)',
                'Phone (sunlight and one-handed use simulated)',
                '“Create and send a $391.50 emergency invoice by SMS without making an account.”',
              ],
              [
                'B',
                'Small business owners managing crews and payroll (David)',
                'Desktop (1440px)',
                '“Find the overdue accounts and send a reminder before weekly payroll.”',
              ],
            ],
          },
          {
            type: 'images',
            heading: 'Flow A: guest invoice',
            items: [
              {
                src: '/project_img/invoice/Prototype_1.jpg',
                alt: 'Low-fidelity prototype of the rapid guest invoicing flow',
              },
            ],
          },
          {
            type: 'images',
            heading: 'Flow B: finding and chasing late invoices',
            items: [
              {
                src: '/project_img/invoice/Prototype_2.jpg',
                alt: 'Low-fidelity prototype of the finding and chasing late invoices flow',
              },
            ],
          },
          {
            type: 'stats',
            topic: 'Results',
            heading: 'Test results',
            items: [
              {
                value: '1m 42s',
                label: 'Time to send an invoice (phone)',
                note: 'Average · Target: under 2 min · n=5',
              },
              {
                value: '10 of 10',
                label: 'Finished without help',
                note: '5 of 5 in Group A and 5 of 5 in Group B',
              },
              {
                value: '14s',
                label: 'Time to find overdue invoices',
                note: 'Before the fix · Target: under 5s · n=5',
              },
              {
                value: '60%',
                label: 'Saved an account',
                note: '3 of 5 saved to the hub · Small sample',
              },
            ],
            note: 'Only 5 people per group, so treat these results as a guide, not proof.',
          },
          {
            type: 'text',
            heading: 'What the tests showed',
            body: ['Testing found 6 usability issues. These 2 had the biggest effect.'],
          },
          {
            type: 'facts',
            topic: 'Issue 1: rate input',
            heading: 'Issue 1: Changing a rate was hard on mobile',
            items: [
              { label: 'Severity', text: 'High · Flow A' },
              {
                label: 'Evidence',
                text: '4 of 5 testers struggled to change a rate. The preset buttons meant typing by hand, and the small “Edit” links caused mis-taps. I saw this in the session recordings.',
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
              'I added a quantity stepper ([-] 2.5 [+]) so hours change with one tap and no keyboard. I turned the small “Edit” links into buttons, and fixed the running total to the bottom of the screen so it is always visible.',
            ],
          },
          {
            type: 'facts',
            topic: 'Issue 2: overdue',
            heading: 'Issue 2: Finding overdue invoices took too long',
            items: [
              { label: 'Severity', text: 'Medium · Flow B' },
              {
                label: 'Evidence',
                text: 'All 5 testers took about 14 seconds on average, scanning row by row through identical gray rows to find who was late. I saw this in task times and click tracking.',
              },
            ],
          },
          {
            type: 'images',
            columns: 2,
            items: [
              {
                src: '/project_img/invoice/desktop_before.jpg',
                alt: 'Before: desktop invoice table with identical gray rows',
                caption: 'Before',
              },
              {
                src: '/project_img/invoice/desktop_after.jpg',
                alt: 'After: desktop invoice table with overdue card and red row tints',
                caption: 'After',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Change',
            body: [
              'I added a card at the top for overdue balances ($3,420.00 overdue), tinted late invoices light red, and added a ⚡ Remind button on each row, so owners can nudge clients before payroll.',
            ],
          },
        ],
      },

      // ---------- 5 High-fidelity UI & visual system ----------
      {
        id: 'visual-ui',
        number: 5,
        title: 'Visual UI',
        takeaway: 'One set of styles for both the phone and the desktop.',
        points: [
          'Google Sans Flex and Inter',
          '16, 6 and 4 column grids on an 8px base',
          '48px buttons where the thumb reaches',
        ],

        details: [
          {
            type: 'facts',
            topic: 'Style guide',
            heading: 'Typography',
            items: [
              {
                label: 'Headers · Google Sans Flex',
                text: 'Headings and brand moments.',
              },
              {
                label: 'Interface and data · Inter',
                text: 'Forms, labels and tables. Numbers line up in the money columns.',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Color',
            intro: 'Every color has a name, like brand-primary or status-paid-text.',
            items: [
              {
                label: 'Brand & action',
                text: 'Buttons and their states. Marine Teal #0F3040 (brand-primary) · Teal hover #1A465C (brand-hover) · Teal subtle #F0F6F8 (brand-subtle).',
              },
              {
                label: 'Neutrals',
                text: 'Text, borders and backgrounds. Text primary #0F172A (text-primary) · Text secondary #475569 (text-secondary) · Border #E2E8F0 (border-default) · Surface subtle #F1F5F9 (surface-subtle).',
              },
              {
                label: 'Status',
                text: 'Each status has a text color and a light background. Paid #065F46 on #ECFDF5 · Pending #92400E on #FFFBEB · Overdue #991B1B on #FEF2F2.',
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
            note: 'Everything sits on an 8px grid, with 48px touch targets where the thumb reaches.',
          },
          {
            type: 'images',
            topic: 'Mobile screens',
            heading: 'Marcus: mobile invoicing (390px)',
            columns: 4,
            items: [
              {
                src: '/project_img/invoice/Step_1.jpg',
                alt: 'Mobile step 1: client details',
                caption: 'Step 1',
              },
              {
                src: '/project_img/invoice/Step_2.jpg',
                alt: 'Mobile step 2: rate builder',
                caption: 'Step 2',
              },
              {
                src: '/project_img/invoice/Step_3.jpg',
                alt: 'Mobile step 3: send the invoice',
                caption: 'Step 3',
              },
              {
                src: '/project_img/invoice/Step_4.jpg',
                alt: 'Mobile step 4: save to hub',
                caption: 'Step 4',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'The four steps',
            items: [
              {
                label: 'Step 1 · Client details',
                text: 'One column with only the essentials. Saved clients can be searched.',
              },
              {
                label: 'Step 2 · Rate builder',
                text: 'Quick-add service buttons and a quantity stepper ([-] 2.5 [+]), so no number keyboard. A total bar stays at the bottom.',
              },
              {
                label: 'Step 3 · Send',
                text: 'One tap sends an SMS payment link and a receipt. No account needed.',
              },
              {
                label: 'Step 4 · Save to hub',
                text: 'After sending, a soft card offers to save the invoice to the hub, so the contractor can see when it is paid.',
              },
            ],
          },
          {
            type: 'images',
            topic: 'Desktop screens',
            heading: 'David: desktop hub (1440px)',
            items: [
              {
                src: '/project_img/invoice/david_points.jpg',
                alt: 'Desktop hub with summary cards, invoice table and remind buttons',
              },
            ],
          },
          {
            type: 'facts',
            heading: 'Key features',
            items: [
              {
                label: '1 · Cash-flow overview',
                text: 'Three high-contrast cards: total owed, collected this month, and an overdue alert (3 late · oldest 14 days).',
              },
              {
                label: '2 · Invoice table',
                text: 'A filterable table with light red tints on late invoices, so owners spot them fast before payroll.',
              },
              {
                label: '3 · Send a reminder',
                text: 'A ⚡ Remind button opens a pre-filled message. Owners can nudge a client by email or SMS in under 20 seconds.',
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
        takeaway: 'Each test result led to a design change.',
        points: [
          '1m 42s average to send an invoice on mobile',
          'Limits: 5 testers per group, low-fidelity only',
          'Next: re-test the final design',
        ],
        visual: [
          {
            src: '/project_img/invoice/david_points.jpg',
            alt: 'Desktop hub with summary cards and invoice table',
          },
        ],
        details: [
          {
            type: 'table',
            topic: 'Results to changes',
            heading: 'Results → design changes',
            intro: 'Each finding from testing led to a change in the final design.',
            columns: ['Finding', 'Evidence', 'What I changed'],
            rows: [
              [
                '14s to find overdue invoices on the flat wireframe',
                'Group B · n=5',
                'Overdue card + red row tints',
              ],
              [
                '1m 42s average to send; 5 of 5 completed the task',
                'Group A · n=5',
                'Kept quick-add buttons, quantity stepper and one-tap SMS',
              ],
              [
                '3 of 5 saved an account after sending',
                'After the invoice is sent',
                'Soft “Save to Hub” card',
              ],
            ],
          },
          {
            type: 'text',
            topic: 'Limits',
            heading: 'Limits, and what I’d do next time',
            body: [
              'Five testers per group was enough to find the main problems, but too few to prove anything. I only tested low-fidelity wireframes. And remote tests couldn’t recreate real job-site conditions: glare and one-handed use were simulated. With more time, I’d test in person, in a work van, to check one-handed reach.',
            ],
          },
          {
            type: 'text',
            topic: 'Next steps',
            heading: 'Next steps',
            body: [
              'Re-test the final invoice table and compare against the 14-second baseline.',
              'Design batch reminders for late invoices on desktop.',
              'Design what the client sees when they get the SMS link.',
            ],
          },
        ],
      },
    ],
  },
]
