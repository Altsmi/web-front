import type { Project } from '@/data/uxProjects'

export const kinfolk: Project = {
  slug: 'kinfolk-health',
  title: 'Kinfolk Health',
  summary:
    'A booking website and design system for a fictional family clinic. I built the system first, used it to design a four-step booking flow, then tested the flow with 10 people.',
  tags: ['Design system', 'Wireframing', 'Prototyping', 'Usability testing'],
  year: '2026',
  image: '/kinfolk/cover.jpg',
  alt: 'Kinfolk Health home page on desktop',
  featured: true,
  role: 'Product and UX/UI Designer',
  timeline: '2 weeks',
  tools: ['Figma', 'FigJam'],
  type: 'Solo concept project',

  overview: {
    challenge:
      'Booking a clinic visit often means phoning during office hours or making an account first.',
    solution:
      'A four-step booking flow with no account, built on a design system of 18 components.',
    result: 'All 10 testers booked a visit. 8 of 10 had no trouble, and nobody asked for help.',
  },

  glance: [
    { value: '18', label: 'Components' },
    { value: '32', label: 'Icons' },
    { value: '8', label: 'Desktop screens' },
    { value: '10 of 10', label: 'Booked a visit' },
  ],

  decisions: [
    {
      title: 'Service as a dropdown, not radio buttons',
      change:
        'A dropdown still works when the clinic adds more services. A radio list would get long.',
      after: {
        src: '/kinfolk/decision-select.jpg',
        alt: 'Service dropdown in default, filled, error and focus states',
      },
    },
    {
      title: 'The doctor tag shows specialty only',
      change:
        'Whether a doctor takes new patients is plain text under the name, so the tag does one job.',
      after: {
        src: '/kinfolk/decision-tag.jpg',
        alt: 'Three doctor cards with a name, a short line and a specialty tag',
      },
    },
    {
      title: 'No account needed',
      change:
        'The flow never asks for a password. People told me they don’t want one just to book.',
      after: {
        src: '/kinfolk/book-3-details.jpg',
        alt: 'Booking step 3 asking for name, email and phone only',
      },
    },
  ],

  phases: [
    {
      id: 'problem',
      number: 1,
      title: 'Problem',
      takeaway:
        'Booking a visit often means phoning during office hours or making an account first.',
      points: [
        'Goal: book a visit in four steps, with no account',
        'Works on desktop and on a phone',
        'I worked alone: system, flows, screens and testing',
      ],
      details: [],
    },

    {
      id: 'foundations',
      number: 2,
      title: 'Foundations',
      takeaway: 'I built the system first so every screen would use the same parts.',
      points: [
        'Soft green, with grays and four message colors',
        'Every text and button pair meets AA contrast. Body text meets AAA.',
        'One typeface, Inter, with a desktop and a mobile type scale',
      ],
      visual: [
        {
          src: '/kinfolk/color.jpg',
          alt: 'Color palette: green scale, gray scale and status colors',
        },
      ],
      defaultOpen: true,
      details: [
        {
          type: 'text',
          topic: 'Color and contrast',
          heading: 'Color and contrast',
          body: [
            'Soft green is the main color. I added a gray scale and error, success, warning and info colors. Every text and button pair I use meets AA contrast, and body text meets AAA. The ratios are listed in the board.',
          ],
          image: {
            src: '/kinfolk/contrast.jpg',
            alt: 'Contrast ratios for text, actions and status colors',
          },
        },
        {
          type: 'text',
          topic: 'Type',
          heading: 'Type',
          body: [
            'I used Inter. H1 is 48 on desktop and 36 on mobile. Body text is 16. Each size has one job, like page title or helper text.',
          ],
          image: { src: '/kinfolk/type.jpg', alt: 'Type scale for desktop and mobile' },
        },
        {
          type: 'text',
          topic: 'Grid and spacing',
          heading: 'Grid and spacing',
          body: [
            'Desktop uses 12 columns, tablet 8 and mobile 4. Spacing goes from 4 to 96 in fixed steps, so I never guessed a gap.',
          ],
          image: { src: '/kinfolk/grid.jpg', alt: 'Spacing steps and grid specs by device' },
        },
        {
          type: 'text',
          topic: 'Radius and elevation',
          heading: 'Radius and elevation',
          body: [
            'Four corner sizes and three shadow levels. Cards rest flat with a border and only lift on hover, in menus and in the date picker.',
          ],
          image: { src: '/kinfolk/radius.jpg', alt: 'Radius values and elevation levels' },
        },
        {
          type: 'text',
          topic: 'Icons',
          heading: 'Icons',
          body: [
            '32 icons in three sizes: 16, 20 and 24. They cover navigation, contact details, booking and messages.',
          ],
          image: { src: '/kinfolk/icons.jpg', alt: 'The 32 icons grouped by use' },
        },
      ],
    },

    {
      id: 'components',
      number: 3,
      title: 'Components',
      takeaway: '18 components, grouped by what they do.',
      points: [
        'Most have clear states: default, hover, pressed, focus and disabled',
        'Fields and dropdowns also have an error state',
        'Five booking parts were built just for this flow',
      ],
      visual: [
        {
          src: '/kinfolk/comp-buttons.jpg',
          alt: 'Buttons in three types, two sizes and every state',
        },
      ],
      defaultOpen: true,
      details: [
        {
          type: 'text',
          topic: 'Inputs',
          heading: 'Inputs',
          body: [
            'Buttons come in three types and two sizes. Fields show help text and errors. The service field is a dropdown, so it still works when more services are added.',
          ],
          image: { src: '/kinfolk/comp-fields.jpg', alt: 'Text field states' },
        },
        {
          type: 'images',
          columns: 2,
          items: [
            { src: '/kinfolk/comp-checkbox-radio.jpg', alt: 'Checkbox and radio states' },
            { src: '/kinfolk/comp-select.jpg', alt: 'Dropdown and option states' },
          ],
        },
        {
          type: 'text',
          topic: 'Cards',
          heading: 'Cards',
          body: [
            'Service cards show the visit, how long it takes and two actions. Doctor cards add a photo, a name, one short line and a specialty tag.',
          ],
          image: {
            src: '/kinfolk/comp-cards.jpg',
            alt: 'Service and doctor cards in three states',
          },
        },
        {
          type: 'text',
          topic: 'Booking parts',
          heading: 'Booking parts',
          body: [
            'The time slot has five states. Unavailable times are crossed out, so they don’t rely on color alone. The date picker shows today, selected and unavailable days. The stepper shows what is done and where you are.',
          ],
          image: { src: '/kinfolk/comp-booking-time-slot.jpg', alt: 'Time slot states' },
        },
        {
          type: 'images',
          columns: 2,
          items: [
            { src: '/kinfolk/comp-booking-slots-date.jpg', alt: 'Slot group and date picker' },
            { src: '/kinfolk/comp-booking-stepper.jpg', alt: 'Step and stepper states' },
            { src: '/kinfolk/comp-booking-summary.jpg', alt: 'Booking summary' },
            {
              src: '/kinfolk/comp-booking-confirmation.jpg',
              alt: 'Confirmation block on desktop and mobile',
              tall: true,
            },
          ],
        },
        {
          type: 'text',
          topic: 'Navigation',
          heading: 'Navigation',
          body: [
            'A desktop header with a Services dropdown, a mobile menu that opens and closes, and a footer.',
          ],
          image: {
            src: '/kinfolk/comp-nav.jpg',
            alt: 'Desktop header, dropdown, mobile menu and links',
          },
        },
        {
          type: 'text',
          topic: 'Feedback',
          heading: 'Feedback',
          body: [
            'Alerts sit in the page. Toasts show short messages. Tags label things like a doctor’s specialty. Each comes in success, error, warning and info.',
          ],
          image: { src: '/kinfolk/comp-feedback.jpg', alt: 'Alerts, toasts and tags' },
        },
      ],
    },

    {
      id: 'structure',
      number: 4,
      title: 'Structure and flows',
      takeaway: 'Five main pages and one short booking path.',
      points: [
        'Booking is four steps and a confirmation',
        'Two checks can send you back: no time available, or details that don’t pass',
        'Grayscale wireframes for all 8 screens before any color',
      ],
      visual: [{ src: '/kinfolk/flow.jpg', alt: 'Booking flow with two decision points' }],
      defaultOpen: true,
      details: [
        {
          type: 'text',
          topic: 'Sitemap',
          heading: 'Sitemap',
          body: [
            'Home plus five main pages: Services, Doctors, Book appointment, About and Contact. Services and Doctors have sub-pages, and booking has its five steps.',
          ],
          image: { src: '/kinfolk/sitemap.jpg', alt: 'Sitemap of the clinic website' },
        },
        {
          type: 'text',
          topic: 'Booking flow',
          heading: 'Booking flow',
          body: [
            'The flow has two checks. If no time is free, the person sees other times or dates. If details don’t pass, they see errors beside the fields. Either way, they stay on the step.',
          ],
          image: { src: '/kinfolk/flow.jpg', alt: 'Booking flow from start to booking confirmed' },
        },
        {
          type: 'images',
          topic: 'Wireframes',
          heading: 'Wireframes',
          columns: 2,
          items: [
            { src: '/kinfolk/wire-home.jpg', alt: 'Home wireframe', caption: 'Home', tall: true },
            {
              src: '/kinfolk/wire-doctors.jpg',
              alt: 'Doctors wireframe',
              caption: 'Doctors',
              tall: true,
            },
            {
              src: '/kinfolk/wire-book-2.jpg',
              alt: 'Date and time wireframe',
              caption: 'Date and time',
            },
            { src: '/kinfolk/wire-book-3.jpg', alt: 'Details wireframe', caption: 'Details' },
          ],
        },
      ],
    },

    {
      id: 'screens',
      number: 5,
      title: 'Final screens',
      takeaway: 'Eight desktop screens and three mobile screens, all built from the system.',
      points: [
        'Desktop: Home, Services, Doctors and the five booking screens',
        'Mobile: Home, date and time, and confirmation',
        'Mobile covers part of the flow, to keep the scope to two weeks',
      ],
      defaultOpen: true,
      details: [
        {
          type: 'images',
          topic: 'Home',
          heading: 'Home',
          columns: 1,
          items: [{ src: '/kinfolk/home.jpg', alt: 'Home page on desktop', tall: true }],
        },
        {
          type: 'images',
          topic: 'Services and doctors',
          heading: 'Services and doctors',
          columns: 2,
          items: [
            { src: '/kinfolk/services.jpg', alt: 'Services page on desktop', caption: 'Services' },
            {
              src: '/kinfolk/doctors.jpg',
              alt: 'Doctors page on desktop',
              caption: 'Doctors',
              tall: true,
            },
          ],
        },
        {
          type: 'images',
          topic: 'Booking',
          heading: 'Booking',
          columns: 2,
          items: [
            {
              src: '/kinfolk/book-1-service.jpg',
              alt: 'Booking step 1: service',
              caption: '1 · Service',
            },
            {
              src: '/kinfolk/book-2-date-time.jpg',
              alt: 'Booking step 2: date and time',
              caption: '2 · Date and time',
            },
            {
              src: '/kinfolk/book-3-details.jpg',
              alt: 'Booking step 3: your details',
              caption: '3 · Your details',
            },
            {
              src: '/kinfolk/book-4-review.jpg',
              alt: 'Booking step 4: review',
              caption: '4 · Review',
            },
            {
              src: '/kinfolk/book-5-confirmation.jpg',
              alt: 'Booking confirmed',
              caption: 'Confirmation',
            },
          ],
        },
        {
          type: 'images',
          topic: 'Mobile',
          heading: 'Mobile',
          columns: 3,
          items: [
            {
              src: '/kinfolk/home-mobile-top.jpg',
              alt: 'Home page on a phone, top of the page',
              caption: 'Home (top)',
            },
            {
              src: '/kinfolk/book-2-mobile.jpg',
              alt: 'Date and time on a phone',
              caption: 'Date and time',
            },
            {
              src: '/kinfolk/book-5-mobile.jpg',
              alt: 'Confirmation on a phone',
              caption: 'Confirmation',
            },
          ],
        },
      ],
    },

    {
      id: 'research',
      number: 6,
      title: 'Research and testing',
      takeaway: 'I checked my guesses after building, and people agreed with them.',
      points: ['10 people tested the booking flow', '10 of 10 booked a visit', '0 asked for help'],
      defaultOpen: true,
      details: [
        {
          type: 'text',
          topic: 'My guesses',
          heading: 'My three guesses',
          body: [
            'Before I built the screens, I guessed three things: people want to book without an account, four steps is enough, and a calendar with time slots is the easiest way to pick a time.',
            'I checked these afterwards. So this tests my guesses. It is not research I started from.',
          ],
        },
        {
          type: 'text',
          topic: 'What people said',
          heading: 'What people said',
          body: [
            'I looked at a few real clinic and appointment sites and asked a small group of people how they book a doctor, a dentist or a hair appointment. Most call, or use a site with no account. Nobody expected to make a password just to book.',
            'The four steps matched what they expected too: pick what you need, pick a time, give your details, confirm. Nobody asked for insurance or medical history up front.',
          ],
        },
        {
          type: 'text',
          topic: 'Usability test',
          heading: 'How I tested',
          body: [
            'I tested the booking flow prototype with 10 people, unmoderated. They did it on their own, and I wasn’t watching live.',
            'The task: book a visit for a general checkup, with no other instructions. I wasn’t asking about colors or layout. I wanted to see if people could get from “I need an appointment” to “it’s booked” without getting stuck.',
          ],
        },
        {
          type: 'table',
          heading: 'Results',
          columns: ['Result', 'People'],
          rows: [
            ['Finished the booking', '10 of 10'],
            ['Finished with no trouble', '8 of 10'],
            ['Finished, but took longer', '2 of 10'],
            ['Asked for help', '0 of 10'],
          ],
          note: '2 people took longer. They re-read the time slots and checked the summary twice before moving on. Both finished and said they were happy with how it went.',
        },
        {
          type: 'text',
          topic: 'What I’d do differently',
          heading: 'What I’d do differently',
          body: [
            'I’d research first. I built the system before testing, so I tested my guesses instead of starting from what people said.',
            'Next, I’d check if the 2 slower testers move faster the second time they use it.',
          ],
        },
      ],
    },

    {
      id: 'next',
      number: 7,
      title: 'Next steps',
      takeaway: 'The flow works. These are the next things to build and test.',
      points: [
        'Test again with the 2 slower testers, to see if they’re faster the second time',
        'Build the remaining mobile screens',
        'Decide if each service needs its own page',
      ],
      details: [],
    },
  ],
}
