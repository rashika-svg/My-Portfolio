import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  host: { class: 'block max-w-2xl' },
  template: `
    <h2 [id]="headingId()" class="type-h2">{{ heading() }}</h2>
    @if (lede()) {
      <p class="type-lede mt-5 text-slate">{{ lede() }}</p>
    }
  `,
})
export class SectionHeading {
  readonly heading = input.required<string>();
  readonly headingId = input.required<string>();
  readonly lede = input('');
}
