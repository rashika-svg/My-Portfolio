import { Component } from '@angular/core';
import { projects } from '../../content/projects';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-work',
  imports: [ProjectCard, SectionHeading],
  templateUrl: './work.html',
  host: { class: 'block' },
})
export class Work {
  protected readonly featured = projects[0];
  protected readonly others = projects.slice(1);
}
