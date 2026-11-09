import { Component } from '@angular/core';
import { profile } from '../../content/profile';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  host: { class: 'block' },
})
export class Intro {
  protected readonly profile = profile;
}
