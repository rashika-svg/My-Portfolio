import { Component, signal } from '@angular/core';
import { mailtoUrl, whatsappUrl } from '../../core/contact-links';
import { profile } from '../../content/profile';
import { Icon, IconName } from '../../shared/icon/icon';

interface ContactLink {
  label: string;
  url: string;
  icon: IconName;
}

@Component({
  selector: 'app-contact',
  imports: [Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  host: { class: 'block' },
})
export class Contact {
  protected readonly profile = profile;
  protected readonly mailto = mailtoUrl(profile.email);
  protected readonly copyState = signal<'idle' | 'copied' | 'failed'>('idle');
  protected readonly checklist = [
    'What you are building and who it is for',
    'What you need: a new build, a feature or fixes',
    'Your timeline and any fixed deadlines',
    'Links to designs, your current site or repository',
    'A budget range, if you have one',
  ];
  protected readonly links: ContactLink[] = [
    { label: 'LinkedIn', url: profile.linkedin, icon: 'linkedin' },
    { label: 'GitHub', url: profile.github, icon: 'github' },
    ...(profile.whatsapp
      ? [
          {
            label: 'WhatsApp',
            url: whatsappUrl(profile.whatsapp),
            icon: 'whatsapp',
          } satisfies ContactLink,
        ]
      : []),
  ];

  private resetTimer?: ReturnType<typeof setTimeout>;

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copyState.set('copied');
    } catch {
      this.copyState.set('failed');
    }
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copyState.set('idle'), 2500);
  }
}
