export interface Service {
  title: string;
  benefit: string;
  goodFor: string;
}

export const services: Service[] = [
  {
    title: 'Websites and responsive builds',
    benefit:
      'A fast, responsive website or landing page built from your design or brief, and checked on phones, tablets and desktops so it looks right wherever your customers are.',
    goodFor: 'small businesses and startups',
  },
  {
    title: 'Angular dashboards',
    benefit:
      'Admin panels and dashboards with tables, filters, charts and forms that make your data and day-to-day operations easier to manage.',
    goodFor: 'founders and startups',
  },
  {
    title: 'Frontend feature development',
    benefit:
      'New features added to your existing Angular app, built to fit your codebase and conventions, so your team can keep working with them.',
    goodFor: 'startups and product teams',
  },
  {
    title: 'REST API integration',
    benefit:
      'Your interface connected to your backend or third-party APIs, with clear loading, error and empty states so users always know what is happening.',
    goodFor: 'startups and founders',
  },
  {
    title: 'UI improvements and bug fixes',
    benefit:
      'Layout bugs, broken flows and inconsistent styling fixed, so your existing site or app feels finished and trustworthy again.',
    goodFor: 'existing websites and apps',
  },
  {
    title: 'Ongoing frontend support',
    benefit:
      'Dependable frontend capacity when you need it. I pick up tickets, follow your process and hand back clean, reviewable code.',
    goodFor: 'agencies',
  },
];
