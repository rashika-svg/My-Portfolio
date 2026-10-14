export interface ProcessStep {
  title: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discuss requirements',
    detail:
      'We talk through what you need, who it is for and what already exists. A rough outline or a few reference sites is enough to start.',
  },
  {
    title: 'Agree on scope and timeline',
    detail:
      'You get a written scope with deliverables, milestones and an estimate. Work starts once we have both agreed on it.',
  },
  {
    title: 'Build and share progress',
    detail:
      'I build in small steps and share working progress regularly, so you can give feedback early instead of waiting for the end.',
  },
  {
    title: 'Test and refine',
    detail:
      'I test across browsers and screen sizes, fix what comes up and work through your feedback.',
  },
  {
    title: 'Deliver and hand over',
    detail:
      'You receive the finished work, the source code and short notes on how it fits together, so it is easy to maintain.',
  },
];
