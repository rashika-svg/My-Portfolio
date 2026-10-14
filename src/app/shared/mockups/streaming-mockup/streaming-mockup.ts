import { Component } from '@angular/core';
import { MockupFrame } from '../mockup-frame/mockup-frame';

// Streaming browse screen: side nav, featured banner, a title row and a ranked row.
@Component({
  selector: 'app-streaming-mockup',
  imports: [MockupFrame],
  templateUrl: './streaming-mockup.html',
  styleUrl: './streaming-mockup.css',
  host: { 'aria-hidden': 'true' },
})
export class StreamingMockup {
  protected readonly posters = [
    'linear-gradient(160deg, #2c6e74, #13303f)',
    'linear-gradient(160deg, #b0704f, #4a2732)',
    'linear-gradient(160deg, #5a6fa8, #1d2547)',
    'linear-gradient(160deg, #d0a54c, #6a4120)',
    'linear-gradient(160deg, #7d4d7a, #2a1a33)',
    'linear-gradient(160deg, #3f8a66, #173326)',
  ];
  protected readonly ranked = [1, 2, 3];
}
