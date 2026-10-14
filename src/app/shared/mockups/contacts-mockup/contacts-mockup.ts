import { Component } from '@angular/core';
import { MockupFrame } from '../mockup-frame/mockup-frame';

// Contact list with a row being moved to the recycle bin and a restore prompt.
@Component({
  selector: 'app-contacts-mockup',
  imports: [MockupFrame],
  templateUrl: './contacts-mockup.html',
  styleUrl: './contacts-mockup.css',
  host: { 'aria-hidden': 'true' },
})
export class ContactsMockup {
  protected readonly contacts = [
    { initial: 'A', tone: '#cfe5dd' },
    { initial: 'M', tone: '#f0dcc0' },
    { initial: 'S', tone: '#d9def0', removing: true },
    { initial: 'K', tone: '#ead6e4' },
  ];
}
