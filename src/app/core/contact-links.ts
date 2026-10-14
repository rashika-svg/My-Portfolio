import { profile } from '../content/profile';

const inquirySubject = 'Project inquiry';
const inquiryBody = [
  `Hi ${profile.firstName},`,
  '',
  "I'd like to discuss a project.",
  '',
  'What I need:',
  'Timeline:',
  'Links (current site, designs or repo):',
  '',
  'Thanks,',
].join('\n');

export function mailtoUrl(email: string, subject = inquirySubject, body = inquiryBody): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${email}?${params}`;
}

export function whatsappUrl(
  number: string,
  text = `Hi ${profile.firstName}, I'd like to discuss a project.`,
): string {
  const digits = number.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
