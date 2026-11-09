import { Component } from '@angular/core';
import { engagements, processSteps } from '../../content/working-together';
import { PageSection } from '../../shared/page-section/page-section';

@Component({
  selector: 'app-working-together',
  imports: [PageSection],
  templateUrl: './working-together.html',
  styleUrl: './working-together.css',
  host: { class: 'block' },
})
export class WorkingTogether {
  protected readonly steps = processSteps;
  protected readonly engagements = engagements;
}
