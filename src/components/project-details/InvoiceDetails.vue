<script setup lang="ts"></script>

<template>
  <section class="space-y-12 sm:space-y-20 pt-6">
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
          <!--Need to change-->
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
            <h3 class="text-3xl sm:text-5xl font-bold text-text-900">47%</h3>
            <p class="text-sm sm:text-lg font-medium text-text-900">
              <span class="font-bold">Post-Task Account Creation Rate.</span> In moderated prototype
              testing, 47% of test participants opted to create an account when prompted with the
              "Save to Hub" screen immediately after dispatching their invoice, validating the
              value-first onboarding strategy.
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

    <!--Research Section-->
    <section class="space-y-6 sm:space-y-8">
      <!--Name of the section-->
      <div class="text-center md:text-start py-5">
        <h2
          class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100 rounded-sm"
        >
          <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">1</span> Research
        </h2>
      </div>
      <!--Persona-->
      <div class="space-y-4 sm:space-y-6">
        <h2 class="text-xl sm:text-3xl font-bold text-text-900">Persona</h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          This section introduces user personas developed from qualitative discovery sessions,
          highlighting the operational divide in trade services. These personas anchor the design
          decisions by capturing the distinct workflows of users. From independent field technicians
          needing rapid, on-site mobile dispatch to business owners managing cash flow and overdue
          receivables from a desktop office.
        </p>
        <!--Personas images-->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <img
            src="/project_img/invoice/Persona_1.jpg"
            alt="Persona 1"
            class="w-full h-auto rounded-sm"
          />
          <img
            src="/project_img/invoice/Persona_3.jpg"
            alt="Persona 2"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <!--Competitive analysis-->
        <h2 class="text-xl sm:text-3xl font-bold text-text-900">Competitive analysis</h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          Conducted a targeted competitive analysis to benchmark against leading invoicing tools,
          focusing on onboarding friction, mobile ergonomics, and financial tracking clarity. Using
          this research, we identified three critical goals required for the solution to succeed:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">1. Frictionless Task Speed</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Users prioritize rapid, low-friction document creation over deep accounting
              configurations, indicating an urgent need for an unauthenticated, instant-dispatch
              workflow on mobile web.
            </h3>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">2. Accessible Field Ergonomics</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Adhering to WCAG AAA contrast ratios and 48px touch targets prevents data-entry errors
              when trade contractors input numbers under direct outdoor sunlight.
            </h3>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">3. High-Level Cash Flow Clarity</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Business owners demand immediate visibility into outstanding versus collected revenue,
              emphasizing the need for at-a-glance receivables snapshot cards and automated payment
              status tracking.
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!--Define Section-->
    <section class="space-y-6 sm:space-y-8">
      <!--Name of the section-->
      <div class="text-center md:text-start py-5">
        <h2 class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100">
          <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">2</span> Define
        </h2>
      </div>
      <!--Persona-->
      <div class="space-y-4 sm:space-y-6">
        <h2 class="text-xl sm:text-3xl font-bold text-text-900">User Flow Architecture</h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          To eliminate friction between on-site urgency and administrative tracking, I mapped a
          dual-funnel architecture decoupling instant task completion from account management. Field
          users get an unauthenticated quick-dispatch flow, while office operators access a complete
          cash-flow management hub.
        </p>
        <!--Userflow image-->
        <div>
          <img
            src="/project_img/invoice/flow.jpg"
            alt="Persona 1"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <div class="rounded-sm bg-neutral-300 overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-neutral-900 text-neutral-300">
                <th class="p-4 sm:p-6 text-sm sm:text-base font-semibold">Stage</th>
                <th class="p-4 sm:p-6 text-sm sm:text-base font-semibold">
                  Guest Flow: Mobile Web (Marcus)
                </th>
                <th class="p-4 sm:p-6 text-sm sm:text-base font-semibold">
                  SaaS Hub: Desktop Web (David)
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-000">
              <tr>
                <td class="p-4 sm:p-6 text-sm sm:text-base font-semibold text-text-900">
                  User Intent
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Send a quick job bill in under 2 minutes.
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Review weekly cash flow and payroll readiness.
                </td>
              </tr>
              <tr>
                <td class="p-4 sm:p-6 text-sm sm:text-base font-semibold text-text-900">
                  Authentication
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Zero-friction bypass (no password/signup).
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Secure business login.
                </td>
              </tr>
              <tr>
                <td class="p-4 sm:p-6 text-sm sm:text-base font-semibold text-text-900">
                  Primary Action
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Single-column form with pre-saved line items.
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Multi-column table with status filters & metrics.
                </td>
              </tr>
              <tr>
                <td class="p-4 sm:p-6 text-sm sm:text-base font-semibold text-text-900">
                  Completion
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Direct SMS/e-mail dispatch.
                </td>
                <td class="p-4 sm:p-6 text-sm sm:text-base text-text-900">
                  Automated batch reminders and ledger updates.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!--Ideate & Wireframes-->
    <section class="space-y-6 sm:space-y-8">
      <!--Name of the section-->
      <div class="text-center md:text-start py-5">
        <h2 class="text-2xl sm:text-4xl font-bold font-header text-text-900 p-5 bg-orange-100">
          <span class="bg-brand-primary text-neutral-000 px-4 rounded-sm">3</span> Ideate &
          Wireframes
        </h2>
      </div>
      <div class="space-y-4 sm:space-y-6">
        <!--Landing Page-->
        <h2 class="text-xl sm:text-3xl font-bold text-text-900">01. The Dual-Funnel Gateway</h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          The layout was architected around a dual-funnel strategy: desktop business owners receive
          clear visual proof, feature deep-dives, and account access, while time-crunched mobile
          contractors get an instant, above-the-fold entry point to start billing without mandatory
          sign-up walls.
        </p>
        <!--paper wireframe-->
        <div>
          <img
            src="/project_img/invoice/paper_landing.jpg"
            alt="paper landing"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Concept 1</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Single-column centered layout. Clean, but left excessive dead space on desktop and
              pushed social proof below the fold.
            </h3>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Concept 2</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              50/50 split pairing copy on the left with a product preview frame on the right.
              Balanced messaging with visual demonstration.
            </h3>
          </div>
          <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-3">
            <p class="text-brand-primary text-sm font-semibold">Concept 3</p>
            <h3 class="text-base sm:text-xl font-medium text-text-900">
              Refined hero layout pairing high-contrast CTAs with an expanded preview container,
              anchored by a 3-pillar metric bar.
            </h3>
          </div>
        </div>
        <div>
          <img
            src="/project_img/invoice/digital_01.jpg"
            alt="digital landing"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <!--Marcus-->
        <h2 class="text-xl sm:text-3xl font-bold text-text-900 pt-10">
          02. Instant Invoicing (Marcus Vance Persona Flow)
        </h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          Because Marcus Vance operates almost exclusively from his service van or job site, this
          user flow prioritizes the mobile viewport. The focus is entirely on removing field
          friction: bypassing registration gates and providing large, thumb-accessible touch targets
          so contractors can bill and get paid before leaving the client.
        </p>
        <div>
          <img
            src="/project_img/invoice/paper_02.jpg"
            alt="digital landing"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
          <p class="text-brand-primary text-sm font-semibold">Approach</p>
          <div class="space-y-4">
            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Physical Invoice Anatomy Informs the Digital Stepper:</span>
              Traditional paper bills follow a universally understood layout—header information at
              the top, itemized rates in the center, and totals with payment terms at the base.
              Translating this physical structure into a linear three-step mobile form leverages
              familiar mental models, allowing contractors to complete bills rapidly without needing
              to learn a new interface.
            </p>
            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Responsive Adaptation Beyond Screen Scaling:</span>
              Responsive design for field operations is ergonomic, not just visual. Instead of
              shrinking desktop data tables into dense, hard-to-read mobile spreadsheets, the mobile
              layout adapts complex calculations into thumb-friendly 48px touch targets, quick-add
              modal triggers, and an anchored thumb-zone action bar engineered for one-handed use
              outdoors.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/project_img/invoice/digital_02.jpg"
            alt="digital landing"
            class="w-full h-auto rounded-sm"
          />
        </div>

        <!--David-->
        <h2 class="text-xl sm:text-3xl font-bold text-text-900 pt-10">
          03. Financial Hub & Receivables (David Chen Persona Flow)
        </h2>
        <p class="text-base sm:text-xl font-medium text-text-900">
          Unlike Marcus’s on-site mobile flow, David Chen manages operations and payroll from a
          desktop office. This flow prioritizes desktop data density. Replacing linear mobile
          steppers with high-level KPI cards and a filterable receivables ledger to eliminate
          cash-flow surprises before Friday payroll.
        </p>
        <div>
          <img
            src="/project_img/invoice/paper_03.jpg"
            alt="paper"
            class="w-full h-auto rounded-sm"
          />
        </div>
        <div class="rounded-sm bg-neutral-300 p-5 sm:p-8 space-y-4">
          <p class="text-brand-primary text-sm font-semibold">Approach</p>
          <div class="space-y-4">
            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Summary First, Details Second:</span>
              Small business owners shouldn't have to scroll through dozens of invoice rows just to
              check their financial health. We anchored three clear metric cards at the top so David
              can see his total outstanding balance and payroll readiness the moment he opens the
              hub.
            </p>
            <p class="text-base sm:text-xl font-medium text-text-900">
              <span class="font-bold">Turning Records into Action:</span>
              A dashboard shouldn't just be a digital filing cabinet of past PDFs. We gave overdue
              invoices high-contrast warning badges and built a one-click reminder button so David
              can nudge late clients directly from the table without awkward phone calls.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/project_img/invoice/digital_03.jpg"
            alt="paper"
            class="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </section>
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
</style>
