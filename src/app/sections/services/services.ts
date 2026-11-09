import { Component } from '@angular/core';
import { services } from '../../content/services';
import { PageSection } from '../../shared/page-section/page-section';

@Component({
  selector: 'app-services',
  imports: [PageSection],
  templateUrl: './services.html',
  host: { class: 'block' },
})
export class Services {
  protected readonly services = services;
}
