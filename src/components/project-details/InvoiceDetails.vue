<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const lightbox = ref<{ src: string; alt: string } | null>(null)

function handleImageClick(event: MouseEvent) {
  const target = event.target
  if (target instanceof HTMLImageElement) {
    lightbox.value = { src: target.currentSrc || target.src, alt: target.alt }
  }
}

function closeLightbox() {
  lightbox.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeLightbox()
}

watch(lightbox, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const flowRows = [
  {
    stage: 'User Intent',
    guest: 'Send a quick job bill in under 2 minutes.',
    saas: 'Review weekly cash flow and payroll readiness.',
  },
  {
    stage: 'Authentication',
    guest: 'Zero-friction bypass (no password/signup).',
    saas: 'Secure business login.',
  },
  {
    stage: 'Primary Action',
    guest: 'Single-column form with pre-saved line items.',
    saas: 'Multi-column table with status filters & metrics.',
  },
  {
    stage: 'Completion',
    guest: 'Direct SMS/e-mail dispatch.',
    saas: 'Automated batch reminders and ledger updates.',
  },
]

const studyRows = [
  {
    group: 'A',
    profile: 'Independent field contractors, electricians, and tradespeople (Marcus Vance)',
    device: 'Mobile Web (Simulated outdoor glare / one-handed grip)',
    task: `"Draft and dispatch a $391.50 emergency service invoice via SMS without creating an account."`,
  },
  {
    group: 'B',
    profile: 'Small service business owners managing crews and payroll (David Chen)',
    device: 'Desktop SaaS (1440px viewport)',
    task: `"Identify overdue accounts on your receivables ledger and prompt late clients for payment before weekly payroll."`,
  },
]

const goals = [
  {
    label: '1. Frictionless Task Speed',
    text: 'Users prioritize rapid, low-friction document creation over deep accounting configurations, indicating an urgent need for an unauthenticated, instant-dispatch workflow on mobile web.',
  },
  {
    label: '2. Accessible Field Ergonomics',
    text: 'Adhering to WCAG AAA contrast ratios and 48px touch targets prevents data-entry errors when trade contractors input numbers under direct outdoor sunlight.',
  },
  {
    label: '3. High-Level Cash Flow Clarity',
    text: 'Business owners demand immediate visibility into outstanding versus collected revenue, emphasizing the need for at-a-glance receivables snapshot cards and automated payment status tracking.',
  },
]

const concepts = [
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
]

const marcusApproach = [
  {
    lead: 'Physical Invoice Anatomy Informs the Digital Stepper:',
    text: 'Traditional paper bills follow a universally understood layout—header information at the top, itemized rates in the center, and totals with payment terms at the base. Translating this physical structure into a linear three-step mobile form leverages familiar mental models, allowing contractors to complete bills rapidly without needing to learn a new interface.',
  },
  {
    lead: 'Responsive Adaptation Beyond Screen Scaling:',
    text: 'Responsive design for field operations is ergonomic, not just visual. Instead of shrinking desktop data tables into dense, hard-to-read mobile spreadsheets, the mobile layout adapts complex calculations into thumb-friendly 48px touch targets, quick-add modal triggers, and an anchored thumb-zone action bar engineered for one-handed use outdoors.',
  },
]

const davidApproach = [
  {
    lead: 'Summary First, Details Second:',
    text: `Small business owners shouldn't have to scroll through dozens of invoice rows just to check their financial health. We anchored three clear metric cards at the top so David can see his total outstanding balance and payroll readiness the moment he opens the hub.`,
  },
  {
    lead: 'Turning Records into Action:',
    text: `A dashboard shouldn't just be a digital filing cabinet of past PDFs. We gave overdue invoices high-contrast warning badges and built a one-click reminder button so David can nudge late clients directly from the table without awkward phone calls.`,
  },
]

const show = {
  discovery: true,
  competitors: true,
  insights: true,
  decisions: true,
  findings: true,
}

const projectContext = 'Self-initiated concept project'

const prototypeUrl = ''

const discoveryStats = [
  { value: '8', caption: 'participants' },
  { value: 'Business Owners', caption: 'who I spoke to' },
  { value: 'Week 1', caption: 'when' },
]
const discoveryThemes = 'Field Invoicing Friction · Payroll Cash-Flow Anxiety'

const competitorColumns = ['Steps before first invoice', 'Mobile-first?', 'Cash-flow view', 'Gap']
const competitors = [
  {
    tool: 'FreshBooks',
    values: [
      '5+ steps (Sign-up, email verify, business setup)',
      'No (Desktop-first)',
      'Yes',
      'High onboarding friction; no unauthenticated field bypass for fast on-site billing',
    ],
    highlight: false,
  },
  {
    tool: 'Wave',
    values: [
      '4+ steps (Account registration, tax classification)',
      'No (Desktop-centric)',
      'Yes',
      'Heavy accounting setup; cumbersome navigation and poor ergonomics on mobile web',
    ],
    highlight: false,
  },
  {
    tool: 'Invoice Simple',
    values: [
      '2 steps (Fast quick-start)',
      'Yes',
      'No (Flat invoice list)',
      'Lacks cash-flow visibility, overdue aging alerts, and batch payment recovery tools',
    ],
    highlight: false,
  },
  {
    tool: 'Ninox',
    values: [
      '0 steps (Zero-friction guest bypass)',
      'Yes',
      'Yes',
      'Fills the gap (Dual-funnel: instant mobile send + desktop receivables hub)',
    ],
    highlight: true,
  },
]
const competitorTakeaway =
  'None of the tools I reviewed combined instant, unauthenticated guest invoicing with an at-a-glance receivables triage hub.'

const insights = [
  {
    insight: 'Users prefer rapid document creation over deep accounting setup',
    hmw: 'How might we let a contractor send an invoice from the job site in under two minutes, with no account?',
    principle: 'Value before sign-up',
  },
  {
    insight: 'Field entry errors happen under glare with small targets',
    hmw: 'How might we make number entry accurate one-handed in direct sunlight?',
    principle: 'Thumb-first, high contrast',
  },
  {
    insight: `Owners can't see outstanding vs. collected revenue without digging`,
    hmw: 'How might we show cash-flow health at a glance and let owners act on late invoices in one click?',
    principle: 'Summary first, details second',
  },
]

const landingDecision =
  'I moved forward with Concept 3 because it keeps the primary CTA, the product preview, and the proof metrics in the first screen. Concept 1 left dead space and Concept 2 pushed proof below the fold.'
const marcusDecision =
  'Instead of selecting a single layout, I synthesized a hybrid design: borrowing the currency selector and one-tap preset buttons (Fixed vs. Hourly) from Variant 1, the clean stacked line-item structure from Variants 2 and 3, and anchoring the live summary bar and action button to the bottom thumb zone. This hybrid eliminated manual typing friction under outdoor glare while keeping running job totals immediately visible.'

const metrics = [
  {
    label: 'Mobile Task Completion',
    value: '1m 42s',
    caption: 'Average Mobile Dispatch',
    context: 'Target: under 2 min · n=5',
  },
  {
    label: 'Task Success',
    value: '5 of 5',
    caption: 'Finished without help',
    context: 'Both Groups A & B (100%)',
  },
  {
    label: 'Baseline Scanning Time',
    value: '14s',
    caption: 'Initial Table Navigation',
    context: 'Target: under 5s · n=5',
  },
  {
    label: 'Account Creation',
    value: '60%',
    caption: '3 of 5 Saved to Hub',
    context: 'Small sample: directional',
  },
]
const metricsNote =
  'Small sample (5 per group). Results are directional, not statistically significant.'

const findingsIntro =
  'Testing surfaced 6 usability issues. These 2 had the biggest effect on task completion.'
const findings = [
  {
    id: 1,
    severity: 'High',
    flow: 'A',
    title: 'Rate Input Friction & Mobile Touch-Target Ergonomics',
    evidence:
      '4 of 5 testers experienced friction when attempting to adjust line-item rates; the generic preset buttons required manual text editing, and the small [ Edit ] text links led to repeated mis-taps on mobile viewports, seen in unmoderated session recordings.',
    before: '/project_img/invoice/mobile_before.jpg',
    after: '/project_img/invoice/mobile_after.jpg',
    change:
      'Introduced an inline quantity stepper ([-] 2.5 [+]) on labor items to enable one-tap hour adjustments without triggering the mobile numeric keyboard, upgraded small text links into tactile button pills (Edit), and anchored the running invoice total to the viewport base for continuous visibility.',
  },
  {
    id: 2,
    severity: 'Medium',
    flow: 'B',
    title: 'Overdue Account Scanning Latency on Desktop Ledger',
    evidence:
      '5 of 5 testers spent an average of 14 seconds scanning line-by-line across uniform grayscale rows to locate which clients were past due, seen in task time-to-target logs and click tracking.',
    before: '/project_img/invoice/desktop_before.jpg',
    after: '/project_img/invoice/desktop_after.jpg',
    change:
      'Elevated past-due balances into a dedicated top-level KPI alert card ($3,420.00 Overdue), applied a soft red row tint to late invoices, and added an exposed inline [ ⚡ Remind ] trigger so business owners can dispatch payment nudges directly from the table before weekly payroll.',
  },
]

function shots(issue: { before: string; after: string }) {
  return [
    { label: 'Before', src: issue.before },
    { label: 'After', src: issue.after },
  ]
}

// ---------------------------------------------------------------------------
// SECTION 5 & 6 DATA
// ---------------------------------------------------------------------------
const foundationsBoard = '' // optional Figma export of the design system overview

const typeRoles = [
  {
    role: 'Headers',
    font: 'Google Sans Flex',
    note: 'Structural headings and brand moments.',
  },
  {
    role: 'Interface & data',
    font: 'Inter',
    note: 'Forms, labels and financial tables, with tabular figures on currency columns.',
  },
]

const colorGroups = [
  {
    title: 'Brand & action',
    note: 'Primary actions and their interactive states.',
    colors: [
      { name: 'Marine Teal', hex: '#0F3040', token: 'brand-primary' },
      { name: 'Teal hover', hex: '#1A465C', token: 'brand-hover' },
      { name: 'Teal subtle', hex: '#F0F6F8', token: 'brand-subtle' },
    ],
  },
  {
    title: 'Neutrals',
    note: 'Text, borders and panel surfaces.',
    colors: [
      { name: 'Text primary', hex: '#0F172A', token: 'text-primary' },
      { name: 'Text secondary', hex: '#475569', token: 'text-secondary' },
      { name: 'Border', hex: '#E2E8F0', token: 'border-default' },
      { name: 'Surface subtle', hex: '#F1F5F9', token: 'surface-subtle' },
    ],
  },
  {
    title: 'Status',
    note: 'Each status pairs a text color with a background tint.',
    colors: [
      { name: 'Paid text', hex: '#065F46', token: 'status-paid-text' },
      { name: 'Paid bg', hex: '#ECFDF5', token: 'status-paid-bg' },
      { name: 'Pending text', hex: '#92400E', token: 'status-pending-text' },
      { name: 'Pending bg', hex: '#FFFBEB', token: 'status-pending-bg' },
      { name: 'Overdue text', hex: '#991B1B', token: 'status-overdue-text' },
      { name: 'Overdue bg', hex: '#FEF2F2', token: 'status-overdue-bg' },
    ],
  },
]

const layoutGrids = [
  { device: 'Desktop', columns: 16, margin: 80, gutter: 16 },
  { device: 'Tablet', columns: 6, margin: 16, gutter: 16 },
  { device: 'Mobile', columns: 4, margin: 16, gutter: 16 },
]

const marcusScreens = [
  {
    step: 1,
    title: 'Rapid Client Entry',
    text: 'Clean single-column layout prioritizing essential client contact details with pre-saved client search.',
    img: '/project_img/invoice/Step_1.jpg',
  },
  {
    step: 2,
    title: 'Ergonomic Rate Builder',
    text: 'Quick-add service chips paired with an inline quantity stepper ([-] 2.5 [+]) to eliminate numeric keypad friction, anchored above a persistent running total bar.',
    img: '/project_img/invoice/Step_2.jpg',
  },
  {
    step: 3,
    title: 'Instant Link Dispatch',
    text: 'One-tap dispatch generating SMS payment links and downloadable receipts without requiring account registration.',
    img: '/project_img/invoice/Step_3.jpg',
  },
  {
    step: 4,
    title: 'Save to Hub Prompt',
    text: 'Post-dispatch confirmation featuring a soft "Save to Hub" value card, allowing contractors to track payment status in real time.',
    img: '/project_img/invoice/Step_4.jpg',
  },
]

const davidScreen = '/project_img/invoice/david_points.jpg' // full-width desktop screen
const ledgerBefore = '' // optional lo-fi ledger; both paths needed to show the pair
const ledgerAfter = ''
const davidFeatures = [
  {
    label: '1 · Cash-Flow Overview',
    text: 'Three high-contrast KPI cards displaying total outstanding balances, monthly collections, and an Overdue Alert highlighting aging recency (3 Late · Oldest: 14 days past due).',
  },
  {
    label: '2 · Scannable Receivables Ledger',
    text: 'A dense, filterable data grid featuring soft red row tints on late accounts to cut line-by-line scanning fatigue before payroll.',
  },
  {
    label: '3 · Payment Recovery Action',
    text: 'Inline, high-contrast [ ⚡ Remind ] buttons trigger a modal with pre-filled message previews, allowing owners to prompt clients across email or SMS in under 20 seconds.',
  },
]

const outcomeRows = [
  {
    finding: '14s to locate overdue accounts on the flat wireframe',
    evidence: 'Group B · n=5',
    response: 'Overdue KPI card + red row tints',
  },
  {
    finding: '1m 42s average dispatch; 5 of 5 completed the task',
    evidence: 'Group A · n=5',
    response: 'Quick-add chips, quantity stepper and one-tap SMS dispatch kept in hi-fi',
  },
  {
    finding: '3 of 5 saved an account after dispatch',
    evidence: 'Post-dispatch prompt',
    response: 'Soft "Save to Hub" value card',
  },
]
const limitations =
  'Five testers per group surfaced the key navigation bottlenecks, but the sample is too small for statistical confidence, and the study tested low-fidelity wireframes only. Unmoderated sessions also couldn’t reproduce real field conditions: outdoor glare and one-handed use were simulated, not experienced. With more time, I’d run moderated, on-site sessions in a work van to test one-handed reach directly.'
const nextSteps = [
  'Re-test the hi-fi ledger and benchmark triage time against the 14-second baseline.',
  'Design batch payment recovery workflows for desktop.',
  'Map the payment experience for the client receiving the SMS link.',
]
</script>

<template>
  <section class="space-y-12 sm:space-y-20 pt-6 [&_img]:cursor-zoom-in" @click="handleImageClick">
    <!--Project Specs-->
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="space-y-1">
          <p class="font-semibold">Timeline:</p>
          <p class="text-sm sm:text-lg text-text-700">4 Weeks</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold">Tools:</p>
          <p class="text-sm sm:text-lg text-text-700">Figma, FigJam, Maze</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold">Role:</p>
          <p class="text-sm sm:text-lg text-text-700">Lead Product & UX/UI Designer</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold">Context:</p>
          <p class="text-sm sm:text-lg text-text-700">{{ projectContext }}</p>
        </div>
      </div>
    </section>

    <!--Summary-->
    <section class="space-y-6 sm:space-y-8">
      <h2 class="text-2xl sm:text-4xl font-bold font-header text-text-900">Summary</h2>

      <div class="summary-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3" style="grid-area: challenge">
          <p class="text-brand-primary text-sm font-semibold">Design challenge</p>
          <h3 class="text-base sm:text-xl font-medium text-text-900">
            How might we design a responsive invoicing platform that allows on-the-go trade
            contractors to create and dispatch invoices in under two minutes, while providing
            desktop-first small business owners with deep visibility into cash flow and outstanding
            balances?
          </h3>
        </div>

        <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3" style="grid-area: solutions">
          <p class="text-brand-primary text-sm font-semibold">Solution</p>
          <h3 class="text-base sm:text-xl font-medium text-text-900">
            <span class="font-bold">Dual-Funnel Information Architecture:</span> Built a
            zero-friction, unauthenticated "Instant Invoice" flow for quick mobile dispatches,
            paired with a complete, authenticated SaaS Hub for managing recurring billing and client
            ledgers.
          </h3>
        </div>

        <div class="rounded-sm overflow-hidden bg-brand-primary" style="grid-area: image">
          <img
            src="/project_img/invoice/Presentation_01.jpg"
            alt="Project mockup"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-4 sm:gap-6" style="grid-area: takeaways">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Key takeaways</h2>

          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary font-semibold text-sm">Impact</p>
            <p class="text-3xl sm:text-5xl font-bold text-text-900">60%</p>
            <p class="text-sm sm:text-lg font-medium text-text-900">
              <span class="font-bold">Post-Task Account Creation Rate.</span> In unmoderated
              prototype testing, 60% of test participants (3 of 5) opted to create an account when
              prompted with the "Save to Hub" screen immediately after dispatching their invoice,
              validating the value-first onboarding strategy.
            </p>
          </div>

          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Action taken</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Conducted qualitative discovery sessions and persona synthesis to pinpoint workflow
              friction across field and desk environments, restructured information architecture
              through iterative wireframing to validate a dual-funnel guest versus SaaS flow, and
              executed usability testing to optimize data density, legibility, and task completion
              speed.
            </h3>
          </div>
        </div>
      </div>

      <!--Key learnings-->
      <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
        <p class="text-brand-primary text-sm font-semibold">Key learnings</p>
        <div class="space-y-4">
          <p class="text-base sm:text-xl font-medium text-text-900">
            <span class="font-bold">Responsive UX is Context-First, Not Just Layout-First:</span>
            Responsive design is about adapting to user context. Mobile users need fast,
            high-contrast utility on job sites, while desktop users need simultaneous data input and
            live previews.
          </p>
          <p class="text-base sm:text-xl font-medium text-text-900">
            <span class="font-bold">Value-First Onboarding Outperforms Gated Signups:</span>
            Deferring account registration until after a user accomplishes their core task (sending
            an invoice) removes initial resistance and builds trust through direct utility.
          </p>
        </div>
      </div>
    </section>

    <!--1 Research-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">1</span> Research
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <!--Persona-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Persona</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            This section introduces user personas developed from qualitative discovery sessions,
            highlighting the operational divide in trade services. These personas anchor the design
            decisions by capturing the distinct workflows of users. From independent field
            technicians needing rapid, on-site mobile dispatch to business owners managing cash flow
            and overdue receivables from a desktop office.
          </p>

          <!--Discovery method-->
          <div v-if="show.discovery" class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
            <p class="text-brand-primary text-sm font-semibold">Discovery method</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div v-for="stat in discoveryStats" :key="stat.caption" class="space-y-1">
                <p class="text-xl sm:text-3xl font-bold text-text-900">{{ stat.value }}</p>
                <p class="text-sm sm:text-base text-text-700">{{ stat.caption }}</p>
              </div>
            </div>
            <p class="text-base sm:text-xl md:pt-10 font-medium text-text-900">
              <span class="font-bold">Recurring themes:</span> {{ discoveryThemes }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <img
              src="/project_img/invoice/Persona_1.jpg"
              alt="Persona 1"
              loading="lazy"
              class="w-full h-auto rounded-sm"
            />
            <img
              src="/project_img/invoice/Persona_3.jpg"
              alt="Persona 2"
              loading="lazy"
              class="w-full h-auto rounded-sm"
            />
          </div>
        </div>

        <!--Competitive analysis-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Competitive analysis</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Conducted a targeted competitive analysis to benchmark against leading invoicing tools,
            focusing on onboarding friction, mobile ergonomics, and financial tracking clarity.
          </p>

          <template v-if="show.competitors">
            <!--Desktop table-->
            <div class="hidden md:block rounded-sm bg-neutral-300 overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-neutral-900 text-neutral-300">
                    <th class="p-6 text-base font-semibold">Tool</th>
                    <th
                      v-for="column in competitorColumns"
                      :key="column"
                      class="p-6 text-base font-semibold"
                    >
                      {{ column }}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-900">
                  <tr
                    v-for="row in competitors"
                    :key="row.tool"
                    :class="row.highlight ? 'text-brand-primary' : 'text-text-900'"
                  >
                    <td class="p-6 text-base font-semibold">{{ row.tool }}</td>
                    <td
                      v-for="(value, index) in row.values"
                      :key="index"
                      class="p-6 text-base"
                      :class="row.highlight ? 'font-semibold' : ''"
                    >
                      {{ value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!--Mobile cards-->
            <div class="md:hidden space-y-4">
              <div
                v-for="row in competitors"
                :key="row.tool"
                class="rounded-sm bg-neutral-300 p-5 space-y-3"
              >
                <p
                  class="font-semibold"
                  :class="row.highlight ? 'text-brand-primary' : 'text-text-900'"
                >
                  {{ row.tool }}
                </p>
                <div v-for="(value, index) in row.values" :key="index" class="space-y-1">
                  <p class="text-brand-primary text-sm font-semibold">
                    {{ competitorColumns[index] }}
                  </p>
                  <p class="text-base text-text-900">{{ value }}</p>
                </div>
              </div>
            </div>

            <!--Takeaway-->
            <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
              <p class="text-brand-primary text-sm font-semibold">Takeaway</p>
              <p class="text-base sm:text-xl font-medium text-text-900">
                {{ competitorTakeaway }}
              </p>
            </div>
          </template>

          <p class="text-base sm:text-xl font-medium text-text-900">
            Using this research, we identified three critical goals required for the solution to
            succeed:
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div
              v-for="goal in goals"
              :key="goal.label"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ goal.label }}</p>
              <h3 class="text-base sm:text-xl font-medium text-text-900">{{ goal.text }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--2 Define-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">2</span> Define
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <!--Insights → HMW → principles-->
        <div v-if="show.insights" class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            From Research to Design Principles
          </h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Three insights from research shaped how I framed the problem.
          </p>

          <!--Desktop table-->
          <div class="hidden md:block rounded-sm bg-neutral-300 overflow-hidden">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-neutral-900 text-neutral-300">
                  <th class="p-6 text-base font-semibold w-1/3">Insight</th>
                  <th class="p-6 text-base font-semibold w-5/12">How might we</th>
                  <th class="p-6 text-base font-semibold">Principle</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-900">
                <tr v-for="row in insights" :key="row.principle">
                  <td class="p-6 text-base text-text-900">{{ row.insight }}</td>
                  <td class="p-6 text-base text-text-900">{{ row.hmw }}</td>
                  <td class="p-6 text-base font-semibold text-brand-primary">
                    {{ row.principle }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--Mobile cards-->
          <div class="md:hidden space-y-4">
            <div
              v-for="row in insights"
              :key="row.principle"
              class="rounded-sm bg-neutral-300 p-5 space-y-3"
            >
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">Insight</p>
                <p class="text-base text-text-900">{{ row.insight }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">How might we</p>
                <p class="text-base text-text-900">{{ row.hmw }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">Principle</p>
                <p class="text-base font-semibold text-text-900">{{ row.principle }}</p>
              </div>
            </div>
          </div>

          <p class="text-base sm:text-xl font-medium text-text-900">
            These principles shaped the dual-funnel flow below.
          </p>
        </div>

        <!--User flow-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">User Flow Architecture</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            To eliminate friction between on-site urgency and administrative tracking, I mapped a
            dual-funnel architecture decoupling instant task completion from account management.
            Field users get an unauthenticated quick-dispatch flow, while office operators access a
            complete cash-flow management hub.
          </p>
          <img
            src="/project_img/invoice/flow.jpg"
            alt="User flow diagram"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />

          <!--Desktop table-->
          <div class="hidden md:block rounded-sm bg-neutral-300 overflow-hidden">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-neutral-900 text-neutral-300">
                  <th class="p-6 text-base font-semibold">Stage</th>
                  <th class="p-6 text-base font-semibold">Guest Flow: Mobile Web (Marcus)</th>
                  <th class="p-6 text-base font-semibold">SaaS Hub: Desktop Web (David)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-900">
                <tr v-for="row in flowRows" :key="row.stage">
                  <td class="p-6 text-base font-semibold text-text-900">{{ row.stage }}</td>
                  <td class="p-6 text-base text-text-900">{{ row.guest }}</td>
                  <td class="p-6 text-base text-text-900">{{ row.saas }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--Mobile cards-->
          <div class="md:hidden space-y-4">
            <div
              v-for="row in flowRows"
              :key="row.stage"
              class="rounded-sm bg-neutral-300 p-5 space-y-3"
            >
              <p class="font-semibold text-text-900">{{ row.stage }}</p>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">
                  Guest Flow: Mobile Web (Marcus)
                </p>
                <p class="text-base text-text-900">{{ row.guest }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">
                  SaaS Hub: Desktop Web (David)
                </p>
                <p class="text-base text-text-900">{{ row.saas }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--3 Ideate & Wireframes-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">3</span> Ideate & Wireframes
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <!--Landing page-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">01. The Dual-Funnel Gateway</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            The layout was architected around a dual-funnel strategy: desktop business owners
            receive clear visual proof, feature deep-dives, and account access, while time-crunched
            mobile contractors get an instant, above-the-fold entry point to start billing without
            mandatory sign-up walls.
          </p>
          <img
            src="/project_img/invoice/paper_landing.jpg"
            alt="Paper wireframes: landing page concepts"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div
              v-for="concept in concepts"
              :key="concept.label"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ concept.label }}</p>
              <h3 class="text-base sm:text-xl font-medium text-text-900">{{ concept.text }}</h3>
            </div>
          </div>
          <div v-if="show.decisions" class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Decision · Landing concept</p>
            <p class="text-base sm:text-xl font-medium text-text-900">{{ landingDecision }}</p>
          </div>
          <img
            src="/project_img/invoice/digital_01.jpg"
            alt="Digital wireframe: landing page"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
        </div>

        <!--Marcus-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            02. Instant Invoicing (Marcus Vance Persona Flow)
          </h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Because Marcus Vance operates almost exclusively from his service van or job site, this
            user flow prioritizes the mobile viewport. The focus is entirely on removing field
            friction: bypassing registration gates and providing large, thumb-accessible touch
            targets so contractors can bill and get paid before leaving the client.
          </p>
          <img
            src="/project_img/invoice/paper_02.jpg"
            alt="Paper wireframes: instant invoicing flow"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
          <div v-if="show.decisions" class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Decision · Mobile Step 2</p>
            <p class="text-base sm:text-xl font-medium text-text-900">{{ marcusDecision }}</p>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
            <p class="text-brand-primary text-sm font-semibold">Approach</p>
            <div class="space-y-4">
              <p
                v-for="item in marcusApproach"
                :key="item.lead"
                class="text-base sm:text-xl font-medium text-text-900"
              >
                <span class="font-bold">{{ item.lead }}</span> {{ item.text }}
              </p>
            </div>
          </div>
        </div>

        <!--David-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            03. Financial Hub & Receivables (David Chen Persona Flow)
          </h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Unlike Marcus’s on-site mobile flow, David Chen manages operations and payroll from a
            desktop office. This flow prioritizes desktop data density. Replacing linear mobile
            steppers with high-level KPI cards and a filterable receivables ledger to eliminate
            cash-flow surprises before Friday payroll.
          </p>
          <img
            src="/project_img/invoice/paper_03.jpg"
            alt="Paper wireframes: financial hub"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
            <p class="text-brand-primary text-sm font-semibold">Approach</p>
            <div class="space-y-4">
              <p
                v-for="item in davidApproach"
                :key="item.lead"
                class="text-base sm:text-xl font-medium text-text-900"
              >
                <span class="font-bold">{{ item.lead }}</span> {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--4 Prototyping & Usability Testing-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">4</span> Low-Fidelity
        Prototyping & Usability Testing
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <!--Methodology-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            Study Methodology & Participant Setup
          </h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Following exploratory paper sketching, low-fidelity digital wireframes were built in
            Figma to connect end-to-end task flows into clickable, interactive prototypes. Before
            committing to high-fidelity visual styling, color tokens, and component libraries, an
            unmoderated usability study was conducted to evaluate navigation logic, ergonomic
            friction, and information architecture.
          </p>

          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
            <p class="text-brand-primary text-sm font-semibold">Approach</p>
            <p class="text-base sm:text-xl font-medium text-text-900">
              The study evaluated two distinct user flows across two unmoderated cohorts (10
              participants total) to validate both sides of the dual-funnel architecture:
            </p>

            <!--Desktop table-->
            <div class="hidden md:block rounded-sm bg-neutral-000 overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-neutral-900 text-neutral-300">
                    <th class="p-6 text-base font-semibold">Group</th>
                    <th class="p-6 text-base font-semibold">Profile & Persona Alignment</th>
                    <th class="p-6 text-base font-semibold">Device & Environment</th>
                    <th class="p-6 text-base font-semibold">Primary Usability Task</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-900">
                  <tr v-for="row in studyRows" :key="row.group">
                    <td class="p-6 text-base font-semibold text-text-900">{{ row.group }}</td>
                    <td class="p-6 text-base text-text-900">{{ row.profile }}</td>
                    <td class="p-6 text-base text-text-900">{{ row.device }}</td>
                    <td class="p-6 text-base text-text-900">{{ row.task }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!--Mobile cards-->
            <div class="md:hidden space-y-4">
              <div
                v-for="row in studyRows"
                :key="row.group"
                class="rounded-sm bg-neutral-000 p-5 space-y-3"
              >
                <p class="font-semibold text-text-900">Group {{ row.group }}</p>
                <div class="space-y-1">
                  <p class="text-brand-primary text-sm font-semibold">
                    Profile & Persona Alignment
                  </p>
                  <p class="text-base text-text-900">{{ row.profile }}</p>
                </div>
                <div class="space-y-1">
                  <p class="text-brand-primary text-sm font-semibold">Device & Environment</p>
                  <p class="text-base text-text-900">{{ row.device }}</p>
                </div>
                <div class="space-y-1">
                  <p class="text-brand-primary text-sm font-semibold">Primary Usability Task</p>
                  <p class="text-base text-text-900">{{ row.task }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Flow A-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Flow A: Rapid Guest Invoicing</h2>
          <img
            src="/project_img/invoice/Prototype_1.jpg"
            alt="Prototype 1"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
        </div>

        <!--Flow B-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            Flow B: Receivables Triage & Payment Recovery
          </h2>
          <img
            src="/project_img/invoice/Prototype_2.jpg"
            alt="Prototype 2"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
        </div>

        <!--Interactive prototype link-->
        <div v-if="prototypeUrl">
          <a
            :href="prototypeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block rounded-sm bg-neutral-900 px-4 py-2 border-3 border-neutral-900 text-text-000 hover:bg-neutral-300 hover:border-neutral-300 hover:text-text-900 transition-all duration-300"
          >
            view interactive prototype →
          </a>
        </div>

        <!--Metrics-->
        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <div
              v-for="metric in metrics"
              :key="metric.label"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ metric.label }}</p>
              <p class="text-3xl sm:text-5xl font-bold text-text-900">{{ metric.value }}</p>
              <p class="text-base sm:text-xl font-bold text-text-900">{{ metric.caption }}</p>
              <p class="text-sm text-text-700">{{ metric.context }}</p>
            </div>
          </div>
          <p class="text-sm sm:text-base text-text-700">{{ metricsNote }}</p>
        </div>

        <!--Findings & iterations-->
        <div v-if="show.findings" class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Findings & iterations</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">{{ findingsIntro }}</p>

          <div
            v-for="issue in findings"
            :key="issue.id"
            class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4"
          >
            <p class="text-brand-primary text-sm font-semibold">
              Issue {{ issue.id }} · {{ issue.severity }} severity · Flow {{ issue.flow }}
            </p>
            <h3 class="text-lg sm:text-2xl font-bold text-text-900">{{ issue.title }}</h3>
            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Evidence:</span> {{ issue.evidence }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div v-for="shot in shots(issue)" :key="shot.label" class="space-y-2">
                <p class="text-sm font-semibold text-text-700">{{ shot.label }}</p>
                <img
                  v-if="shot.src"
                  :src="shot.src"
                  :alt="`${shot.label}: ${issue.title}`"
                  loading="lazy"
                  class="w-full h-auto rounded-sm"
                />
                <div
                  v-else
                  class="aspect-video rounded-sm border-2 border-dashed border-neutral-900/40 flex items-center justify-center text-sm text-text-700"
                >
                  screenshot
                </div>
              </div>
            </div>

            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Change:</span> {{ issue.change }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--5 High-Fidelity UI & Visual System-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">5</span> High-Fidelity UI &
        Visual System
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <!--Design system foundations-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Design System Foundations</h2>

          <img
            v-if="foundationsBoard"
            :src="foundationsBoard"
            alt="Design system overview"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />

          <!--Typography-->
          <h3 class="text-lg sm:text-2xl font-bold text-text-900">Typography</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div
              v-for="item in typeRoles"
              :key="item.font"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ item.role }}</p>
              <p class="text-2xl sm:text-4xl font-bold text-text-900">{{ item.font }}</p>
              <p class="text-sm sm:text-base font-medium text-text-900">{{ item.note }}</p>
            </div>
          </div>

          <!--Color-->
          <h3 class="text-lg sm:text-2xl font-bold text-text-900">Color</h3>
          <div class="grid grid-cols-1 gap-4 sm:gap-6">
            <div
              v-for="group in colorGroups"
              :key="group.title"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4"
            >
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p class="text-brand-primary text-sm font-semibold">{{ group.title }}</p>
                <p class="text-sm text-text-700">{{ group.note }}</p>
              </div>
              <div class="flex flex-wrap items-start gap-4">
                <div
                  v-for="color in group.colors"
                  :key="color.token"
                  class="w-24 sm:w-28 space-y-2"
                >
                  <div
                    class="h-14 w-full rounded-sm border border-neutral-900/20"
                    :style="{ backgroundColor: color.hex }"
                  ></div>
                  <div class="space-y-0.5">
                    <p class="text-sm font-semibold text-text-900 leading-tight">
                      {{ color.name }}
                    </p>
                    <p class="text-xs text-text-700">{{ color.hex }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-sm sm:text-base text-text-700">
            Every color is a named design token, for example
            <span class="font-semibold">brand-primary</span> and
            <span class="font-semibold">status-paid-text</span>.
          </p>

          <!--Layout grid-->
          <h3 class="text-lg sm:text-2xl font-bold text-text-900">Layout Grid</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div
              v-for="grid in layoutGrids"
              :key="grid.device"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ grid.device }}</p>
              <p class="text-3xl sm:text-5xl font-bold text-text-900">{{ grid.columns }}</p>
              <p class="text-base sm:text-xl font-bold text-text-900">columns</p>
              <p class="text-sm sm:text-base text-text-700">
                Margin {{ grid.margin }} · Gutter {{ grid.gutter }}
              </p>
            </div>
          </div>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Every layout sits on an 8px grid, with 48px touch targets in the primary thumb zones.
          </p>
        </div>

        <!--Marcus-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            Marcus Vance: Mobile Field Invoicing (390px)
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div
              v-for="screen in marcusScreens"
              :key="screen.step"
              class="rounded-sm bg-neutral-300 p-5 sm:p-6 space-y-3"
            >
              <img
                v-if="screen.img"
                :src="screen.img"
                :alt="`Step ${screen.step}: ${screen.title}`"
                loading="lazy"
                class="w-full h-auto rounded-sm"
              />
              <div
                v-else
                class="aspect-[9/16] rounded-sm border-2 border-dashed border-neutral-900/40 flex items-center justify-center text-sm text-text-700"
              >
                screen
              </div>
              <p class="text-brand-primary text-sm font-semibold">Step {{ screen.step }}</p>
              <h3 class="text-base sm:text-xl font-bold text-text-900">{{ screen.title }}</h3>
              <p class="text-sm sm:text-base font-medium text-text-900">{{ screen.text }}</p>
            </div>
          </div>
        </div>

        <!--David-->
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">
            David Chen: Desktop Receivables Hub (1440px)
          </h2>
          <img
            v-if="davidScreen"
            :src="davidScreen"
            alt="Desktop receivables hub"
            loading="lazy"
            class="w-full h-auto rounded-sm"
          />
          <div
            v-else
            class="aspect-video rounded-sm border-2 border-dashed border-neutral-900/40 flex items-center justify-center text-sm text-text-700"
          >
            desktop screen
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div
              v-for="feature in davidFeatures"
              :key="feature.label"
              class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
            >
              <p class="text-brand-primary text-sm font-semibold">{{ feature.label }}</p>
              <h3 class="text-base sm:text-xl font-medium text-text-900">{{ feature.text }}</h3>
            </div>
          </div>

          <div
            v-if="ledgerBefore && ledgerAfter"
            class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            <div class="space-y-2">
              <p class="text-sm font-semibold text-text-700">Lo-fi: flat table</p>
              <img
                :src="ledgerBefore"
                alt="Lo-fi ledger"
                loading="lazy"
                class="w-full h-auto rounded-sm"
              />
            </div>
            <div class="space-y-2">
              <p class="text-sm font-semibold text-text-700">Hi-fi: KPI cards + row tints</p>
              <img
                :src="ledgerAfter"
                alt="Hi-fi ledger"
                loading="lazy"
                class="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--6 Outcomes & Strategic Learnings-->
    <section class="space-y-8 sm:space-y-12">
      <h2
        class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm text-center md:text-start"
      >
        <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">6</span> Outcomes &
        Strategic Learnings
      </h2>

      <div class="space-y-10 sm:space-y-14">
        <div class="space-y-4 sm:space-y-6">
          <h2 class="text-xl sm:text-3xl font-bold text-text-900">Results → Design Decisions</h2>
          <p class="text-base sm:text-xl font-medium text-text-900">
            Each finding from testing maps to a decision in the high-fidelity design.
          </p>

          <!--Desktop table-->
          <div class="hidden md:block rounded-sm bg-neutral-300 overflow-hidden">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-neutral-900 text-neutral-300">
                  <th class="p-6 text-base font-semibold w-5/12">Finding</th>
                  <th class="p-6 text-base font-semibold w-2/12">Evidence</th>
                  <th class="p-6 text-base font-semibold">Design response</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-900">
                <tr v-for="row in outcomeRows" :key="row.finding">
                  <td class="p-6 text-base text-text-900">{{ row.finding }}</td>
                  <td class="p-6 text-base text-text-900">{{ row.evidence }}</td>
                  <td class="p-6 text-base font-semibold text-brand-primary">{{ row.response }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--Mobile cards-->
          <div class="md:hidden space-y-4">
            <div
              v-for="row in outcomeRows"
              :key="row.finding"
              class="rounded-sm bg-neutral-300 p-5 space-y-3"
            >
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">Finding</p>
                <p class="text-base text-text-900">{{ row.finding }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">Evidence</p>
                <p class="text-base text-text-900">{{ row.evidence }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-brand-primary text-sm font-semibold">Design response</p>
                <p class="text-base font-semibold text-text-900">{{ row.response }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">
              Limitations & what I'd do differently
            </p>
            <p class="text-base sm:text-xl font-medium text-text-900">{{ limitations }}</p>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Next steps</p>
            <ul class="list-disc pl-5 space-y-2 text-base sm:text-xl font-medium text-text-900">
              <li v-for="step in nextSteps" :key="step">{{ step }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--Image lightbox-->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightbox"
          class="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          @click="closeLightbox"
        >
          <button
            type="button"
            aria-label="Close image"
            class="absolute top-4 right-4 text-4xl sm:text-6xl text-neutral-000 hover:text-brand-primary"
            @click.stop="closeLightbox"
          >
            x
          </button>
          <img
            :src="lightbox.src"
            :alt="lightbox.alt"
            class="max-w-full max-h-full object-contain rounded-sm"
          />
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.summary-grid {
  grid-template-areas: 'challenge' 'solutions' 'image' 'takeaways';
}

@media (min-width: 768px) {
  .summary-grid {
    grid-template-areas: 'challenge solutions' 'image takeaways';
    grid-template-rows: auto 1fr;
  }
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
