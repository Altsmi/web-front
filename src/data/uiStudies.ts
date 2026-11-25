export interface StudyFrame {
  id: string
  label: string
  src: string
  alt: string
}

export interface StudyNote {
  label: string
  text: string
}

export interface UiStudy {
  id: string
  number: number
  title: string
  intro: string
  problem: string
  decision: string
  notes: StudyNote[]
  video: { src: string; poster: string; label: string }
  frames: StudyFrame[]
}

export const uiStudies: UiStudy[] = [
  {
    id: 'assign-task',
    number: 1,
    title: 'Assign task modal',
    intro:
      'A modal from a team task app. A lead or senior teammate uses it to give work to someone, with a deadline, priority and reminder.',
    problem:
      'In team chat, a request like “can you do this?” has no owner, no deadline and no reminder, so it’s easy to forget.',
    decision:
      'The assignee list shows how many tasks each person already has, so a lead can see who has room before assigning.',
    notes: [
      {
        label: 'Reminder',
        text: 'Reminders are a required choice, so a deadline is never left to memory. Opting out takes one tap.',
      },
      {
        label: 'Priority',
        text: 'Priority uses a colored dot and a word, so it’s readable without color.',
      },
      {
        label: 'Confirmation',
        text: 'The confirmation says the teammate has been notified, so the lead knows they don’t need to follow up.',
      },
    ],
    video: {
      src: '/ui-studies/assign-task/assign-task.mp4',
      poster: '/ui-studies/assign-task/poster.jpg',
      label: 'Assigning a task: open the modal, fill it in, assign, and see the confirmation',
    },
    frames: [
      {
        id: 'wireframe',
        label: 'Wireframe',
        src: '/ui-studies/assign-task/wireframe.jpg',
        alt: 'Wireframe of the assign task modal with seven numbered parts',
      },
      {
        id: 'typography',
        label: 'Typography',
        src: '/ui-studies/assign-task/typography.jpg',
        alt: 'Type styles for the modal: Anonymous Pro for titles, labels and inputs',
      },
      {
        id: 'grid',
        label: 'Grid & spacing',
        src: '/ui-studies/assign-task/grid-spacing.jpg',
        alt: 'Grid and spacing: 28 padding, 24 section gap, 16 gutter and two columns',
      },
      {
        id: 'components',
        label: 'Components',
        src: '/ui-studies/assign-task/components.jpg',
        alt: 'Components used in the modal: fields, chips, buttons, date picker, dropdown and confirmation',
      },
    ],
  },
]
