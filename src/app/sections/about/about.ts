import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { profile } from '../../content/profile';
import { skillGroups } from '../../content/skills';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: { class: 'block' },
})
export class About {
  protected readonly profile = profile;
  protected readonly skillGroups = skillGroups;
  protected readonly facts = [
    { label: 'Experience', value: `${profile.experience} of professional frontend work` },
    { label: 'Based in', value: profile.location },
    { label: 'Time zone', value: profile.timezone },
    {
      label: 'Replies',
      value: profile.responseTime.charAt(0).toUpperCase() + profile.responseTime.slice(1),
    },
  ];
}
