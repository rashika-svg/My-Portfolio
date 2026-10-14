import { Component } from '@angular/core';
import { services } from '../../content/services';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-services',
  imports: [SectionHeading],
  templateUrl: './services.html',
  host: { class: 'block' },
})
export class Services {
  protected readonly services = services;
}
