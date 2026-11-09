export interface Step {
  title: string;
  detail: string;
}

export interface Engagement {
  title: string;
  detail: string;
}

export const processSteps: Step[] = [
  {
    title: 'We talk it through',
    detail:
      'You tell me what you need, who it is for and what already exists. A rough outline or a few reference sites is enough.',
  },
  {
    title: 'I send a written scope',
    detail:
      'Deliverables, milestones, timeline and an estimate. Nothing starts until we have both agreed to it.',
  },
  {
    title: 'I build in small steps',
    detail: 'You see working progress regularly, so feedback comes early rather than at the end.',
  },
  {
    title: 'We test and refine',
    detail:
      'I check it across browsers and screen sizes, fix what comes up and work through your feedback.',
  },
  {
    title: 'I hand it over',
    detail: 'You get the finished work, the source code and short notes on how it fits together.',
  },
];

export const engagements: Engagement[] = [
  {
    title: 'A fixed-scope project',
    detail: 'For a website, a dashboard or a defined feature. One quote for the agreed scope.',
  },
  {
    title: 'Ongoing support',
    detail: 'A set number of hours each month for fixes, small features and updates.',
  },
  {
    title: 'Agency work',
    detail: 'Angular tickets or features as part of your team, on your process and tools.',
  },
];
