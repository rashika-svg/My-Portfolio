import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { coreSkills } from '../../content/skills';
import { DashboardMockup } from '../../shared/mockups/dashboard-mockup/dashboard-mockup';

@Component({
  selector: 'app-hero',
  imports: [DashboardMockup],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  host: { class: 'block' },
})
export class Hero {
  protected readonly profile = profile;
  protected readonly skills = coreSkills;
}
