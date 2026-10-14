import { Component } from '@angular/core';
import { MockupFrame } from '../mockup-frame/mockup-frame';

// Layout editor: draggable layers, a cropped media zone, rich text and a playlist timeline.
@Component({
  selector: 'app-signage-mockup',
  imports: [MockupFrame],
  templateUrl: './signage-mockup.html',
  styleUrl: './signage-mockup.css',
  host: { 'aria-hidden': 'true' },
})
export class SignageMockup {
  protected readonly layers = ['#0f6b5c', '#c98a3a', '#5a6fa8', '#8a5a7d'];
  protected readonly clips = [
    { width: 22, tone: 'a' },
    { width: 30, tone: 'b', active: true },
    { width: 16, tone: 'c' },
    { width: 24, tone: 'a' },
  ];
}
