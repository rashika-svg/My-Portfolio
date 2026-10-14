// Single source for personal and contact details. Values marked TODO are placeholders.
export const profile = {
  name: 'Rashika Varshney',
  firstName: 'Rashika',
  initials: 'RV',
  role: 'Freelance Angular developer',
  experience: '4 years',
  location: 'Your City, India', // TODO
  timezone: 'IST (UTC+5:30)',
  availability: 'Available for freelance projects',
  responseTime: 'within one business day',
  email: 'your-email@example.com', // TODO
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  github: 'https://github.com/rashika-svg',
  // International format without "+" or spaces. Set to '' to hide WhatsApp.
  whatsapp: '91XXXXXXXXXX', // TODO
  // Path to a square portrait in /public, e.g. '/images/portrait.jpg'. Empty shows a monogram.
  photo: '',
};

export const site = {
  url: 'https://your-domain.com', // TODO
  title: `${profile.name} | Freelance Angular & Frontend Developer`,
  description:
    'Freelance Angular developer with 4 years of experience building websites, dashboards and web app features for startups, small businesses and agencies.',
  ogImage: '/og-image.png',
};
