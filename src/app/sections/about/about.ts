import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { coreSkills, skillGroups } from '../../content/skills';
import { PageSection } from '../../shared/page-section/page-section';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, PageSection],
  templateUrl: './about.html',
  host: { class: 'block' },
})
export class About {
  protected readonly profile = profile;
  protected readonly skillGroups = skillGroups;
  protected readonly facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Time zone', value: profile.timezone },
    { label: 'Experience', value: 'Four years, full-time' },
    { label: 'Freelance', value: profile.availability },
    { label: 'Usual stack', value: coreSkills.join(', ') },
  ];
}
