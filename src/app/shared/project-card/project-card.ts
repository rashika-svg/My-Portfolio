import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Project } from '../../content/projects';
import { Icon } from '../icon/icon';
import { ContactsMockup } from '../mockups/contacts-mockup/contacts-mockup';
import { SignageMockup } from '../mockups/signage-mockup/signage-mockup';
import { StreamingMockup } from '../mockups/streaming-mockup/streaming-mockup';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, Icon, SignageMockup, StreamingMockup, ContactsMockup],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  host: { class: 'block' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly featured = input(false);
}
