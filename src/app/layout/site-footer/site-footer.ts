import { Component } from '@angular/core';
import { profile, site } from '../../content/profile';

@Component({
  selector: 'app-site-footer',
  host: { class: 'block tone-dark' },
  template: `
    <footer class="page-container">
      <div
        class="flex flex-col gap-3 border-t border-rule py-8 text-sm text-muted sm:flex-row sm:justify-between sm:gap-8"
      >
        <p>&copy; {{ year }} {{ name }}</p>
        <p>
          Built with Angular and Tailwind CSS, set in Bricolage Grotesque, Geist and Geist Mono.
          <a class="link" [href]="repo" target="_blank" rel="noopener noreferrer"
            >Source on GitHub<span class="sr-only"> (opens in a new tab)</span></a
          >
        </p>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly name = profile.name;
  protected readonly repo = site.repo;
  protected readonly year = new Date().getFullYear();
}
