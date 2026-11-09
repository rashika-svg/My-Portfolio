import { Component } from '@angular/core';
import { profile } from '../../content/profile';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  host: { class: 'block' },
})
export class SiteHeader {
  protected readonly name = profile.name;
  protected readonly availability = profile.availability;
  protected readonly links = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
}
