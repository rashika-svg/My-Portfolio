import { mailtoUrl, whatsappUrl } from './contact-links';

describe('contact links', () => {
  it('builds a mailto link with an encoded subject and body', () => {
    const url = mailtoUrl('hello@site.dev', 'Project inquiry', 'Line one\nLine two');
    expect(url).toBe(
      'mailto:hello@site.dev?subject=Project%20inquiry&body=Line%20one%0ALine%20two',
    );
  });

  it('builds a WhatsApp link from a formatted number', () => {
    expect(whatsappUrl('+91 98765-43210', 'Hi')).toBe('https://wa.me/919876543210?text=Hi');
  });
});
