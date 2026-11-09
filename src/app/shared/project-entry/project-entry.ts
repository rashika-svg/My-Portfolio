import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Project } from '../../content/projects';
import { BrowserFrame } from '../browser-frame/browser-frame';

// One project, either as a full case study or as a compact entry.
@Component({
  selector: 'app-project-entry',
  imports: [NgOptimizedImage, NgTemplateOutlet, BrowserFrame],
  templateUrl: './project-entry.html',
  styleUrl: './project-entry.css',
  host: { class: 'block' },
})
export class ProjectEntry {
  readonly project = input.required<Project>();
  readonly variant = input<'case' | 'compact'>('case');

  protected readonly images = computed(() => this.project().images ?? []);
  protected readonly layout = computed(() => this.project().imageLayout ?? 'lead');

  // "Angular, RxJS and REST APIs"
  protected readonly stackText = computed(() => {
    const stack = this.project().stack;
    return stack.length > 1 ? `${stack.slice(0, -1).join(', ')} and ${stack.at(-1)}` : stack[0];
  });
}
