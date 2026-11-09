import { Component, input } from '@angular/core';

// Shared section shell: a large title with an optional note, then full-width content.
@Component({
  selector: 'app-page-section',
  host: { class: 'block', '[class]': "'tone-' + tone()" },
  template: `
    <section
      [id]="sectionId()"
      class="page-container py-20 lg:py-32"
      [attr.aria-labelledby]="sectionId() + '-title'"
    >
      <header class="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h2 [id]="sectionId() + '-title'" class="type-section lg:col-span-7">{{ heading() }}</h2>
        @if (note()) {
          <p class="max-w-120 text-muted lg:col-span-4 lg:col-start-9 lg:pb-1.5">{{ note() }}</p>
        }
      </header>
      <div class="mt-12 lg:mt-20">
        <ng-content />
      </div>
    </section>
  `,
})
export class PageSection {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
  readonly note = input('');
  readonly tone = input<'light' | 'tinted' | 'dark'>('light');
}
