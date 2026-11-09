import { Component } from '@angular/core';
import { featuredProjects, smallerProjects } from '../../content/projects';
import { PageSection } from '../../shared/page-section/page-section';
import { ProjectEntry } from '../../shared/project-entry/project-entry';

@Component({
  selector: 'app-work',
  imports: [PageSection, ProjectEntry],
  templateUrl: './work.html',
  host: { class: 'block' },
})
export class Work {
  protected readonly featured = featuredProjects;
  protected readonly smaller = smallerProjects;
}
