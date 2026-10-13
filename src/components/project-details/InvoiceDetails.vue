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

const metrics = [
  { label: 'Mobile Task Completion', value: '1m 42s', caption: 'Average Mobile Dispatch' },
  { label: 'Baseline Scanning Time', value: '14s', caption: 'Initial Table Navigation' },
  { label: 'Product-Led Growth Onboarding', value: '60%', caption: 'Post-Dispatch Conversion' },
]
</script>

<template>
  <section class="space-y-12 sm:space-y-20 pt-6 [&_img]:cursor-zoom-in" @click="handleImageClick">
    <!--Project Specs-->
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
            src="/project_img/invoice/Presentation_02.jpg"
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

      <div class="space-y-4 sm:space-y-6">
        <h2 class="text-xl sm:text-3xl font-bold text-text-900">User Flow Architecture</h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          To eliminate friction between on-site urgency and administrative tracking, I mapped a
          dual-funnel architecture decoupling instant task completion from account management. Field
          users get an unauthenticated quick-dispatch flow, while office operators access a complete
          cash-flow management hub.
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
              <p class="text-brand-primary text-sm font-semibold">SaaS Hub: Desktop Web (David)</p>
              <p class="text-base text-text-900">{{ row.saas }}</p>
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

        <!--Metrics-->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3"
          >
            <p class="text-brand-primary text-sm font-semibold">{{ metric.label }}</p>
            <p class="text-3xl sm:text-5xl font-bold text-text-900">{{ metric.value }}</p>
            <p class="text-base sm:text-xl font-bold text-text-900">{{ metric.caption }}</p>
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
