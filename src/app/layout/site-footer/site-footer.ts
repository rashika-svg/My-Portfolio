import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  host: { class: 'block on-dark bg-[#0a302a] text-white/60' },
  template: `
    <footer
      class="page-container flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <p>&copy; {{ year }} {{ profile.name }}</p>
      <p>Built with Angular and Tailwind CSS</p>
      <a
        href="#top"
        class="inline-flex items-center gap-1.5 font-medium text-white/85 hover:text-white"
      >
        Back to top
        <app-icon name="arrow-up" class="size-4" />
      </a>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
}
