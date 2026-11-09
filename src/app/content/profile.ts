// Single source for personal and contact details. Values marked TODO are placeholders.
export const profile = {
  name: 'Rashika Varshney',
  firstName: 'Rashika',
  role: 'Freelance Angular developer',
  experience: 'four years',
  location: 'Your City, India', // TODO
  timezone: 'IST (UTC+5:30)',
  availability: 'Taking on new projects',
  responseTime: 'within one business day',
  email: 'your-email@example.com', // TODO
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  github: 'https://github.com/rashika-svg',
  // International format without "+" or spaces. Set to '' to hide WhatsApp.
  whatsapp: '91XXXXXXXXXX', // TODO
  // Path to a square portrait in /public, e.g. '/images/portrait.jpg'. Leave empty to show none.
  photo: '',
};

export const site = {
  url: 'https://rashika-varshney.netlify.app',
  repo: 'https://github.com/rashika-svg/My-Portfolio',
  title: `${profile.name} | Freelance Angular Developer`,
  description:
    'Frontend developer with four years of professional Angular experience. Freelance websites, dashboards, Angular features and fixes for startups, small businesses and agencies.',
  ogImage: '/og-image.png',
};
