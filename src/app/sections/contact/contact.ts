import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { mailtoUrl, whatsappUrl } from '../../core/contact-links';
import { profile } from '../../content/profile';
import { PageSection } from '../../shared/page-section/page-section';

interface Channel {
  label: string;
  text: string;
  url: string;
}

const indiaTime = new Intl.DateTimeFormat('en-IN', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata',
});

@Component({
  selector: 'app-contact',
  imports: [PageSection],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  host: { class: 'block' },
})
export class Contact {
  protected readonly profile = profile;
  protected readonly mailto = mailtoUrl(profile.email);
  protected readonly copyState = signal<'idle' | 'copied' | 'failed'>('idle');
  // Filled in the browser only, so the prerendered page never shows a stale time.
  protected readonly localTime = signal('');
  protected readonly checklist = [
    'What you are building and who it is for',
    'What you need from me: a new build, a feature or fixes',
    'Your timeline, and any fixed deadlines',
    'Links to designs, your current site or the repository',
  ];
  protected readonly channels: Channel[] = [
    ...(profile.whatsapp
      ? [{ label: 'WhatsApp', text: `+${profile.whatsapp}`, url: whatsappUrl(profile.whatsapp) }]
      : []),
    { label: 'LinkedIn', text: withoutProtocol(profile.linkedin), url: profile.linkedin },
    { label: 'GitHub', text: withoutProtocol(profile.github), url: profile.github },
  ];

  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const tick = () => this.localTime.set(indiaTime.format(new Date()));
      tick();
      const clock = setInterval(tick, 30_000);
      destroyRef.onDestroy(() => clearInterval(clock));
    });
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(profile.email);
      this.copyState.set('copied');
    } catch {
      this.copyState.set('failed');
    }
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copyState.set('idle'), 2500);
  }
}

function withoutProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
