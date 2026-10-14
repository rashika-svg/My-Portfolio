import { Component, input } from '@angular/core';

// Browser-style window used by the project illustrations.
@Component({
  selector: 'app-mockup-frame',
  host: { class: 'block', '[class.dark]': "tone() === 'dark'" },
  template: `
    <div class="titlebar"><i></i><i></i><i></i></div>
    <div class="content"><ng-content /></div>
  `,
  styles: `
    :host {
      overflow: hidden;
      border: 1px solid var(--color-line);
      border-radius: 0.875rem;
      background: var(--color-surface);
      box-shadow: var(--shadow-float);
    }

    .titlebar {
      display: flex;
      gap: 6px;
      align-items: center;
      height: 30px;
      padding-inline: 14px;
      border-bottom: 1px solid #eef0ec;
      background: #fafbf9;
    }

    .titlebar i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #dde2dc;
    }

    :host(.dark) {
      border-color: #22303d;
      background: #0f1824;
    }

    :host(.dark) .titlebar {
      border-color: #1c2835;
      background: #131e2b;
    }

    :host(.dark) .titlebar i {
      background: #2a3846;
    }
  `,
})
export class MockupFrame {
  readonly tone = input<'light' | 'dark'>('light');
}
