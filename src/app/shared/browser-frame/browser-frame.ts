import { Component, input } from '@angular/core';

// A plain browser window around a real screenshot, showing the address it came from.
@Component({
  selector: 'app-browser-frame',
  host: { class: 'block' },
  template: `
    <div class="bar">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      @if (url()) {
        <span class="address">{{ url() }}</span>
      }
    </div>
    <ng-content />
  `,
  styles: `
    :host {
      overflow: hidden;
      border: 1px solid rgb(255 255 255 / 0.1);
      border-radius: 8px;
      background: #0d0f11;
      box-shadow: 0 40px 80px -40px rgb(0 0 0 / 0.7);
    }

    .bar {
      position: relative;
      display: flex;
      align-items: center;
      height: 2.25rem;
      padding-inline: 0.875rem;
      border-bottom: 1px solid rgb(255 255 255 / 0.08);
      background: #1f2327;
    }

    .dots {
      display: flex;
      gap: 0.375rem;
    }

    .dots i {
      width: 0.5625rem;
      height: 0.5625rem;
      border-radius: 50%;
      background: #3b4046;
    }

    .address {
      position: absolute;
      left: 50%;
      max-width: 60%;
      overflow: hidden;
      padding: 0.125rem 0.875rem;
      border-radius: 4px;
      background: #2a2f34;
      color: #a3a9af;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      transform: translateX(-50%);
    }
  `,
})
export class BrowserFrame {
  readonly url = input('');
}
