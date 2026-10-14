import { Component } from '@angular/core';
import { processSteps } from '../../content/process';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-process',
  imports: [SectionHeading],
  templateUrl: './process.html',
  styleUrl: './process.css',
  host: { class: 'block' },
})
export class Process {
  protected readonly steps = processSteps;
}
