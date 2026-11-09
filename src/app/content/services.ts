export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Websites',
    description:
      'Responsive websites and landing pages, built from your design or brief and checked on real phone, tablet and desktop sizes.',
  },
  {
    title: 'Dashboards and admin panels',
    description:
      'Tables, filters, forms and charts in Angular, for teams that need to see and manage their data in one place.',
  },
  {
    title: 'Features for Angular apps',
    description:
      "New screens and features that follow your codebase's structure and conventions, so your team can keep maintaining them.",
  },
  {
    title: 'API integration',
    description:
      'Connecting the interface to REST APIs, including the loading, error and empty states that are easy to skip.',
  },
  {
    title: 'Fixes and improvements',
    description:
      'Layout bugs, broken flows, inconsistent styling and slow pages in a site or app you already have.',
  },
  {
    title: 'Support for agencies',
    description:
      'Extra Angular capacity when you need it. I pick up tickets, follow your process and hand back code that is ready for review.',
  },
];
