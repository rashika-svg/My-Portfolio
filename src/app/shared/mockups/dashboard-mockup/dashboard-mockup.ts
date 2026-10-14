import { Component } from '@angular/core';

// Decorative hero illustration: a dashboard editor with one widget selected. Plays once on load.
@Component({
  selector: 'app-dashboard-mockup',
  templateUrl: './dashboard-mockup.html',
  styleUrl: './dashboard-mockup.css',
  host: { 'aria-hidden': 'true' },
})
export class DashboardMockup {
  protected readonly kpis = [
    'M0 24 L18 20 L34 22 L52 13 L70 15 L86 7 L100 9',
    'M0 18 L16 21 L34 14 L50 16 L68 9 L84 12 L100 5',
    'M0 22 L20 17 L36 19 L54 11 L72 13 L88 6 L100 8',
  ];
  protected readonly listItems = ['live', 'live', 'draft', 'live'];
}
